// Array of student names
let students = [];

// Function to generate student list
function generateStudentList() {
  const studentList = document.getElementById("student-list");
  studentList.innerHTML = "";
  students.forEach((student) => {
    const listItem = document.createElement("LI");
    listItem.textContent = `${student} - Present`;
    studentList.appendChild(listItem);
  });
}

// Function to add student
function addStudent(studentName) {
  students.push(studentName);
  generateStudentList();
}

// Add event listener to button
document.getElementById("add-student-btn").addEventListener("click", () => {
  const studentName = document.getElementById("student-name").value;
  addStudent(studentName);
  document.getElementById("student-name").value = "";
});