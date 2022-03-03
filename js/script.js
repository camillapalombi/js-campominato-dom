/*VARIABILI GLOBALI*/

/*HTML <select>*/
let valueSelect = document.getElementById('difficulty');
/*Contenitore delle griglie*/
let squaresContainer = document.querySelector('.container-play-grid');
/*Bottone Play*/
let btnPlay = document.getElementById('btn-play');


/*ADD EVENT LISTENER SUL PLAY*/

btnPlay.addEventListener('click' , play);

/*Array*/
arrLevel = [100, 81, 49];


arrLevel = [100, 81, 49];

/*Funzione*/

function play() {
        //azzeramento!
    squaresContainer.innerHTML = '';

    let IndexLevel = parseInt(valueSelect.value);

    let cellsCount = arrLevel[IndexLevel];

/*Easy*/
    if (cellsCount == 100) {

        let cells = [];

        for (let i = 1; i <= 100; i++) {

            let elemento = document.createElement('div');
            elemento.classList.add('square-100');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);
            cells.push(i);
            elemento.addEventListener('click', function(){
            elemento.classList.add('green');
            })
        }
        console.log(cells)
        
        /*16 numeri random tra 1 e 100*/
        let arrDobleNumber = [];
        let arrFinalNumbers = [];

        for (i = 1; i <= 16; i++) {
            cells = getRandomNumbers(1, 100);
            
            while (arrDobleNumber.includes(randomNumber)) {
                cells = getRandomNumbers(1, 100);
            }
            arrDobleNumber.push(cells);
            let finalArray = arrFinalNumbers[cells];
            
            
            elemento.addEventListener('click', function(){
            elemento.classList.add('red');
        })
    }
        
        

/*Difficult*/
    } else if (cellsCount == 49) {

        for (let i = 1; i <= 49; i++) {
        
            elemento = document.createElement('div');
            elemento.classList.add('square-49');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);

            
            elemento.addEventListener('click', function(){
            elemento.classList.add('green');
            });
        
        }
        /*16 numeri random tra 1 e 49*/
        let arrDobleNumber = [];
        let arrFinalNumbers = [];

        for (let i = 0; i < 16; i++) {
            let randomNumber = getRandomNumbers(1, 49)
            
            while (arrDobleNumber.includes(randomNumber)) {
                randomNumber = getRandomNumbers(1, 49);
            }
            arrDobleNumber.push(randomNumber);
            let finalArray = arrFinalNumbers[randomNumber];
            
        }

/*Medium*/
    } else {

        for (let i = 1; i <= 81; i++) {
        
            elemento = document.createElement('div');
            elemento.classList.add('square-81');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);  

            
            elemento.addEventListener('click', function(){
            elemento.classList.add('green');
            });
        }
        /*16 numeri random tra 1 e 81*/
        let arrDobleNumber = [];
        let arrFinalNumbers = [];

        for (let i = 0; i < 16; i++) {
            let randomNumber = getRandomNumbers(1, 81)
            
            while (arrDobleNumber.includes(randomNumber)) {
                randomNumber = getRandomNumbers(1, 81);
            }
            arrDobleNumber.push(randomNumber);
            let finalArray = arrFinalNumbers[randomNumber];
            
    } 
}}


function getRandomNumbers(min, max) {
        return  Math.floor(Math.random() * (max - min + 1) + min);
}
























































































