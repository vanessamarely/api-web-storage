const ul = document.querySelector('ul');
const input = document.getElementById('item');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);

function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}

function deleteAllTask(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}

addButton.addEventListener( 'click', add );

deleteButton.addEventListener( 'click', deleteAllTask );