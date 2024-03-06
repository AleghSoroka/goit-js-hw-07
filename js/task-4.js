const form = document.querySelector(".login-form");
form.addEventListener("submit", handleLoginFormSubmission);
function handleLoginFormSubmission(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();
    if (email && password) {
        const userData = {
            email,
            password,
        }
         console.log(userData);
    }
    else {
        alert('All form fields must be filled in');
    }
    event.currentTarget.reset();
}