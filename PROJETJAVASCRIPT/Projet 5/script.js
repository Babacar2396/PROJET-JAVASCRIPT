var questions = [
  {
    question: "1) Quel est le Meilleur Langage de Programmation en 2022 ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "2) Quel est le nom du premier ordinateur personnel ?",
    a: "Apple II",
    b: "Commodore PET",
    c: "IBM PC",
    d: "Altair 8800",
    correct: "d"
  },
  {
    question: "3) Quel est le nom de la première console de jeu vidéo ?",
    a: "Atari 2600",
    b: "Magnavox Odyssey",
    c: "ColecoVision",
    d: "Intellivision",
    correct: "b"
  },
  {
    question: "4) Qui a inventé le World Wide Web ?",
    a: "Steve Jobs",
    b: "Tim Berners-Lee",
    c: "Bill Gates",
    d: "Mark Zuckerberg",
    correct: "b"
  },
  {
    question: "5) Dans quel langage est écrit le navigateur web Google Chrome ?",
    a: "JavaScript",
    b: "Python",
    c: "C++",
    d: "Java",
    correct: "c"
  }
];

var questionIndex = 0;
var score = 0;

var questionElement = document.getElementById("question");
var choix1Element = document.getElementById("choix1");
var choix2Element = document.getElementById("choix2");
var choix3Element = document.getElementById("choix3");
var choix4Element = document.getElementById("choix4");
var suivantButton = document.getElementById("suivant");
var scoreElement = document.getElementById("score");

afficherQuestion();

function afficherQuestion() {
  var questionCourante = questions[questionIndex];
  questionElement.innerHTML = questionCourante.question;
  choix1Element.innerHTML = questionCourante.a;
  choix2Element.innerHTML = questionCourante.b;
  choix3Element.innerHTML = questionCourante.c;
  choix4Element.innerHTML = questionCourante.d;
}

function verifierReponse() {
  var reponse = document.querySelector('input[name="reponse"]:checked').value;
  if (reponse === questions[questionIndex].correct) {
    score++;
  }
}

suivantButton.addEventListener("click", function() {
  verifierReponse();
  questionIndex++;
  if (questionIndex === questions.length) {
    questionElement.innerHTML = "Vous avez trouvé " + score + "/" + questions.length + " questions";
    choix1Element.style.display = "none";
    choix2Element.style.display = "none";
    choix3Element.style.display = "none";
    choix4Element.style.display = "none";
    suivantButton.style.display = "none";
    scoreElement.style.display = "none";
  } else {
    afficherQuestion();
    suivantButton= true;
  }
});

choix1Element.addEventListener("click", function() {
  suivantButton = false;
});

choix2Element.addEventListener("click", function() {
  suivantButton = false;
});

choix3Element.addEventListener("click", function() {
  suivantButton = false;
});

choix4Element.addEventListener("click", function() {
  suivantButton = false;
});