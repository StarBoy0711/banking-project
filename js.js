// const labels = document.querySelectorAll('.form-control label')

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//     .split('')
//     .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//     .join('')
// })  

const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");
BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
    const password = formlog.password.value;
    if (username === "admin" && password === "itsourcecode") { 
        alert("You have successfully logged in."); 
        document.location.href = "customers.html";
    } 
    else { 
        ErrorMessage.style.opacity = 1; 
    }
})