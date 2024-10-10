const Priority = {
  alta: 1,

  media: 2,

  baja: 3,
};

let nextId = 1;

class Task {
  id;
  title;
  description;
  creationDate;
  dueDate;
  priority;

  constructor(title, description, dueDate, priority) {
    this.id = nextId++;

    this.title = title;

    this.description = description;

    this.creationDate = new Date();

    this.dueDate = new Date(dueDate);

    this.priority = priority;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, dueDate, priority) {
    const newTask = new Task(title, description, dueDate, priority);
    this.tasks.push(newTask);
  }

  findTaskIndex(key, element) {
    const index = this.tasks.findIndex((task) => task[key] === element);
    return index;
  }

  removeTask(id, title) {
    const deleteTask = title
      ? this.findTaskIndex('title', title)
      : this.findTaskIndex('id', id);
    if (deleteTask === -1) {
      return `Task ${deleteTask} not found`;
    }

    this.tasks.splice(deleteTask, 1);

    return `Task ${deleteTask} deleted successfully`;
  }

  sortTasks() {
    return this.tasks.slice().sort((a, b) => {
      const priorityComparison = Priority[a.priority] - Priority[b.priority];

      if (priorityComparison === 0) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }

      return priorityComparison;
    });
  }

  showTaks() {
    return this.tasks;
  }
}

const manager = new TaskManager();

manager.addTask('Estudiar', 'Estudiar para el examen', '2024-10-12', 'alta');

manager.addTask('Salir', 'Salir a caminar', '2024-10-13', 'baja');

manager.addTask('Estudiar', 'Estudiar para el examen', '2024-10-12', 'alta');

manager.addTask('Salir', 'Salir a caminar', '2024-10-13', 'baja');

manager.addTask('Estudiar', 'Estudiar para el examen', '2024-10-12', 'alta');

manager.addTask('Salir', 'Salir a caminar', '2024-10-13', 'baja');

manager.addTask('Estudiar', 'Estudiar para el examen', '2024-10-12', 'alta');

manager.addTask('Salir', 'Salir a caminar', '2024-10-13', 'baja');
console.log(manager.showTaks());
console.log(manager.sortTasks());
console.log(manager.removeTask(1));
