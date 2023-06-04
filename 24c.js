'use strict';

const number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцениваете его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');  
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

    if (personalMovieDB.count < 10) {
        console.log("Мало фильмов смотрешь,дурачёк");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Классический проёбщик времени");
    } else if (personalMovieDB.count >= 30) {
        console.log("Looool zadrot");
    } else {
        console.log("ERROR MAZAFAK");
    }

console.log(personalMovieDB);



    