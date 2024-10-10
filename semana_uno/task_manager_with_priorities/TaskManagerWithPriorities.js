const tasks = [];
let nextId = 1;

class Task {
  id;
  title;
  description;
  creationDate;
  dueDate;
  priority;

  constructor(title, description, dueDate, priority) {
    this.creationDate = Date.now();
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const Priority = {
  alta: 1,
  media: 2,
  baja: 3,
};

const addTask = (title, description, dueDate, priority) => {
  const newTask = new Task(title, description, dueDate, priority);
  tasks.push(newTask);
};

const findTaskIndex = (key, element) => {
  const index = tasks.findIndex((task) => task[key] === element);
  return index;
};

const removeTask = (id, title) => {
  const deleteTask = title
    ? findTaskIndex('title', title)
    : findTaskIndex('id', id);

  if (deleteTask === -1) {
    return `Task ${deleteTask} not found`;
  }
  tasks.splice(deleteTask, 1);
  return `Task ${deleteTask} deleted successfully`;
};

const sortTasks = () => {
  const sortedTasks = tasks.slice().sort((a, b) => {
    const priorityComparison = Priority[a.priority] - Priority[b.priority];
    if (priorityComparison === 0) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return priorityComparison;
  });

  return sortedTasks;
};

addTask('Tarea 1', 'Descripción de la tarea 1', '2024-12-31', 'alta');
addTask('Tarea 2', 'Descripción de la tarea 2', '2024-11-30', 'baja');
addTask('Tarea 3', 'Descripción de la tarea 3', '2024-10-15', 'media');
addTask('Tarea 4', 'Descripción de la tarea 4', '2024-11-15', 'alta');
addTask('Tarea 5', 'Descripción de la tarea 5', '2024-12-31', 'alta');
addTask('Tarea 6', 'Descripción de la tarea 6', '2024-11-30', 'baja');
addTask('Tarea 7', 'Descripción de la tarea 7', '2024-10-15', 'media');
addTask('Tarea 8', 'Descripción de la tarea 8', '2024-11-15', 'alta');

console.log('Tareas ordenadas:', sortTasks());
console.log(removeTask(1));
console.log('Tareas ordenadas:', sortTasks());
