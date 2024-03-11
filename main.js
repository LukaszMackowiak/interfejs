 const userName = document.querySelector('#imie');
 const userCity = document.querySelector('#miasto');
 const userAge = document.querySelector('#wiek');
 const szukana = document.querySelector('#szukana');
 const kryterium = document.querySelector('#kryterium');
 const button1 = document.querySelector('button1');
 const button2 = document.querySelector('button2');

button1.addEventListener('click', evt){
    evt.preventDefault();
};

button2.addEventListener('click', evt){
    evt.preventDefault();
};


 const userNameVal = imie.Value;
 const userCityVal = miasto.Value;
 const userAgeVal = wiek.Value;
 const szukanaVal = szukana.Value;
 const kryteriumVal = kryterium.Value;

 let uzytkownicy = [
     {
         userID: 4353465342,
         userName: Stefan,
         userCity: Sosnowiec,
         userAge: 50,
     },
     {
        userID: 6846574635,
        userName: Bronisława,
        userCity: Warszawa,
        userAge: 74,
     },
     {
        userID: 7654432677,
        userName: Jan,
        userCity: Gliwice,
        userAge: 28,
     },
     {
        userID: 7648765487,
        userName: Ignacy,
        userCity: Łódź,
        userAge: 56,
     },
     {
        userID: 3255676655,
        userName: Stefan,
        userCity: Bydgoszcz,
        userAge: 26,
     },
 ]


[].forEach(element => {
    ${element.name}
    ${element.button}
})