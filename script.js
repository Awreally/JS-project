const taskText = document.querySelector('#task');
const taskBtn = document.querySelector('#taskBtn')
const displayTask = document.querySelector('.displaytask');

taskBtn.addEventListener('click', () => {
    const taskLi = document.createElement('li');
    displayTask.appendChild(taskLi);
    
    const checkBtn = document.createElement('button');
    checkBtn.classList.add = 'check-btn';
    taskLi.appendChild(checkBtn);
    
    const span = document.createElement('span');
    span.textContent = taskText.value;
    taskLi.appendChild(span);
    taskText.value = "";
    
    checkBtn.addEventListener('click', () => {
        taskLi.classList.toggle('done');
    });
})