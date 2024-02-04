const first = document.getElementById('fname')
const last = document.getElementById('lname')
const email = document.getElementById('mail')
const details = document.getElementById('detail')
const button = document.getElementById('btn')



button.addEventListener('click', function(){
 
    if(first.value.trim() === ""){
        alert('Enter your firstname')
        return 0;
    }else if(last.value.trim() === ""){
        alert('Enter your lastname')
        return 0;
    }else if(email.value.trim() === ""){
        alert('Enter your email')
        return 0;
    }else if(details.value.trim() === ""){
        alert('Enter something')
        return 0;
    }else{
        alert('Form submitted successfully!')
        return 0;
    }
})


const email1 = document.getElementById('input-email')
const button1 = document.getElementById('bot-btn')
button1.addEventListener('click', function(){
    if(email1.value.trim() === ""){
        alert('Enter your email')
        return 0;
    }else{
        alert('Form submitted successfully!')
        return 0;
    }
})


