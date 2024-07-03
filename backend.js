import express from 'express';
const app = express();
const port = 3000;
<<<<<<< HEAD

app.use(express.json());
=======
const __dirname = import.meta.dirname;

app.use(express.json());
app.use('/', express.static(__dirname, { index: 'index.html'}));
>>>>>>> 09e9dfbd4f411abb914647bf30d4eaf0661cf285

let todos = [
    {id: 1, title: 'Learn node', completed: false},
    {id: 2, title: 'Build a REST API', completed: false}
];

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
<<<<<<< HEAD
=======
    console.log('server hit');
>>>>>>> 09e9dfbd4f411abb914647bf30d4eaf0661cf285
});

// GET a todo by ID
app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
<<<<<<< HEAD
        res.json(todo);
=======
        res.json(todo);    
>>>>>>> 09e9dfbd4f411abb914647bf30d4eaf0661cf285
    } else {
        res.status(404).json({ message: 'Todo not found'});
    }
});

// POST a new todo
app.post('/todos', (req, res) => {
<<<<<<< HEAD
=======
    console.log('post hit!');
>>>>>>> 09e9dfbd4f411abb914647bf30d4eaf0661cf285
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT update a todo
app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(res.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.title = req.body.title;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }

});

// DELETE a todo
app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.listen(port, () => {
<<<<<<< HEAD
    console.log(`Server running at http://localhost:$(port)`);
=======
    console.log(`Server running at http://localhost:${port}`);
>>>>>>> 09e9dfbd4f411abb914647bf30d4eaf0661cf285
});