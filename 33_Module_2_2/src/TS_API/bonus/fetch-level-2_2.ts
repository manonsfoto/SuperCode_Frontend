import { IToDo } from "../interface/IToDo";

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

async function fetchToDo(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = (await response.json()) as IToDo[];

    return result;
  } catch (err) {
    console.error(err);
  }
}

const allTodo = fetchToDo(TODO_URL) as Promise<IToDo[]>;

const displayToDo = document.querySelector("#displayToDo") as HTMLDivElement;
const textInput = document.querySelector("#textInput") as HTMLInputElement;

function renderList(toDo: IToDo) {
  const paragraphToDo = document.createElement("p") as HTMLParagraphElement;
  paragraphToDo.innerHTML = `${toDo.title}`;
  paragraphToDo.classList.add(toDo.completed ? "green" : "red");
  displayToDo.appendChild(paragraphToDo);
}

allTodo.then((result) => {
  const sortedToDoArr: IToDo[] = result.sort((a: IToDo, b: IToDo) =>
    a.title.localeCompare(b.title)
  );
  sortedToDoArr.forEach((toDo: IToDo) => {
    renderList(toDo);
  });
});

textInput?.addEventListener("input", () => {
  displayToDo.innerHTML = "";
  const textValue = textInput.value.trim().toLowerCase();

  allTodo.then((result) => {
    const sortedToDoArr: IToDo[] = result.sort((a: IToDo, b: IToDo) =>
      a.title.localeCompare(b.title)
    );
    const filterdToDoArr: IToDo[] = sortedToDoArr.filter((todo: IToDo) => {
      return todo.title.includes(textValue);
    });
    filterdToDoArr.forEach((toDo: IToDo) => {
      renderList(toDo);
    });
  });
});
