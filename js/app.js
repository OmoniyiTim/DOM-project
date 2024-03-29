//to  define all the ui  variable
const form =document.querySelector('#task-form');
const taskList =document.querySelector('.collection');
const clearBtn =document.querySelector('.clear-tasks');
const filter =document.querySelector('#filter');
const taskInput =document.querySelector('#task');

loadEventlisteners();

function  loadEventlisteners(){
    //add task event
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup',filterTask);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('done');
    }
   
    //create li element 

    const li =document.createElement('li');
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    // to ceate new link
    const link =document.createElement('a');
    //to append class to link
    link.className ='delete-item secondary-content';
    // to add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // to append the link to li
    li.appendChild(link);
    //to append li to ul
    taskList.appendChild(li);
    // to clear the input value
    taskInput.value = '';

 
    e.preventDefault();
}

function removeTask (e){
 if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
 }
}

function clearTask(){
   while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
   }
}

function filterTask (e){
    const text = e.target.value.toLowerCase();
 

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item =task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
    // (function(task){
    //     const item = task.firstChild.textContent; 
      
        
    // });
}