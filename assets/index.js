let container_tasks = document.querySelector(`.tasks`);
let button = document.querySelector(`.button-add-task`);
let task_name = document.querySelector(`.input-name`);
let task_description = document.querySelector(`.input-description`);
let api = new API();
async function renderTasks(){
    let data = await api.loadTasks();
    console.log(data);
    container_tasks.innerHTML = ``;
    for(let i = 0; i < data.length; i++){
        let task = data[i];
        let name = task.name;
        let desc = task.description;
        let node = document.createElement(`div`);
        node.classList.add(`card`);
        node.innerHTML = `
        <div class="card-title">
            <span class="card-name">${name}</span>
            <button class="delete">❌</button>
        </div>
        <div class="card-body">
            <span class="card-description">${desc}</span>
        </div>
        `;
        let button_del = node.querySelector(`button`);
        button_del.addEventListener(`click`, async function(){
            await api.deleteTask(task.id);
            renderTasks();
        });
        container_tasks.append(node);
    }
    container_tasks.scrollIntoView(false);
} 

button.addEventListener('click', async() => {
    let name = task_name.value;
    let description = task_description.value;
    
    await api.addTask(name, description);

    await renderTasks();
});
renderTasks();