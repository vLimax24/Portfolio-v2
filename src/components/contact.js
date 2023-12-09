function submitForm() {
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_3ng49xr", "template_iid16xq", formData)
        .then(function (response) {
            console.log("Email sent successfully:", response);

            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            document.getElementById("message").value = ''

            // Display success feedback
            showFeedback("success", "Message submitted successfully!");
        }, function (error) {
            console.log("Email failed to send:", error);

            // Display error feedback
            showFeedback("error", "Error submitting the form. Please try again.");
        });
}

function showFeedback(type, message) {
    var feedbackElement = document.getElementById("feedback");
    feedbackElement.innerHTML = message;
    feedbackElement.className = "feedback " + type;
}