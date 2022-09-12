// // hamburger script
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );

// contact script

const name = document.getElementById('user-name-id');
const email = document.getElementById('email-address-id');
const phone = document.getElementById('number-id');
const failure = document.getElementById('failure');
const success = document.getElementById('success');
let validEmail = false;
let validPhone = false;
let validUser = false;


// console.log(name, email, phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-z A-Z]([0-9a-z A-Z]){2,16}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.add('border-success');
        name.classList.remove('border-danger');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.remove('border-success');
        name.classList.add('border-danger');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.add('border-success');
        email.classList.remove('border-danger');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.remove('border-success');
        email.classList.add('border-danger');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.add('border-success');
        phone.classList.remove('border-danger');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.remove('border-success');
        phone.classList.add('border-danger');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let btn = document.getElementById('btn');
btn.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        success.classList.add('show');
        failure.classList.remove('show');

        
         
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        failure.classList.add('show');
        success.classList.remove('show');
        }

    
    
})
