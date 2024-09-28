document.addEventListener("DOMContentLoaded", function () {
  // Function to generate a random Course ID
  function generateCourseId() {
    return "CID-" + Math.floor(Math.random() * 1000000);
  }

  function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString(); // This will return date and time in local format
  }

  // Set generated Course ID on page load
  const courseIdInput = document.getElementById("course_id");
  if (courseIdInput && !courseIdInput.value) {
    courseIdInput.value = generateCourseId();
  }

  // Set current date and time to "Created At" field on page load
  const createdAtInput = document.getElementById("created_at");
  if (createdAtInput && !createdAtInput.value) {
    createdAtInput.value = getCurrentDateTime();
  }

  const courseForm = document.getElementById("courseForm");
  courseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const updatedAtInput = document.getElementById("updated_at");
    if (updatedAtInput) {
      updatedAtInput.value = getCurrentDateTime();
    }

    console.log("Form submitted with data:");
    console.log({
      courseId: courseIdInput.value,
      courseName: document.getElementById("course_name").value,
      courseDescription: document.getElementById("course_description").value,
      courseInstructor: document.getElementById("course_instructor").value,
      createdAt: createdAtInput.value,
      updatedAt: updatedAtInput.value,
    });
  });
});
