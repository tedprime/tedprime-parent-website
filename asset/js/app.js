const first = document.getElementById('fname')
const last = document.getElementById('lname')
const email = document.getElementById('mail')
const details = document.getElementById('detail')
const button = document.getElementById('btn')

const firstname = first.value.trim()
const lastname = last.value.trim()
const emailValue = email.value.trim()
const detailValue = details.value.trim()

button.addEventListener('submit', function(){
    if(firstname === ''){
        alert('Enter a value name')
    }
})

