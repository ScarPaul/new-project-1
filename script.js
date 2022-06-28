let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let error=document.getElementById("error");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
let phno=document.getElementById("phno");
let pwd1=document.getElementById("pwd1");

function validate(){
  let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0=9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
      error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
     
      return true;
    }
    else{
      error.innerHTML="invalid";
      error.style.color="red";
      return false;
    }
    
}
function valid(){
  let regexp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  if(regexp.test(phno.value)){
    error1.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  else{
    error1.innerHTML="invalid";
    error1.style.color="red";
    return false;
  }
}
function valid1(){
    let regexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(regexp.test(pwd.value)){
        error2.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    }
    else{
        error2.innerHTML="invalid";
        error2.style.color="red";
        return false; 
    }
    
}
function valid2(){
    if(pwd.value==pwd1.value){
        error3.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    else{
        error3.innerHTML="incorrect password";
        error3.style.color="red";
        return false;  
    }
}