const first = document.getElementById('fname')
const last = document.getElementById('lname')
const email = document.getElementById('mail')
const details = document.getElementById('detail')
const button = document.getElementById('btn')
const respond1 = document.getElementById('responds1')


button.addEventListener('click', function(){
 
    if ((first.value.trim() != "") && (last.value.trim() != "") && (email.value.trim() != "") && (details.value.trim() != "")){
        respond1.innerHTML = "Form is submitted successfully!"
        respond1.style.fontSize = '1rem'
        respond1.style.fontWeight = '700'
        respond1.style.textAlign = 'center'
        respond1.style.color = '#EF6E11'   
    }
})


const email1 = document.getElementById('input-email')
const button1 = document.getElementById('bot-btn')
const respond2 = document.getElementById('responds2')

button1.addEventListener('click', function(){
    if(email1.value.trim() != ""){
        respond2.innerHTML = "You have been added to our mailing list! "
        respond2.style.fontSize = '1rem'
        respond2.style.fontWeight = '700'
        respond2.style.textAlign = 'center'
        respond2.style.color = 'white'
    }
})


