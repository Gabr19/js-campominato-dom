// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.


const gridContainer = document.getElementById('grid-container')

function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}



for (let i = 1 ; i < 100 + 1 ; i++){

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.append(i)
    newCell.addEventListener('click',

    function (){

        if(newCell.classList.contains('clicked')){
            newCell.classList.remove('clicked')
        }else{
            newCell.classList.add('clicked')
            console.log(i)
        }
    }
    );
    const randomNumber = getRandomNumber(1, 64);
    newCell.innerHTML = randomNumber 

    gridContainer.append(newCell)
}



