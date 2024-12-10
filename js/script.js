emailjs.init("UWIyPggFk1KjuDWfw");

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
    const emailInput = document.getElementById('email').value;
    const nameInput = document.getElementById('name').value;
    const phoneInput = document.getElementById('phone').value;
    const descriptionInput = document.getElementById('description').value;

    const templateParams = {
        user_email: emailInput,
        user_name: nameInput,
        user_phone: phoneInput,
        user_description: descriptionInput,
    };

    emailjs.send("service_tgb9h8b", "template_eo4owb2", templateParams)
        .then(response => {
            alert('Email sent successfully!');
            console.log('Success:', response);
        })
        .catch(error => {
            alert(`Failed to send email: ${error.text || error}`);
            console.error('Error:', error);
        });
});
