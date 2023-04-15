const db = require("../models");
const Quiz = db.quizzes;

//Create

exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      massage: "quiz created succesfully",
      data: data,
    });
  } catch (eror) {
    res.status(500).json({
      massage: error.massage,
      data: null,
    });
  }
};

//Read

exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json({
      message: "quiz retrieved succesfully",
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      massage: error.massage,
      data: null,
    });
  }
};

//Mengubah data

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
    res.json({
      massage: "Data berubah kaya power ranger",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      massage: error.massage || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

// Menghapus

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });

    quiz.destroy();

    res.json({
      massage: "quiz deleted succesfull",
    });
  } catch (error) {
    res.status(500).json({
      massage: error.massage || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

//mengambil data sesuai id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    res.json({
      massage: `Quizzes retrieved successfully with id=${id}.`,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

//menampilkan atau mengambil semua data quiz

exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      categoryId: id,
    },
  });
  res.json({
    massage: `Quizzes retrieved successfully with categoryid=${id}`,
    data: quizzes,
  });
};

// menampilkan atau mengambil semua data quiz
exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      levelId: id,
    },
  });
  res.json({
    message: `Quizzes retrived successfully with levelId=${id}`,
    data: quizzes,
  });
};
