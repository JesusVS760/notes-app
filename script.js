const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  // when function is executed then the code will create the following
  // ... When item is "clicked", then will create an input box

  //creating a "p" tag
  let inputBox = document.createElement("p");
  // creating an "img" tag
  let img = document.createElement("img");
  //declaring a class name
  inputBox.className = "input-box";
  //setting an attribute
  inputBox.setAttribute("contenteditable", "true");
  //adding this image
  img.src = "images/delete.png";
  // appending simply meaning that the code will be displayed in the specified div
  // inside the notesContainer ---> inputBox & img, will be displayed
  notesContainer.appendChild(inputBox).appendChild(img);
});
// when creating checks such as if statements, add a parameter into the EventListener
// will then can use note notation to for the condition check in order to execute loop body
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
// adding an event listener when they event of key is === to Enter
//.. will then insert a line break in the note
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    //default events will not occur
    event.preventDefault();
  }
});
