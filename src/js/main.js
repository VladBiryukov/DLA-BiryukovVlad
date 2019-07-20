var text_mobile = document.getElementsByClassName('biography-dr-Osvaldo__text_mobile')[0];
var button_mobile = document.getElementsByClassName('biography-dr-Osvaldo__button-mobile')[0];
var text_desktop = document.getElementsByClassName('biography-dr-Osvaldo__text_desktop')[0];

// топорный вариант, пока так

button_mobile.onclick = function () {
    text_mobile.style.display = "none";
    text_desktop.style.display = "inline-block";
    button_mobile.style.display = "none";
}

/* 
var name = "Vlad";
var age = prompt(name + " введите ваш возраст " );
var number  = prompt("введите число котор")

alert("ваш возраст умноженый на вад это " + age * 2);

alert("ваш возраст разделить на два = " + age / 2);
 */