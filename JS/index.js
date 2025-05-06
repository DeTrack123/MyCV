$(document).ready(function () {
  // Feedback form submission
  $(".feedbackForm").on("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const userName = $(".userName").val();
    const userEmail = $(".userEmail").val();
    const userFeedback = $(".userFeedback").val();
    console.log(userName, userEmail, userFeedback);

    // Create a feedback object
    const feedback = {
      name: userName,
      email: userEmail,
      feedback: userFeedback,
    };
    console.log(feedback);

    // Get existing feedback from localStorage or initialize an empty array
    const feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

    // Add the new feedback to the list
    feedbackList.push(feedback);

    // Save the updated feedback list back to localStorage
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

    // Notify the user
    alert("Thank you for your feedback!");

    // Optionally, clear the form
    $(".feedbackForm")[0].reset();
  });
});
