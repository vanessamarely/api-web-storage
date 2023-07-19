const student = {
  name: "John",
  age: 19,
  subject: "Javascript",
};

const tutorial = {
  subject: "Javascript",
  cost: "Free",
  user: "student",
};
//create session storage
sessionStorage.setItem("student", JSON.stringify(student));
// get data
const data = sessionStorage.getItem("student");

document.getElementById("retrive").innerHTML = data;
//create session storage
sessionStorage.setItem("tutorial", JSON.stringify(tutorial));
// get data
var dataTutorial = sessionStorage.getItem("tutorial");
document.getElementById("retrive1").innerHTML = dataTutorial;
