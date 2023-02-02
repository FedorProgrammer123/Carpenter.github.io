let datas = document.getElementsByName("datas");
let registering = document.getElementById("registering");
let errorname = document.getElementsByClassName("errors");
registering.addEventListener("click",function(){
    if(datas[0].value == "" || datas[0].value == " "){
        errorname[0].innerHTML = "<p>Ошибка!Имя Не введено</p>";
    }
    else if(datas[1].value == "" || datas[1].value == " "){
        errorname[1].innerHTML = "<p>Ошибка!email не введён</p>";
    }
    else if(datas[2].value == "" || datas[2].value == " "){
        errorname[2].innerHTML = "<p>Ошибка!Вы не ввели пароль</p>";
    }
    else if(datas[3].value == "" || datas[3].value == " "){
        errorname[3].innerHTML = "<p>Ошибка!Вы не подтвердили пароль</p>";
    }
    else if(datas[2].value != datas[3].value){
        errorname[4].innerHTML = "<p>Ошибка!Пароли не совпадают</p>";
    }
    else{
        alert("Добро пожаловать");
        window.location.href = 'index.html';
    }
})