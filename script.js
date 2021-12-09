
const errormess = document.querySelector('.error');

function validateform(){
    let x = document.forms["myform"]["email"].value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.match(mailformat)){
        document.myform.email.focus();
        errormess.classList.remove('active');
        return true;
    }else{
        errormess.classList.add('active');
        return false;
    }
}