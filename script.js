// script.js

// Array of student names
const students = [
    "John Doe",
    "Jane Doe",
    "Bob Smith",
    "Alice Johnson",
    "Mike Brown",
    "Emily Davis",
    "Tom Harris",
    "Linda Martin",
    "David Lee",
    "Sarah Taylor",
    "Kevin White",
    "Olivia Patel"
  ];
  
  // Function to generate student list
  function generateStudentList() {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = "";
  
    students.forEach((student, index) => {
      const listItem = document.createElement("LI");
      listItem.textContent = `${student} - ${index === 0 ? "Present" : "Absent"}`;
      studentList.appendChild(listItem);
    });
  }
  
  // Function to update student presence
  function updateStudentPresence(studentName, presenceStatus) {
    const studentList = document.getElementById("student-list");
    const studentListItem = studentList.querySelector(`li:contains(${studentName})`);
  
    if (studentListItem) {
      studentListItem.textContent = `${studentName} - ${presenceStatus}`;
    }
  }
  
  // Generate initial student list
  generateStudentList();
  
  // Update student presence on commit
  // This function will be called when a student commits their changes
  function commitStudentPresence(studentName) {
    updateStudentPresence(studentName, "Present");
  }
  // Call commitStudentPresence function when a student commits their changes
// This will update the student's presence status to "Present"
commitStudentPresence("John Doe"); // Replace with the actual student name