
const user =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(!user){

window.location =
"login.html";

}

document
.getElementById(
"welcomeUser"
)
.innerText =
"Welcome, " + user.name;

document
.getElementById(
"progressBar"
)
.style.width =
user.progress + "%";

document
.getElementById(
"progressBar"
)
.innerText =
user.progress + "%";

document
.getElementById(
"completedCourses"
)
.innerText =
user.completedCourses.length;

function logout(){

localStorage.removeItem(
"currentUser"
);

window.location =
"login.html";

}