let nameInput=document.getElementById("nameInput");
let emailInput=document.getElementById("emailInput");
let passwordInput=document.getElementById("passwordInput");
let btnInput=document.getElementById("btnInput");
let message=document.getElementById("message")
let box=[];

if(localStorage.getItem('users')!=null){
box=JSON.parse(localStorage.getItem('users'))
}
function signUp(){
let info={
name:nameInput.value,
email:emailInput.value,
password:passwordInput.value,

}


if(checkEmpty()==true){
    showMessage('All inputs is required','red')

}
else{
    if(exit()==true){
        showMessage('email is exit','red')
    }
    else{
        box.push(info)
        localStorage.setItem('users',JSON.stringify(box));
        clear();
            showMessage('success','green')
    }
   
}
 
    console.log(box);
};
btnInput.addEventListener('click',signUp)
function clear(){
    nameInput.value='';
    emailInput.value='';
    passwordInput.value=''

}
function checkEmpty(){

    if(nameInput.value==""&&emailInput.value==""&&passwordInput.value==""){
      return true;
    }
    else{
return false;
    }
}
function showMessage(text,color){
    message.classList.replace('d-none','d-block');
    message.innerHTML=text;
    message.style.color=color;
}
function exit(){
    for(let i=0;i<box.length;i++){
        if(box[i].email==emailInput.value){
return true;
        }
        }
    }
   