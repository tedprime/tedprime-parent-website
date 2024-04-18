document.getElementById('bar').addEventListener('click', function(){
    document.getElementById('navbar').style.display = "grid"
    document.getElementById('bar').style.display = "none"
})
document.getElementById('cancel').addEventListener('click', function(){
    document.getElementById('navbar').style.display = "none"
    document.getElementById('bar').style.display = "block "
})