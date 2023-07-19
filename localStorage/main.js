// get the ul element
const ul = document.querySelector('ul');
// get the input element
const input = document.getElementById('item');
// get the add button
const addButton = document.getElementById('addButton');
// get the delete button
const deleteButton = document.getElementById('deleteButton');
//get the localStorage items
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//for each item in the localStorage, add it to the ul
itemsArray.forEach(addTask);

//add the new task to the ul and to the localStorage
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}
//add the new task to the localStorage
function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}
//delete all the tasks from the ul and from the localStorage
function deleteAllTask(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}
//add the new task to the ul and to the localStorage when the add button is clicked
addButton.addEventListener( 'click', add );
//delete all the tasks from the ul and from the localStorage when the delete button is clicked
deleteButton.addEventListener( 'click', deleteAllTask );