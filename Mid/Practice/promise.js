function getStudentData() {
  return new Promise((resolve, reject) => {
    console.log("Requesting student result...");
    setTimeout(() => {
      const success = true;
      if (success) {
        const student = {
          id: 23 - 53510 - 3,
          name: "Rifat",
          department: "CSE",
          marks: 85
        };
        resolve(student);
      }
      else {
        reject("Error")
      }
    }, 3000);
  });
}
async function displayStudent() {
  console.log("Getting student data ....");
  try {
    const student = await getStudentData();
    console.log("student data received");
    console.log("ID: ", student.id);
    console.log("Name: ", student.name);
    console.log("Department: ", student.department);
    console.log("Marks:", student.marks);
    console.log("Result processing completed.")
  }
  catch (error) {
    console.log("Error: ", error);
  }
}
displayStudent();