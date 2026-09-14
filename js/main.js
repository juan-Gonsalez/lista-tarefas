const form = document.querySelector('form.form');

const newTaskList = document.querySelector('.new.task-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.task.value === '') {
        alert('Não podemos adicionar tasks sem conteúdo.')
        return ;
    }
    
    const task = document.createElement('li');
    const texto = document.createElement('span');
    const botoes = document.createElement('div');
    const check = document.createElement('input');
    const apagar = document.createElement('button');
    const imglixeira = document.createElement('img');

    texto.textContent = form.task.value;

    texto.classList.add('texto-task');
    botoes.classList.add('apagar-check');
    apagar.classList.add('apagar');

    check.type = 'checkbox';

    imglixeira.src = 'img/lixeira.png'

    //preparando o evento de apagar e alterar estado da tarefa
    check.addEventListener('change', handleCheck);
    apagar.addEventListener('click', handleApagar);

    // estruturando o li
    apagar.appendChild(imglixeira);
    botoes.appendChild(apagar);
    botoes.appendChild(check);
    task.appendChild(texto);
    task.appendChild(botoes);

    task.classList.add('task');

    // Adicionar a li à newTaskList
    newTaskList.appendChild(task);

    form.task.value = '';
})

const completedList = document.querySelector('.completed.task-list');

function handleCheck (event) {
    const check = event.target;
    const task = check.closest('.task');
    
    //alterando entre tarefas pendentes e completas
    if(check.checked){
        task.classList.add('completed');
        completedList.appendChild(task);
    } else {
        task.classList.remove('completed');
        newTaskList.appendChild(task)
    }
}

function handleApagar(event) {
    const task = event.target.closest('.task');

    task.remove();
}