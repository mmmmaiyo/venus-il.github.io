//Drag & Drop feature
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function quizStart() {
  $('.quiz-container').hide();
  $('#q1').show();
}

//Pagination using buttons contained within each 'page'
$('#q1 .next').click(
  function() {
    $('.quiz-container').hide();
    $('#q2').show();
});

$('#q2 .next').click(
  function() {
    $('.quiz-container').hide();
    $('#q3').show();
});

$('#q2 .previous').click(
  function() {
    $('.quiz-container').hide();
    $('#q1').show();
});

$('#q3 .next').click(
  function() {
    $('.quiz-container').hide();
    $('#q4').show();
});

$('#q3 .previous').click(
  function() {
    $('.quiz-container').hide();
    $('#q2').show();
});

$('#q4 .next').click(
  function() {
    $('.quiz-container').hide();
    $('#q5').show();
});

$('#q4 .previous').click(
  function() {
    $('.quiz-container').hide();
    $('#q3').show();
});

$('#q5 .previous').click(
  function() {
    $('.quiz-container').hide();
    $('#q4').show();
});

//User input validation and repsonse
function validateq1(ev) {
  ev.preventDefault();

  const q1question = document.getElementById('q-dd-1');
  const q1answer = document.getElementById('q1-b');

  if(q1question.contains(q1answer) == false) {
    document.getElementById("q1-a").style.color = "red";
    document.getElementById("q1-b").style.color = "lightgreen";
    document.getElementById("q1-c").style.color = "red";
    document.getElementById("q1-d").style.color = "red";
    $("#q1-ans-hidden").show();
  }

  else {
    document.getElementById("q1-b").style.color = "lightgreen";
    $("#q1-ans-hidden").hide();
    numCorrect++;
  }
}

function validateq2(ev) {
  ev.preventDefault();

  const q2question = document.getElementById('q-dd-2');
  const q2answer = document.getElementById('q2-a');

  if(q2question.contains(q2answer) == false) {
    document.getElementById("q2-a").style.color = "lightgreen";
    document.getElementById("q2-b").style.color = "red";
    document.getElementById("q2-c").style.color = "red";
    document.getElementById("q2-d").style.color = "red";
    $("#q2-ans-hidden").show();
  }

  else {
    document.getElementById("q2-a").style.color = "lightgreen";
    $("#q2-ans-hidden").hide();
    numCorrect++;
  }
}

function validateq3(ev) {
  ev.preventDefault();

  const q3answer = document.getElementById("q3-d").selected;

  if (q3answer == false) {
    document.getElementById("q3-a").style.color = "red";
    document.getElementById("q3-b").style.color = "red";
    document.getElementById("q3-c").style.color = "red";
    document.getElementById("q3-d").style.color = "lightgreen";
    $("#q3-ans-hidden").show();
  }

  else {
    document.getElementById("q3-d").style.color = "lightgreen";
    $("#q3-ans-hidden").hide();
    numCorrect++;
  }
}

function validateq4(ev) {
  ev.preventDefault();

  const q4answer = document.getElementById("q4-c").selected;

  if (q4answer == false) {
    document.getElementById("q4-a").style.color = "red";
    document.getElementById("q4-b").style.color = "red";
    document.getElementById("q4-c").style.color = "lightgreen";
    document.getElementById("q4-d").style.color = "red";
    $("#q4-ans-hidden").show();
  }

  else {
    document.getElementById("q4-c").style.color = "lightgreen";
    $("#q4-ans-hidden").hide();
    numCorrect++;
  }
}

function validateq5(ev) {
  ev.preventDefault();

  const q5answer = document.getElementById("background-attachment").checked;

  if(q5answer == false) {
    document.getElementById("q5-a").style.color = "red";
    document.getElementById("q5-b").style.color = "red";
    document.getElementById("q5-c").style.color = "lightgreen";
    document.getElementById("q5-d").style.color = "red";
    $("#q5-ans-hidden").show();
  }
  else {
    document.getElementById("q5-c").style.color = "lightgreen";
    $("#q5-ans-hidden").hide();
    numCorrect++;
  }
}

function validate(ev) {
  validateq1(ev);
  validateq2(ev);
  validateq3(ev);
  validateq4(ev);
  validateq5(ev);

  $('.quiz-container').show();
  $('#retry').show()

  results.innerHTML = `You got ${numCorrect} right out of 5!`;
}

function reload() {
  window.location.reload();
}

//Variales
let numCorrect = 0;
const submit = document.getElementById("submit");
const results = document.getElementById("results");

//Event Listeners
submit.addEventListener("click", validate);