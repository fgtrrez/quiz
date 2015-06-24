// GET /quizes

// GET /quizes/question
exports.question = function(req, res) {
   res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
   if (req.query.respuesta === 'Roma' || req.query.respuesta === 'ROMA') { 
	   res.render('quizes/answer', {respuesta: '¡Correcto!'});
	}
   else {
	   res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};

// GET /quizes/author
exports.author = function(req, res) {
   res.render('quizes/author', {});
};

//  console.log("req.quiz.id: " + req.quiz.id);
