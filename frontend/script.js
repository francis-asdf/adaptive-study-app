async function addTask() {
    const input = document.getElementById("task-input");
    const task = { text: input.value };

    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });

    input.value = "";
}