let user =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

let score =
localStorage.getItem(
"quizScore"
);

document
.getElementById(
"studentName"
)
.innerText =
user.name;

document
.getElementById(
"score"
)
.innerText =
"Quiz Score: " +
score +
"/2";