setInterval(() => {
                const now = new Date();
                document.getElementById("clock").innerText =
                  now.toLocaleString();
              }, 1000);


(() => {
  'use strict'

  const form = document.querySelector('.needs-validation')

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }else{
        
    alert("submitted successfully")
    }

    form.classList.add('was-validated')
  }, false)
})()

const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function(event) {
    const charCode = event.charCode;

    if (charCode >= 48 && charCode <= 57) {
        event.preventDefault();
    }
});