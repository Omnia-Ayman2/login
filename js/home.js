let welcomeMessage=document.getElementById('welcome')
let btnOut=document.getElementById('btnOut')

if(localStorage.getItem('name')!=null){
    welcomeMessage.innerHTML=`welcome ${localStorage.getItem('name')}`
}
function logout(){
    window.location.href='index.html';
    localStorage.removeItem('name')
}
btnOut.addEventListener('click',logout)