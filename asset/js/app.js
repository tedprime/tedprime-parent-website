const first = document.getElementById('fname')
const last = document.getElementById('lname')
const email = document.getElementById('mail')
const details = document.getElementById('detail')
const button = document.getElementById('btn')



button.addEventListener('submit', function(){
    const firstname = first.value.trim()
    const lastname = last.value.trim()
    const emailValue = email.value.trim()
    const detailValue = details.value.trim()
    if(firstname === ""){
        alert('Enter a your firstname')
    }else if(lastname === ""){
        alert('Enter your lastname')
    }else if(emailValue === ""){
        alert('Enter your email')
    }else if(detailValue === ""){
        alert('Enter something')
    }
})

