// Simulate correct verification code
const correctCode = "123456";

document.getElementById("verificationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const enteredCode = document.getElementById("verificationCode").value;

    if (enteredCode === correctCode) {
        alert("Verification successful!");
        window.location.href = "checkout.html"; 
    } else {
        document.getElementById("popup").style.display = "flex"; // Show popup
    }
});

// Close popup when clicking on the close button
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});