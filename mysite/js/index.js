function dis() {
  document.getElementById("magicbutton").disabled = true;
}
function page2() {
  window.location.href = "reverse.html";
}

function reverseString() {
  var results = document.myform.words.value;
  if (results == null || results == "") {
    myMessages();
    document.getElementById("words").focus();
    return false;
  }
  var answer = results
    .split(" ")
    .reverse()
    .join(" ");
  document.getElementById("message").innerHTML = answer.toUpperCase();
  clear();
  document.getElementById("words").focus();
}
function clear() {
  myform.words.value = "";
}
// object created but not in use.
var Developer = {
  firtname: "Elvis",
  lastname: "Bueno",
  degree: "Computer Science",
  university: "Austin Peay State University",
  minor: "Mobile Software"
};

var messages = [
  "What is your problem, you forgot something?",
  "Hello World to you. Fill in the blanks first.",
  "You cannot leave it blank, duhhhh.",
  "Type something in first, then click the button.",
  "Ok, how many times do you have to click the button?",
  "Do great things, and pay attention to me.",
  "Ok, looks like you can not read a word.",
  "Follow instructions...",
  "FYI, this website was created by Elvis Bueno. He is awsome!",
  "oops, looks like you forgot something."
];

function myMessages() {
  var randomNumber = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerHTML = messages[randomNumber];
}
