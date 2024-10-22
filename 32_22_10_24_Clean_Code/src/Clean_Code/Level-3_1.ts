// !==========================================
// !======  AFTER  ===========================
// !==========================================

enum TaskType {
  Urgent = 4,
  NotUrgent = 2,
  Info = 1,
}

type Task = { name: string; taskType: TaskType };

const addTask = (taskName: string) => {
  let taskArray: Task[] = [];
  if (taskName) {
    taskArray.push({ name: taskName, taskType: TaskType.NotUrgent });
    console.log("Aufgabe erstellt " + taskName);
    return taskArray;
  }
};

const sortTasks = (arr: Task[], option: string) => {
  const copyArr = [...arr];
  switch (true) {
    case option === "reverse":
      copyArr.reverse();
      break;
    case option === "no":
    case option === "":
      copyArr;
      break;
    case option === "ascendingOrder":
      copyArr.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return copyArr.toString();
};

const inputTask = prompt("Bitte geben Sie eine Aufgabe ein:");
if (inputTask) {
  addTask(inputTask);
}

const inputTask2 = prompt("Bitte geben Sie eine Aufgabe ein:");
if (inputTask2) {
  addTask(inputTask2);
}
const inputTask3 = prompt("Bitte geben Sie eine Aufgabe ein:");
if (inputTask3) {
  addTask(inputTask3);
}
