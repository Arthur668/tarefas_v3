let tarefas = []

const addTarefa = () => {
    let tarefa = document.getElementById('tarefa').value
    tarefas.push(tarefa)
    document.getElementById('tarefa').value = ""

    if (localStorage.getItem('tarefas') != null) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }
    let data = new Date();
    let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;
    tarefas.push([date, tarefa])
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const list = () => {
    let tbody = document.querySelector('#tr-tarefa')

    if (localStorage.getItem('tarefas') != null) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    } else {
        tarefas.push(["sem dados", "sem dados"])
    }
    tarefas.forEach((element,index) => {
        tbody.innerHTML += "<tr><td>" + element[0] + "</td><td>" + element[1] + "</td>" + "<td><button onclick='deletar(" + index + ")'>🗑</button></td></tr>"
    });

}

const deletar = (index) => {
    newarray = tarefas.filter(
        (e, i)=> i != index
    )
    
    localStorage.setItem('tarefas', JSON.stringify(newarray))
    document.location.reload(true)
}