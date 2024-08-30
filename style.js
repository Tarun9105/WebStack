document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Simulate a form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (name && email && message) {
            responseMessage.textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';
            responseMessage.style.color = 'green';
            form.reset();
        } else {
            responseMessage.textContent = 'Please fill out all fields.';
            responseMessage.style.color = 'red';
        }
    });
});
