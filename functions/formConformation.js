 // ✅ Define functions first (hoisted, easy to read)
function validateCustomEmail(email) {
    const pattern = /^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9-]{1,12}\.[A-Za-z]{2,}$/;
    return pattern.test(email) ? "Valid email ✅" : "Invalid email ❌";
}

function validateCustomerName(name) {
    return /^[A-Za-z\s'-]+$/.test(name)
}

document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("consultationForm");
    const result = document.getElementById("result")

    form.addEventListener("submit", async (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

        if (!validateCustomerName(name)) {          
            alert('Names must be letters, spaces, apostrophes, and hyphens only')
        }

        const email = document.getElementById("email").value.trim();
        const check = validateCustomEmail(email);

        if (check !== "Valid email ✅") {
            e.preventDefault();
            alert(check);
        }

    const response = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { "Accept": "application/json" }
    });

    if (response.ok) {
    result.innerText = "Thank you! Your message has been sent.";
    form.reset();
    } else {
        result.innerText = "Oops! There was a problem.";
    }
    });
    
    });
});

