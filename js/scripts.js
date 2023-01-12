// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.


const gridContainer = document.getElementById('grid-container')


function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const punteggio =[];




for (let i = 1 ; i < 100 + 1 ; i++){
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.append(i)
    

    newCell.addEventListener('click',

    function (){        
        if (bombs.includes(i)){
            newCell.classList.add('red')
            alert('hai perso')
        } else {
            newCell.classList.add('green')
            punteggio.push('1')
            let tot = punteggio.length
            console.log(tot)
            
        }
    
    }
    );
    gridContainer.append(newCell)
}


const bombs =[];

for (let i = 0 ; i < 16; i++){
    let randomNumber = getRandomNumber(1, 100);

    while (bombs.includes(randomNumber)){
        randomNumber = getRandomNumber(1, 100)
    }

    bombs.push(randomNumber)
}

console.log(bombs)

