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
    //name: "John",
    age: 25,
    isMarried: false
};

//console.log(obj.name);
//console.log(obj ["name"] );

//let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

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

// const num = '50';

//switch (num) {
//  case '49':
//    console.log('Неверно');
//    break;
//  case '100':
//    console.log('Неверно');
//    break;
//  case '50':
//   console.log('В точку!');
//    break;
// default:
//  console.log('Не в этот раз');
//   break;
//}

// 2.11

//let num = 50;

//while (num <= 55) {
//  console.log(num);
//  num++;
//}

//do {
  //console.log(num);
  //num++;
//}
//while (num < 55);

//for (let i = 1; i <8; i++) {
//  console.log(num);
//  num++;
//}

for (let i = 1; i <8; i++) {
  if (i === 6) {
    //break;
    continue;
  }
  console.log(i);
}

//    2.13

//let num = 20;

function showFirstMessage(text) {
  console.log(text);
 // num = 10;
  console.log(num);
}

showFirstMessage("Hello World");
//console.log(num);

//function calc(a, b) {
//  return (a + b);
//}

//console.log(calc(4, 3));
//console.log(calc(5, 6));
//console.log(calc(10, 6));

function ret() {
  //let num = 50;

  //


  //return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log("hello");
};

logger();

const calc = (a, b) => {
  console.log('1');
  return a + b;
} ;

//let a = 3;
function addTwo(x) {
   let ret = x + 2;
   return ret;
}
//let b = addTwo(a);
console.log(b);

let val1 = 2;
function multiplyThis(n) {
  let ret = n * val1;
  return ret;
}
let multiplied = multiplyThis(6);
console.log('example of scope:', multiplied);

let val = 7;
  function createAdder() {
    function addNumbers(a, b) {
      let ret = a + b;
      return ret;
    }
    return addNumbers;
  }
  let adder = createAdder();
  //let sum = adder(val, 8);
  console.log('example of function returning a function: ', sum);

function createCounter() {
  let counter = 0;
  const myFunction = function() {
     counter = counter + 1;
     return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

let c = 4;
function addX(x) {
  return function(n) {
    return n + x;
  };
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);

//let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

//name = "Pete"; 

sayHi();

var ader = {
  base : 1,

  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         
console.log(adder.addThruCall(1));

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);

var even = arr.filter(v => v % 2 == 0);

//var double = arr.map(v => v * 2);


//const str = "test";
//const arr = [1, 2, 4];

//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//console.log(str);

let fruit ="Some fruit";

console.log(fruit.indexOf(fruit));

const logg = "Hello world";

//console.log(logg.slice(6, 11));

//console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12,2px";
//console.log(parseInt(test));
console.log(parseFloat(test));


var a = 'a';
var b = 'b';
if (a < b) { // true
  print(a + ' меньше чем ' + b);
} else if (a > b) {
  print(a + ' больше чем ' + b);
} else {
  print(a + ' и ' + b + ' равны.');
}


var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;


let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

let guestInList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestInList);

let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList);

alert( 'I\'m the Walrus!' );
alert( `I'm the Walrus!` );


//let str = `Hello`;

//alert( str[0] ); 
//alert( str.charAt(0) ); 


//alert( str[str.length - 1] );

for (let char of "Hello") {
  alert(char); 
}

let str = 'Hi';

str = 'h' + str[1]; 

alert( str );

alert( 'Interface'[0].toLowerCase() );

