const galleryDiv = document.getElementById("student-gallery");
const detailsContainer = document.getElementById("student-details-container");
const studentName = document.getElementById("student-name");
const studentGender = document.getElementById("student-gender");
const studentHouse = document.getElementById("student-house");
const studentDateOfBirth = document.getElementById("student-dateofbirth");
const pics = document.querySelector("#student-pic")

fetch("http://localhost:3000/characters")
.then(res => res.json())
.then(data => {
    data.forEach((student) => {
      const studentImage = document.createElement("img");
      studentImage.src = student.image;
      studentImage.id ="sImage"
      galleryDiv.appendChild(studentImage);
      
      studentImage.addEventListener("click", e => {
        addStudents(student)
      });

    });
    addStudents(data[0])
  });


function addStudents(student){
    pics.src = student.image;
    studentName.textContent = student.name;
    studentGender.textContent = student.gender;
    studentHouse.textContent = student.house;
    studentDateOfBirth.textContent = student.dateOfBirth;

}