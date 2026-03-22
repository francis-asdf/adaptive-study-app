import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

// create task
app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.json(task);
});

// get tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// update task
app.put('/tasks', (req, res) => {
    const id = req.params.id;
    tasks[id] = req.body;
    res.json(tasks[id]);
});

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});
