var email_store=document.getElementById("email_name_input").innerHTML=value;
var password_store=document.getElementById("password_name_input").innerHTML=value;
function log_in(){
    localStorage.setItem("email_name_input", email_store);
    localStorage.setItem("password_name_input", password_store);
    window.location="home.html";
}