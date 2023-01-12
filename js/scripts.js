const gridContainer = document.getElementById('grid-container')

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


    )

    gridContainer.append(newCell)
}

