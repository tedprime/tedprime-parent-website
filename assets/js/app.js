const flname = document.getElementById('name')
const email = document.getElementById('mail')
const subject = document.getElementById('subject')
const message = document.getElementById('textarea')
const button = document.getElementById('send')
const respond1 = document.getElementById('respond')


button.addEventListener('click', function(){
 
    if ((flname.value.trim() != "") && (email.value.trim() != "") && (subject.value.trim() != "") && (message.value.trim() != "")){
        respond1.innerHTML = "Form is submitted successfully!"
        respond1.style.fontSize = '1rem'
        respond1.style.fontWeight = '700'
        respond1.style.textAlign = 'center'
        respond1.style.color = 'green'   

    }

})





const email1 = document.getElementById('inputtext')
const button1 = document.getElementById('inputbtn')
const respond2 = document.getElementById('responds2')

button1.addEventListener('click', function(){
    if(email1.value.trim() != ""){
        respond2.innerHTML = "You have been added to our mailing list! "
        respond2.style.fontSize = '1rem'
        respond2.style.fontWeight = '700'
        respond2.style.textAlign = 'center'
        respond2.style.color = 'green'
    }
})


