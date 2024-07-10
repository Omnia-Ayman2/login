// console.log('bn,m');
let emailInput=document.getElementById("emailInput");
let passwordInput=document.getElementById("passwordInput");
let btnInput=document.getElementById("btnInput");
let message=document.getElementById("message")
if(localStorage.getItem('users')!=null){
    box=JSON.parse(localStorage.getItem('users'))
    }
function login(){
    if(checkEmpty()==true){
        showMessage('All inputs is required','red');
    }
    else{
        if(checkExit()==true){
            window.location.href='home.html'
        
        }
        else{
        
        }
        
        showMessage('incorrect email or password','red')
        
        
        }
    }

btnInput.addEventListener('click',login)
function checkExit(){
    for(let i=0;i<box.length;i++){
        if(box[i].email==emailInput.value&&box[i].password==passwordInput.value){
            localStorage.setItem('name',box[i].name)
            return true;
        }
    }
}
function showMessage(text,color){
    message.classList.replace('d-none','d-block');
    message.innerHTML=text;
    message.style.color=color;
}
function checkEmpty(){

    if(emailInput.value==""&&passwordInput.value==""){
      return true;
    }
    else{
return false;
    }
}