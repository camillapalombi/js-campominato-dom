/*VARIABILI GLOBALI*/

/*HTML <select>*/
let valueSelect = document.getElementById('difficulty');
/*Contenitore delle griglie*/
let squaresContainer = document.querySelector('.container-play-grid');
/*Bottone Play*/
let btnPlay = document.getElementById('btn-play');

const arrLevels = [100, 81, 49];//NUMERO DI CELLE X LIVELLO

const bombNumber = 16; //numero totale bombe

btnPlay.addEventListener('click', play); //ADD EVENT LISTENER!

function play() {

	squaresContainer.innerHTML = ''; //azzeramento
    finalScore = 0; //punteggio finale

	const indexLevel = parseInt(valueSelect.value);
	const cellsCount = arrLevels[indexLevel]; //conteggio celle x ogni livello
	const cellsPerRow = Math.sqrt(cellsCount);//dimensionamento celle x ogni livello
    const greenCells = cellsCount - bombNumber; //tot celle verdi x ogni livello

	for (let cellNum = 1; cellNum <= cellsCount; cellNum++){
		const elementCell = document.createElement('div');
		elementCell.classList.add('squares');
		elementCell.innerHTML = cellNum;
		elementCell.style.width = `calc(100% / ${cellsPerRow})`;//dimensionamento celle in base al livello
		elementCell.style.height = `calc(100% / ${cellsPerRow})`;//dimensionamento celle in base al livello
        elementCell.addEventListener('click' , cellClick);
		squaresContainer.append(elementCell);
	}

    const arrRandom = [];
    let elementOutput = document.querySelector('.element-output'); //dove dichiarerò se ho vinto o perso e il punteggio

    for (let i = 0; i < 16; i++) { //16 numeri random
        let randomNumbers;
        do {
            randomNumbers = getRandomNumbers(1, cellsCount); //range tra il quale si definiscono 1 16 Nrandom
        } while (arrRandom.includes(randomNumbers));
        arrRandom.push(randomNumbers);
    }

    function cellClick() { //funzioni al click delle celle

        cellValue = parseInt(this.innerHTML);

        if (arrRandom.includes(cellValue)) { //clicco cella rossa e perdo
            this.classList.add('red-bomb');
            elementOutput.innerHTML = 'Hai perso. Il tuo punteggio è:' + finalScore;
            const allCells = document.querySelectorAll('.squares');
            for (let i = 0; i < allCells.length; i++) {
                allCells[i].removeEventListener('click', cellClick);
            }
        } else {
            this.classList.add('green-cell'); //clicco cella verde e continuo
            finalScore++;
        }

        if (finalScore === greenCells) {
            elementOutput.innerHTML = 'Hai vinto! Il tuo punteggio è:' + finalScore; //vittoria
            const allCells = document.querySelectorAll('.squares');
            for (let i = 0; i < allCells.length; i++) {
                allCells[i].removeEventListener('click', cellClick);
            }
        }

        this.removeEventListener('click', cellClick); //sia che vinco sia che perdo il gioco si ferma!
    }



























}










//funzione generatore numeri random!
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
















































































