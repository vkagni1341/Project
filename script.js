const item = document.getElementById("item");
const toD0Box = document.getElementById("to_D0_Box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (itemText) => {
  const listItem = document.createElement("li");
  toD0Box.appendChild(listItem);
  listItem.innerHTML = `
    ${itemText} <i class="fas fa-times" aria-hidden="true"></i>
  `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
    const crossIcon = this.querySelector("i");
    crossIcon.classList.toggle("red-cross");
  });
};

toD0Box.addEventListener("click", function (event) {
  if (
    event.target &&
    event.target.nodeName == "I" &&
    event.target.classList.contains("fa-times")
  ) {
    event.target.parentNode.remove();
  }
});
