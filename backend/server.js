import express from 'express';
import pool from './db.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// create task
app.post('/tasks', async (req, res) => {
    try {
        const { text } = req.body;
        const result = await pool.query(
            'INSERT INTO tasks (text) values ($1) RETURNING *',
            [text]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// get tasks
app.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
});

// update task
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const result = await pool.query(
        'UPDATE tasks SET text = $1 WHERE id = $2 RETURNING *',
        [text, id]
    );
    res.json(result.rows[0]);
});

// delete task
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
