// create object student
const student = {
  name: "John",
  age: 19,
  subject: "Javascript",
};
// create object tutorial
const tutorial = {
  subject: "Javascript",
  cost: "Free",
  user: "student",
};
//create session storage
sessionStorage.setItem("student", JSON.stringify(student));
// get data
const data = sessionStorage.getItem("student");
// show data
document.getElementById("retrive").innerHTML = data;
//create session storage
sessionStorage.setItem("tutorial", JSON.stringify(tutorial));
// get data
const dataTutorial = sessionStorage.getItem("tutorial");
// show data
document.getElementById("retrive1").innerHTML = dataTutorial;
