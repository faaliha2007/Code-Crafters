const name = document.getElementById("name") 
const phone = document.getElementById("phone") 
const email = document.getElementById("email") 
const city = document.getElementById("city")
const subject = document.getElementById("subject")
const send = document.getElementById("send__button")
// Regualr Expression
var nameregex = /^[A-Za-z\s]+$/;
var phoneregex = /^\d{10}$/;
var emailregex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
var cityregex = /^[A-Za-z\s]+$/;
var subjectregex = /^.{1,200}$/;
// Error
const nameerror = document.getElementById("nameerror")
const phoneerror = document.getElementById("phoneerror")
const emailerror = document.getElementById("emailerror")
const cityerror = document.getElementById("cityerror")
const subjecterror = document.getElementById("subjecterror")
// setting event for send message button
send.addEventListener("click", function() {
    if (!nameregex.test(name.value)) {
        nameerror.style.display = "block";
    } else {
        nameerror.style.display = "none";
    }

    if (!phoneregex.test(phone.value)) {
        phoneerror.style.display = "block";
    } else {
        phoneerror.style.display = "none";
    }

    if (!emailregex.test(email.value)) {
        emailerror.style.display = "block";
    } else {
        emailerror.style.display = "none";
    }

    if (!cityregex.test(city.value)) {
        cityerror.style.display = "block";
    } else {
        cityerror.style.display = "none";
    }

    if (!subjectregex.test(subject.value)) {
        subjecterror.style.display = "block";
    } else {
        subjecterror.style.display = "none";
    }
});
// index
 const bar= document.getElementById('bar')
  const close= document.getElementById('close')
  const nav= document.getElementById('navbar')

 if (bar ) {
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
 }
 if (close ) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
    
 } 