// Ajax Contact Form
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        const messageEl = document.getElementById('form-message');
        if (data.success) {
          messageEl.textContent = 'Your message has been sent successfully!';
          messageEl.style.color = '#28e98c';
          form.reset();
        } else {
          messageEl.textContent =
            'There was an error sending your message. Please try again.';
          messageEl.style.color = '#dc3545';
        }
      })
      .catch(error => {
        document.getElementById('form-message').textContent =
          'There was an error sending your message. Please try again.';
        document.getElementById('form-message').style.color = '#dc3545';
      });
  });
