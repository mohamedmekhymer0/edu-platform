document
.getElementById("quizForm")
.addEventListener(
"submit",
function(e){

e.preventDefault();

let score = 0;

if(
document.querySelector(
'input[name="q1"]:checked'
)?.value === "correct"
){

score++;

}

if(
document.querySelector(
'input[name="q2"]:checked'
)?.value === "correct"
){

score++;

}

localStorage.setItem(
"quizScore",
score
);

window.location =
"certificate.html";

});