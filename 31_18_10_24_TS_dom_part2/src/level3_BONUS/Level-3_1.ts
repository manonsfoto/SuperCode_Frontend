const inputText = document.querySelector("#inputText") as HTMLInputElement;
const addBtn = document.querySelector("#addBtn") as HTMLButtonElement;
const myList = document.querySelector("#myList") as HTMLElement;

addBtn.addEventListener("click", () => {
  let trimmedText = inputText.value.trim();
  if (trimmedText) {
    const createList = document.createElement("li");
    createList.textContent = trimmedText;
    myList.appendChild(createList);
    inputText.value = "";
    createList.style.listStyle = "none";
    // ---------------------------------------
    const createCheckBtn = document.createElement("input");
    createCheckBtn.setAttribute("type", "checkbox");
    createList.prepend(createCheckBtn);
    // ---------------------------------------
    const createDeleteBtn = document.createElement("button");
    createDeleteBtn.setAttribute("type", "button");
    createDeleteBtn.textContent = "X";
    createDeleteBtn.setAttribute("class", "deleteBtn");
    createList.appendChild(createDeleteBtn);
    // ---------------------------------------

    createCheckBtn.addEventListener("change", () => {
      if (createCheckBtn.checked) {
        createList.style.textDecoration = "line-through";
      } else {
        createList.style.textDecoration = "none";
      }
    });
    // ---------------------------
    createDeleteBtn.addEventListener("click", () => {
      if (createCheckBtn.checked) {
        createList.remove();
      } else {
        alert("Nur wenn du das erledigt hast, kannst du es löschen!");
      }
    });
  }
});
