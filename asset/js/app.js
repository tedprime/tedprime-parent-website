const first = document.getElementById('fname')
const last = document.getElementById('lname')
const email = document.getElementById('mail')
const details = document.getElementById('detail')
const button = document.getElementById('btn')



button.addEventListener('click', function(){
    const firstname = first.value.trim()
    const lastname = last.value.trim()
    const emailValue = email.value.trim()
    const detailValue = details.value.trim()
    if(firstname === ""){
        alert('Enter a your firstname')
        return 0;
    }else if(lastname === ""){
        alert('Enter your lastname')
        return 0;
    }else if(emailValue === ""){
        alert('Enter your email')
        return 0;
    }else if(detailValue === ""){
        alert('Enter something')
        return 0;
    }else{
        alert('Form submitted successfully!')
        return 0;
    }
})

