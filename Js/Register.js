let choose = prompt("Как вы хотите войти на сайт? 1. Как гость. 2. Зарегистрироваться");
if(choose == "1"){
    alert("Добро пожаловать");
}
else if(choose == "2"){
    window.location.href = "register.html";
}