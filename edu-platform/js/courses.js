
const courses = [

{
id:1,
title:"HTML & CSS",
level:"Beginner",
duration:"20 Hours"
},

{
id:2,
title:"JavaScript",
level:"Intermediate",
duration:"30 Hours"
},

{
id:3,
title:"Bootstrap",
level:"Beginner",
duration:"10 Hours"
},

{
id:4,
title:"Python",
level:"Intermediate",
duration:"40 Hours"
},

{
id:5,
title:"Machine Learning",
level:"Advanced",
duration:"60 Hours"
},

{
id:6,
title:"Generative AI",
level:"Advanced",
duration:"50 Hours"
}

];

const container =
document.getElementById(
"coursesContainer"
);

function displayCourses(data){

container.innerHTML="";

data.forEach(course=>{

container.innerHTML += 

<div class="col-md-4 mb-4">

<div class="card p-4">

<h4>
${course.title}
</h4>

<p>
Level:
${course.level}
</p>

<p>
Duration:
${course.duration}
</p>

<button
class="btn btn-success"
onclick="enrollCourse(${course.id})">

Enroll

</button>

</div>

</div>

;

});

}

displayCourses(courses);

document
.getElementById(
"searchInput"
)
.addEventListener(
"keyup",
function(){

let value =
this.value
.toLowerCase();

let filtered =
courses.filter(course=>

course.title
.toLowerCase()
.includes(value)

);

displayCourses(filtered);

});