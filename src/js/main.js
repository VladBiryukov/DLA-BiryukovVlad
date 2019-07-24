

var text_mobile = document.getElementsByClassName('biography-dr-Osvaldo__text_mobile')[0],
   button_mobile = document.getElementsByClassName('biography-dr-Osvaldo__button-mobile')[0];

var textBiography = [
   "Dr. Osvaldo “Ozzie” Gratacos is a licensed chiropractor serving the Thornton and surrounding communities. Dr. Gratacos graduated from Palmer College of Chiropractic in Florida. After graduating, Dr. Gratacos went back to his home in Puerto Rico to open a practice for 4 years before practicing in Lakewood, Colorado. He is bilingual (spanish/english). Ozzie is certified in extremity adjustments, treatment in golf related injuries, and Cox technique for herniated disc.",
   "Dr. Osvaldo “Ozzie” Gratacos is a licensed chiropractor serving the Thornton and surrounding communities."
],
   textButton = [
      "hiden",
      "View More"
   ];
//слайдер 
var swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

//текст с биографией 
button_mobile.onclick = function biography() {
   if (text_mobile.innerHTML.length <= 120) {
      function sizeText() {
         text_mobile.innerHTML = textBiography[0];
         button_mobile.innerHTML = textButton[0];
      }
      return sizeText();
   }
   else {
      function hidenText() {
         text_mobile.innerHTML = textBiography[1];
         button_mobile.innerHTML = textButton[1];
      }
      return hidenText();
   }
}

/* var number = 777,
   string = "qwe ⓒ Женя :D",
   happyNumber;
console.log(number, typeof number);
console.log(string, typeof string);
console.log(number === 777 / 2 * 2);
console.log(number === 999);
number = NaN;
console.log(number);
var fName;
console.log(fName);
fName = "Б Влад";
console.log(fName);
console.log(fName * 2);
console.log(typeof textBiography); */
/* happyNumber = prompt("назовите ваше счастливое число");
alert("ваше счастливое число умноженное во второй степени " + happyNumber * happyNumber ) */









//  one = Number(one);

var number,
   oneNumber,
   calculator;

calculator = prompt("что нужно сделать", "");

if (calculator === "*") {
   var multiply = prompt("введите число которое нужно умножить");
   var one = prompt("на кокое число");

   if (one == Number(one) && multiply == Number(multiply)) {
      alert(multiply * one)
   }
   else {
      alert("так нельзя")
   }
}

else if (calculator === "/") {
   var divide = prompt("введите число которое нужно поделить");
   var one = prompt("на кокое число");
   alert(divide / one)
}
else if (calculator === "-") {
   var minus = prompt("введите число из которого нужно вычесть");
   var one = prompt("какое число");
   alert(minus - one)
}
else if (calculator === "+") {
   var plus = prompt("ввидете число которое нужно сложить");
   var one = prompt("с каким числом");
   plus = Number(plus);
   one = Number(one);
   alert(plus + one)
}
else {
   alert("садись, два")
}









/*
var name = "Vlad";
var age = prompt(name + " введите ваш возраст " );
var number  = prompt("введите число котор")

alert("ваш возраст умноженый на вад это " + age * 2);

alert("ваш возраст разделить на два = " + age / 2);
 */












/* console.log(text_mobile.innerHTML.length == 116) */

/*

button_mobile.onclick = function () {
    function sizeText() {
        text_mobile.style.display = "none";
        text_desktop.style.display = "inline-block";
        button_mobile.style.display = "none";
    }
    return sizeText();
}
 */

/*
button_mobile.onclick = function openBiography() {

   function sizeText() {
      text_mobile.innerHTML = "Dr. Osvaldo “Ozzie” Gratacos is a licensed chiropractor serving the Thornton and surrounding communities. Dr. Gratacos graduated from Palmer College of Chiropractic in Florida. After graduating, Dr. Gratacos went back to his home in Puerto Rico to open a practice for 4 years before practicing in Lakewood, Colorado. He is bilingual (spanish/english). Ozzie is certified in extremity adjustments, treatment in golf related injuries, and Cox technique for herniated disc.";
      button_mobile.classList.add("open-Biography");
   }
   function hideText(){
      text_mobile.innerHTML = "Dr. Osvaldo “Ozzie” Gratacos is a licensed chiropractor serving the Thornton and surrounding communities."
   }
   return sizeText();
}  */

/* button_mobile.onclick = function openBiography() {

   function sizeText() {
      text_mobile.innerHTML = textBiography[0];
      button_mobile.classList.add("open-Biography");
   }
   function hideText() {
      text_mobile.innerHTML = textBiography[1]
   }
   return sizeText();
   console.log(button_mobile.innerHTML == "View More")
} */

/* button_mobile.onclick = function biography() {

   if (button_mobile.innerHTML == "View More") {
      function sizeText() {
         text_mobile.innerHTML = textBiography[0];
         button_mobile.innerHTML = "hiden"
      }
      return sizeText();
   }

   else if (button_mobile.innerHTML == "hiden") {
      function hidenText() {
         text_mobile.innerHTML = textBiography[1];
         button_mobile.innerHTML = "View More"
      }
      return hidenText();
   }
}
 */













