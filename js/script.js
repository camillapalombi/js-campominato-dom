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

/*Funzione*/

function play() {
        //azzeramento!
    squaresContainer.innerHTML = '';

    let IndexLevel = parseInt(valueSelect.value);

    let cellsCount = arrLevel[IndexLevel];

/*Easy*/
    if (cellsCount == 100) {

        for (let i = 1; i <= 100; i++) {

            let elemento = document.createElement('div');
            elemento.classList.add('square-100');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);
        }

/*Difficult*/
    } else if (cellsCount == 49) {

        for (let i = 1; i <= 49; i++) {
        
            elemento = document.createElement('div');
            elemento.classList.add('square-49');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);
        
        }

/*Medium*/
    } else {

        for (let i = 1; i <= 81; i++) {
        
            elemento = document.createElement('div');
            elemento.classList.add('square-81');
            elemento.innerHTML = i ;
            squaresContainer.append(elemento);  
        }
    } 
}