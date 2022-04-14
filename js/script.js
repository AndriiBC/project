'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//for (let i = 0; i < 2; i++) {
//    const a = prompt('Один из последних просмотренных фильмов?', ''),
//          b = prompt('На сколько оцените его?', '');
    
//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//        personalMovieDB.movies[a] = b;
//        console.log('done');
//    } else {
//        console.log('error');
//        i--;
//    }

    
//}   

//let i = 0;
//while (i < 2) {
//    const a = prompt('Один из последних просмотренных фильмов?', ''),
//          b = prompt('На сколько оцените его?', '');
//          i++;
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//            personalMovieDB.movies[a] = b;
//           console.log('done');
//    } else {
//            console.log('error');
//            i--;
//    }
//}

let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          i++;

    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} while (i < 2);


if ( personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if ( personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
    

console.log(personalMovieDB );

function sum(a) {

    return function(b) {
      return a + b; 
    };
  
}
  
alert( sum(1)(2) ); 
alert( sum(5)(-1) ); 

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  users.sort(byField('name'));
  users.forEach(user => alert(user.name)); 
  
  users.sort(byField('age'));
  users.forEach(user => alert(user.name)); 

  