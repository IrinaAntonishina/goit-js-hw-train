

const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormHandler);


function onFormHandler (event){
   event.preventDefault();
   const {
    elements: {email, password}} = event.currentTarget;
    if (email.value === "" || password.value === ""){
        return alert("Всі поля мають бути заповненні!")
    }
    else{
        console.log({"email":email.value, "password":password.value});
        form.reset();
    }
    

    }
    

    