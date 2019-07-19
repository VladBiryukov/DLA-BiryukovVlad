var text_mobile = document.getElementsByClassName('biography-dr-Osvaldo__text_mobile')[0];
var button_mobile = document.getElementsByClassName('biography-dr-Osvaldo__button-mobile')[0];
var text_desktop = document.getElementsByClassName('biography-dr-Osvaldo__text_desktop')[0];

// топорный вариант, пока так

button_mobile.onclick = function () {
    text_mobile.style.display = "none";
    text_desktop.style.display = "inline-block";
    button_mobile.style.display = "none";
}

 



