'use strict';

let number0Films;

function start() {
    number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (number0Films == '' || number0Films == null || isNaN(number0Films)) {
        number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('Один из последних просмотренных фильмов?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');  
    } else {
        console.log('error');
        i--;
    }
    
    
    
    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    console.log("Мало фильмов смотрешь,дурачёк");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Классический проёбщик времени");
} else if (personalMovieDB.count >= 30) {
    console.log("Looool zadrot");
} else {
    console.log("ERROR MAZAFAK");
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.generes[i - 1] = genre;
    }
}

writeYourGenres();


    