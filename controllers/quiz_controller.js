var models = require('../models/models.js');

// GET /quizes

// GET /quizes/:id
exports.show = function(req, res) {
   models.Quiz.find(req.params.quizId).then(function(quiz) {
   	res.render('quizes/show', {quiz: quiz})
   })
};

// GET /quizes/:id/answer
exports.show = function(req, res) {
   models.Quiz.find(req.params.quizId).then(function(quiz) {
	if (req.query.respuesta === quiz.respuesta) {
   		res.render('quizes/answer',
	 		{quiz: quiz, respuesta: 'Correcto'});
	}
	else {
		res.render('quizes/answer',
	 		{quiz: quiz, respuesta: 'Incorrecto'});
   })
};

// GET /quizes/question
exports.question = function(req, res) {
   models.Quiz.findAll().success(function(quiz) {
   	res.render('quizes/question', {pregunta: quiz[0].pregunta})
   })
};

// GET /quizes/answer
exports.answer = function(req, res) {
   models.Quiz.findAll().success(function(quiz) {
   	if (req.query.respuesta === quiz[0].respuesta) { 
	   res.render('quizes/answer', {respuesta: '¡Correcto!'});
	}
   	else {
	   res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
   })
};

// GET /quizes/author
exports.author = function(req, res) {
   res.render('quizes/author', {});
};


//  console.log("req.quiz.id: " + req.quiz.id);
