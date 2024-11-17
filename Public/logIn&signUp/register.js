const form = document.getElementById('form');
const fieldpassword = document.getElementById('password');
const fieldpasswordconformation = document.getElementById('passwordc');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const password = fieldpassword.value;
    const passwordc = fieldpasswordconformation.value;
    if(password != passwordc){
        fieldpasswordconformation.classList.remove("wrongAnswer");
        void fieldpasswordconformation.offsetWidth;
        fieldpasswordconformation.classList.add("wrongAnswer");
    } else{
        form.submit();
    }
})

fieldpasswordconformation.addEventListener('input', function(){
    fieldpasswordconformation.classList.remove("my-animation");
})
