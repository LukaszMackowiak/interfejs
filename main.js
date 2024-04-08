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
 
 let usersArr = [
	{
		userID: '36b8f84d-df4e-ad32-b662-bcde71a8764f',
		userName: 'Jasia',
		userCity: 'Gliwice',
		userAge: 16,	
	},
	{
		userID: '36b8f84d-df4e-4d49-b662-bcde71a87623',
		userName: 'Michał',
		userCity: 'Zabrze',
		userAge: 19,
	},
	{
		userID: '36b8f84d-df4e-s3ae-b662-bcde71a876aa',
		userName: 'Olga',
		userCity: 'Knurów',
		userAge: 23,
	},
	{
		userID: '36b8f84d-df4e-a43w-b662-bcde71a876b3',
		userName: 'Marek',
		userCity: 'Gliwice',
		userAge: 17,
	},
	{
		userID: '36b8f84d-df4e-zfdr-b662-bcde71a876a2',
		userName: 'Józefa',
		userCity: 'Pyskowice',
		userAge: 42,
	},
	{
		userID: '36b8f84d-df4e-adz3-b662-bcde71a87622',
		userName: 'Janek',
		userCity: 'Gliwice',
		userAge: 30,
	},
	{
		userID: '36b8f84d-df4e-bfr3-b662-bcde71a87635',
		userName: 'Hania',
		userCity: 'Toszek',
		userAge: 12,
	},
	{
		userID: '36b8f84d-df4e-n2er-b662-bcde71a87644',
		userName: 'Benek',
		userCity: 'Warszawa',
		userAge: 45,
	},
	{
		userID: '36b8f84d-df4e-ke4q-b662-bcde71a876fa',
		userName: 'Gosia',
		userCity: 'Gliwice',
		userAge: 30,
	},
];


[].forEach(element => {
    ${element.name}
    ${element.button}
})


function removeUser(removeUserID){
	userArr = userArr.filter((user) => user.userID !== removeUserID);

	displayUsers();
}

displayUsers();

function generateSearchOption(){
	const userObject = userArr[0];
	for (const userObjProperty of Object.keys(userObject)){
		if (userObjProperty !== 'userID'){
			const option = document.createElement('option');
			option.value = userObjProperty;
			option.innerText = userObjProperty;
			selectSearchBy.append(option);
		}

	}
}
generateSearchOption();


searchBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	foundUsersList.innerHTML = '';
	console.log(searchValue.value);
	userArr
		.filter((elem) => elem[selectSearchBy.value] == searchValue.value)
		.map((elem) => {
			const li = document.createElement('li');
			li.classList.add('list-group-item');
			li.innerHTML = `$(elem.userName) $(elem.userCity) $(elem.userAge)`;
			foundUsersList.append(li);   
		})
})