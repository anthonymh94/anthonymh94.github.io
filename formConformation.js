 // ✅ Define functions first (hoisted, easy to read)
function validateCustomEmail(email) {
    const pattern = /^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9-]{1,12}\.[A-Za-z]{2,}$/;
    return pattern.test(email) ? "Valid email ✅" : "Invalid email ❌";
}

function validateCustomerName(name) {
    return /^[A-Za-z\s'-]+$/.test(name)
}

function validatePhone(phone) {
    return /^((1[- ]?)?(\d{3})[- ]?\d{3}[- ]?\d{4})$/.test(phone)
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("consultationForm");

    form.addEventListener("submit", function (event) {

    const name = document.getElementById("name").value.trim();
    if (!validateCustomerName(name)) {
            event.preventDefault();
            alert('Names must be letters, spaces, apostrophes, and hyphens only')
        }

    const email = document.getElementById("email").value.trim();
    const result = validateCustomEmail(email);

    if (result !== "Valid email ✅") {
        event.preventDefault();
        alert(result);
    }

    const phone = document.getElementById("phone")

    if (!validatePhone(phone)) {
        event.preventDefault();
        alert('phone numbers must be numbers and dashes only')
    }
    
    });
});

