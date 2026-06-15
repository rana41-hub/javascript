let todo_task;
let date_value;

function add_task(){
  
  todo_task = document.querySelector('#input-box').value;
  date_value = document.querySelector('#task-date').value;
  document.querySelector('#task-display').innerHTML += `
  <div class = 'task-container'>
  <span>${todo_task}</span>
  <span>${date_value}</span>
  <button class = 'delete-button' onclick = "delete_task(this);">Delete</button>
  </div>`;
};

function delete_task(clickedButton){

  clickedButton.parentElement.remove();
}
