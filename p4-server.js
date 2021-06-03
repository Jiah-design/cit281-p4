const fastify = require("fastify")();
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer, addQuestionAnswer } = require('./p4-module.js');

fastify.get("/cit/question", (request, reply) => {
    let response = {
        error: '',
        statusCode: 200,
        questions: getQuestions()
    }
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  });

  fastify.get("/cit/answer", (request, reply) => {
    let response = {
        error: '',
        statusCode: 200,
        answers: getAnswers()
    }
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  });

  fastify.get("/cit/questionanswer", (request, reply) => {
    let response = {
        error: '',
        statusCode: 200,
        questions_answers: getQuestionsAnswers()
    }
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  });

  fastify.get("/cit/question/:number", (request, reply) => {
    const req = request.params.number;
    const num = parseInt(req);
    const q = getQuestion(num);
    const {error: reqError, question: reqQuestion, number: reqNumber} = q;
    const response = {
        error: reqError,
        statusCode: 200,
        question: reqQuestion,
        number: reqNumber
    }
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  });

  fastify.get("/cit/answer/:number", (request, reply) => {
    const req = request.params.number;
    const num = parseInt(req);
    const q = getAnswer(num);
    const {error: reqError, answer: reqAnswer, number: reqNumber} = q;
    const response = {
        error: reqError,
        statusCode: 200,
        answer: reqAnswer,
        number: reqNumber
    }
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  });

  fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const req = request.params.number;
    const num = parseInt(req);
    const q = getQuestionAnswer(num);
    const {error: reqError, question: reqQuestion, number: reqNumber, answer: reqAnswer} = q;
    const response = {
        error: reqError,
        statusCode: 200,
        question: reqQuestion,
        answer: reqAnswer,
        number: reqNumber
    }
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  });

  fastify.get("*", (request, reply) => {
    const response = {
        error: "Route not found",
        statusCode: 404
    }
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
});

  fastify.post("/cit/question", (request, reply) => {
  const { question, answer } = request.body;
  const reqObj = request.body; 
  const obj = addQuestionAnswer(reqObj)
  const {error: reqError, number: reqNumber} = obj
  const response = {
    error: reqError,
    statusCode: 201,
    number: reqNumber
  }
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});