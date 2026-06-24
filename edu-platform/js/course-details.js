const lessons = [

{
id:1,
title:"Introduction"
},

{
id:2,
title:"Variables"
},

{
id:3,
title:"Functions"
},

{
id:4,
title:"DOM Manipulation"
}

];

document
.getElementById("courseTitle")
.innerText =
"JavaScript Course";

document
.getElementById("courseDescription")
.innerText =
"Learn JavaScript From Scratch.";

const container =
document.getElementById(
"lessonsContainer"
);

lessons.forEach(lesson=>{

container.innerHTML += 

<div class="card p-3 mb-3">

<h5>
${lesson.title}
</h5>

<a
href="lesson.html?id=${lesson.id}"
class="btn btn-primary">

Open Lesson

</a>

</div>

;

});