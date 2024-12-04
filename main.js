let id = (id) => document.getElementById(id);
let classes = (classes) =>
document.getElementsByClassName(classes);
let username = id("username"),
 email = id("email"),
 password = id("password"),
 confPassword = id("confPassword")
 form = id("form"),
 errorMsg = classes("error"),
 successIcon = classes("success-icon"),
 failureIcon = classes("failure-icon"),
 length = id("length"),
 lowercase = id("lowercase"),
 uppercase = id("uppercase"),
 numbers = id("number");
let engine = (id, serial, message) => {
 if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

     // icons
//     failureIcon[serial].style.opacity = "0";
//     successIcon[serial].style.opacity = "1";
 }

 else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

     // icons
//     failureIcon[serial].style.opacity = "0";
//     successIcon[serial].style.opacity = "1";
 }
}
form.addEventListener("submit", (e) => {
 e.preventDefault();
 engine(username, 0, "❌ Username cannot be blank");
 engine(email, 1, "❌ Email cannot be blank");
 validatePassword(password);
 equals(password)

});
let equals = (password)=>{
    if (confPassword.value == password.value){
    confPassword.style.border = "2px solid green"

    }
    else{
    confPassword.style.border = "2px solid red"
    }
}
let validatePassword = (password) => {

        const minLength = 8;
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;
        const number = /[0-9]/;
        const specialChar = /[!@#$%^&*]/;

        if (password.value.length < minLength) {
            length.style.color = "red";
            password.style.border = "2px solid red";
        }
        else{
            length.style.color = "green";
            password.style.border = "2px solid green";
        }
        if (!upperCase.test(password.value)) {
            uppercase.style.color = "red";
            password.style.border = "2px solid red";
        }
        else{
            uppercase.style.color = "green";
            password.style.border = "2px solid green";
                }
        if (!lowerCase.test(password.value) ) {
            lowercase.style.color = "red";
            password.style.border = "2px solid red";
        }
        else{
            lowercase.style.color = "green";
            password.style.border = "2px solid green";
                }
        if (!number.test(password.value)) {
            numbers.style.color = "red";
            password.style.border = "2px solid red";
        }
        else{
            numbers.style.color = "green";
            password.style.border = "2px solid green";
                }

//        failureIcon[2].style.opacity = "0";
//        successIcon[2].style.opacity = "1";
        // Если пароль прошел все проверки
}


