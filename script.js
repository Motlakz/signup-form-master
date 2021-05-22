function error1() {
    let name = "First Name";
    if (name == "") {
        alert("First Name cannot be empty");
        return false;
    }
}
function error2() {
    let lastName = "Last Name";
    if (lastName == "") {
        alert("Last Name cannot be empty");
        return false;
    }
}
function error3() {
    let value = "Email Address";
    if (email !== value) {
        alert("Looks like this is not an email");
        return false;
    }
}
function error4() {
    let psw = "Password";
    if (psw == "") {
        alert("Password cannot be empty");
        return false;
    }
}
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Validations go here');
});