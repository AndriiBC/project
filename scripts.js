"use strict";

let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = `5`;

const bool = true;

//console.log(something);

let und;

console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(obj.name);
console.log(obj ["name"] );

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

console.log(arr[2]);


     // 2.4



// alert('Hello');

// const result = confirm("Are you hier?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "");
// console.log(answer + 5);

const answers = [];

  answers[0] = prompt('Как ваше имя?', '');
  answers[1] = prompt('Как ваша фамилия?', '');
  answers[2] = prompt('Сколько вам лет?', '');

 console.log(typeof(answers));
 console.log(typeof(null));



          // 2.5



 const category = 'toys';

 console.log(`https://someurl.com/${category}/5`);

 const user = "Andrii";

 alert(`Ave, ${user}`);
 


         // 2.6

 

 console.log('arr' + " - object");
 console.log(4 + "5");

 let incr = 10,
  decr = 10;

//incr++;
//decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2*4 === 8);

console.log(2 + 2 * 2 !== 8);

// && и и (и это правда и это)
// || и или (или это правда и или это)

const isChecked = true,
   isClosed = false;

 console.log(isChecked && isClosed );
 console.log(isChecked || isClosed );
 console.log(isChecked || !isClosed ); // ! - оператор отрицания, превращает в противоположное значение


        // 2.10

if (4 == 9) {
  console.log('Ok!');
}else {
  console.log('Error');
}



//if (num < 49) {
//  console.log('Error');
//} else if (num > 100) {
 // console.log('Много');
// }else {
 // console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = '50';

switch (num) {
  case '49':
    console.log('Неверно');
    break;
  case '100':
    console.log('Неверно');
    break;
  case '50':
   console.log('В точку!');
    break;
 default:
   console.log('Не в этот раз');
   break;
}