const nameInput = document.querySelector("#name");
const btn = document.querySelector("form > button");
const tbody = document.querySelector("table tbody");
let students = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Student name cannot be empty.");
    return;
  }

  if (!students.includes(name)) {
    students.push(name);
    updateTable();
    nameInput.value = "";
    nameInput.focus();
  } else {
    alert("This student is already added.");
  }
});

function updateTable() {
  tbody.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student}</td>
      <td><button class="btn btn-danger" onclick="deleteStudent(${index})">Delete</button></td>
    `;

    tbody.appendChild(row);
  });
}
function deleteStudent(index) {
  students.splice(index, 1);
  updateTable();
}
