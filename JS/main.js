// بسم الله الرحمن الرحيم 
// Start Project




let input = document.querySelector(".contaner .add-task input")
let addButton = document.querySelector(".contaner .add-task .plus")
let TasksContaner = document.querySelector(".contaner .tasks-content")
let noTaskMessage = document.querySelector(".contaner .tasks-content .no-tasks-message")
let tasksCount = document.querySelector(".task-states .tasks-count span")
let tasksCompleted = document.querySelector(".task-states .tasks-completed span")





let completed = 0;
let tasks = 0;



window.onload = function() {
    input.focus();
}


addButton.onclick = function() {
    if (input.value !== "") {
        noTaskMessage.style.cssText = "display: none;"

        let span = document.createElement("span")
        span.classList.add("task-box")
        span.appendChild(document.createTextNode(input.value))

        let del = document.createElement("span")
        del.classList.add("delete")
        del.appendChild(document.createTextNode("Delete"))

        span.appendChild(del)
        TasksContaner.appendChild(span)
        input.value = "";
        input.focus();

        tasks++
        tasksCount.innerHTML = tasks
    } else {
        input.focus();
    }
}




document.addEventListener("click", function(ele) {
    if (ele.target.classList.contains("delete")) {
        ele.target.parentElement.remove()
        if (document.querySelectorAll(".task-box").length === 0) {
            noTaskMessage.style.cssText = "display: block;"
        }
        tasks--
        tasksCount.innerHTML = tasks
    }
    if (ele.target.classList.contains("task-box")) {
        ele.target.classList.toggle("finished")
        if (ele.target.classList.contains("finished")) {
            completed++;
            tasksCompleted.innerHTML = completed
        } else {
            completed--;
            tasksCompleted.innerHTML = completed
        }
    }
})