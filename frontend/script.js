async function addTask() {
    const input = document.getElementById("task-input");
    const task = { text: input.value };

    const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });
    const newTask = await res.json();

    const li = document.createElement("li");
    li.textContent = newTask.text;
    document.getElementById("task-list").appendChild(li);

    input.value = "";
}