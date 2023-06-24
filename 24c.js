'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    remeberMyFilms: function() {

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
            
        }   
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Мало фильмов смотрешь,дурачёк");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Классический проёбщик времени");
        } else if (personalMovieDB.count >= 30) {
            console.log("Looool zadrot");
        } else {
            console.log("ERROR MAZAFAK");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre == '' || negre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.generes[i - 1] = genre;
            }           
        }
        personalMovieDB.generes.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};








    