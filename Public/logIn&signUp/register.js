const form = document.getElementById('form');
const fieldpassword = document.getElementById('password');
const fieldpasswordconformation = document.getElementById('passwordc');
const lengthRequirement = document.getElementById('length');
const uppercaseRequirement = document.getElementById('uppercase');
const notEmptyRequirement = document.getElementById('not-empty');
const togglePassword = document.getElementById('togglePassword');

form.addEventListener('submit', function(event){
    const password = fieldpassword.value;
    const passwordConfirmation = fieldpasswordconformation.value;

    const isLengthValid = password.length >= 8;
    const isUppercaseValid = /[A-Z]/.test(password);
    const isNotEmpty = password.trim() !== '';
    const isPasswordMatch = password === passwordConfirmation;

    if (!isLengthValid || !isUppercaseValid || !isNotEmpty || !isPasswordMatch) {
        event.preventDefault();
        if (!isPasswordMatch) {
            fieldpasswordconformation.classList.remove("wrongAnswer"); 
            void fieldpasswordconformation.offsetWidth; 
            fieldpasswordconformation.classList.add("wrongAnswer");
        } 
    }
});

fieldpasswordconformation.addEventListener('input', function(){
    fieldpasswordconformation.classList.remove("wrongAnswer");
    const value = fieldpassword.value;

    if (value.length >= 8) {
        lengthRequirement.classList.remove('invalid');
        lengthRequirement.classList.add('valid');
    } else {
        lengthRequirement.classList.remove('valid');
        lengthRequirement.classList.add('invalid');
    }

    if (/[A-Z]/.test(value)) {
        uppercaseRequirement.classList.remove('invalid');
        uppercaseRequirement.classList.add('valid');
    } else {
        uppercaseRequirement.classList.remove('valid');
        uppercaseRequirement.classList.add('invalid');
    }

    if (value.trim() !== '') {
        notEmptyRequirement.classList.remove('invalid');
        notEmptyRequirement.classList.add('valid');
    } else {
        notEmptyRequirement.classList.remove('valid');
        notEmptyRequirement.classList.add('invalid');
    }
});
