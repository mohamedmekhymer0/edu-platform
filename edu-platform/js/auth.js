
const registerForm =
document.getElementById(
"registerForm"
);

if(registerForm){

registerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

const user = {

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

password:
document.getElementById("password").value,

progress:0,

completedCourses:[]

};

users.push(user);

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert(
"Registration Successful"
);

window.location =
"login.html";

});

}

const loginForm =
document.getElementById(
"loginForm"
);

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

const email =
document.getElementById(
"email"
).value;

const password =
document.getElementById(
"password"
).value;

const user =
users.find(

u=>

u.email===email &&
u.password===password

);

if(user){

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

window.location =
"dashboard.html";

}
else{

alert(
"Invalid Credentials"
);

}

});

}