const { data } = require('./p4-data.js')

// Returns an array of strings where each array element is a question
function getQuestions() {
    return data.map(element => element.question)
}

//console.log(getQuestions(data));

// Returns an array of strings where each array element is an answer
function getAnswers() {
    return data.map(element => element.answer)
}

//console.log(getAnswers(data));

// Returns a copy of the original data array of objects
function getQuestionsAnswers() {
    return newArray = data.map(element => ({...element}))
}
    
//console.log(getQuestionsAnswers(data));

// Returns an object with the following properties
function getQuestion(number = "") {
  if (Number.isFinite(number) == false) {
   return {'error': 'Question number must be an integer', 'question': '', 'number': ''}
  }
   else if (number < 1) {
   return {'error': 'Question number must be >= 1', 'question': '', 'number': ''}
   }
   else if (number >= data.length+1) {
   return {'error': 'Question number must be less than the number of questions (3)', 'question': '', 'number': ''}
   }
   else {
    number = "Q" + number
    obj = "";
    for (let element of data)
        if (element.question == number) {
            obj = element
        }
    return { 'error': '', 'question': obj.question, 'number': Number(number.replace(/[^0-9]/, '')) };
    }
}

//console.log(getQuestion("1"));

// Returns an object with the following properties
function getAnswer(number = "") {  
    if (Number.isFinite(number) == false) {
     return {'error': 'Question number must be an integer', 'answer': '', 'number': ''}
    }
     else if (number < 1) {
     return {'error': 'Question number must be >= 1', 'answer': '', 'number': ''}
     }
     else if (number >= data.length+1) {
     return {'error': 'Question number must be less than the number of questions (3)', 'answer': '', 'number': ''}
     }
     else {
      number = "A" + number
    obj = "";
    for (let element of data) 
        if (element.answer == number) {
            obj = element 
        }
    return {'error': '', 'answer': obj.answer, 'number': number.replace(/[^0-9]/, '')};
      }
 }

//console.log(getAnswer("1"));

// Returns an object with the following properties
function getQuestionAnswer(number = "") {
  if (Number.isFinite(number) == false) {
    return {'error': 'Question number must be an integer', 'question': '', 'number': ''}
   }
    else if (number < 1) {
    return {'error': 'Question number must be >= 1', 'question': '', 'number': ''}
    }
    else if (number >= data.length+1) {
    return {'error': 'Question number must be less than the number of questions (3)', 'question': '', 'number': ''}
    }
    else {
    number = "Q" + number
    obj = "";
    for (let element of data) 
        if (element.question == number) {
            obj = element 
        }
    return {'error': '', 'question': obj.question, 'number': number.replace(/[^0-9]/, ''), 'answer': obj.answer};
  }
}

//console.log(getQuestionAnswer("2"));

function addQuestionAnswer(info = {}) {
  if (info == 'undefined' || info == null || typeof info.question == 'undefined' ) {
    return {'error': 'Object question property required', 'message': '', 'number': -1}
  }
  else if (typeof info.answer == 'undefined') {
    return {'error': 'Object answer property required', 'message': '', 'number': -1}
  }
  else {
    data.push(info);
    return {'error': '', 'message': 'Question added', 'number': data.length}
  }
}

//console.log(addQuestionAnswer({question: "Q4", answer: "A4"}));


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  // addQuestionAnswer()
if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    addQuestionAnswer
  };

  