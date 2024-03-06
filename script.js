const valid = document.getElementById("valid");
const submit = document.getElementById("submit");
const input = document.getElementById("email");
const icon = document.getElementById('icon-error');

submit.addEventListener("click", () => {
    if (input.value != '@email.com'){
        valid.innerHTML= 'Please provide a valid Email';
        input.style.borderColor = 'hsl(0, 93%, 68%)';
        valid.style.color= 'hsl(0, 93%, 68%)';
        icon.style.display= 'block';
    }
});
