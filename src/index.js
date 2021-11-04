import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createFromImcompleteList(inputText);
};

const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-task-list").removeChild(target);
};

const createFromImcompleteList = (text) => {
  const li = document.createElement("li");

  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-task-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createFromImcompleteList(text);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    document.getElementById("complete-task-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  console.log(li);

  document.getElementById("imcomplete-task-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
