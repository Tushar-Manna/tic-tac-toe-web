const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9]
]

let counter = 0;
let player1 = [] ;
let player2 = [];
const gridItems = document.querySelectorAll('.cell');
clickedCells = {};
let someonewon = false;
const heading = document.getElementById('turn')


function play (pos) {
    const position = Number(pos);
    if (!clickedCells[position]) {
        if (counter % 2 === 0) {
            player1.push(position)
            wincheck(player1, "O")
        }
        else {player2.push(position)
            wincheck(player2, "X")
        }
        counter++
    }
    clickedCells[position] = true;
    
}

function render(id) {
    const cell = document.getElementById(id)
    

    if (!cell.classList.contains('clicked')) {
        cell.textContent = counter % 2 === 0 ? 'X': 'O';
        heading.textContent = counter % 2 === 0  ? "O's Turn": "X's Turn";
        cell.classList.add('clicked')
    }
}


function wincheck(arr, name) {
    if (arr.length >= 3) {
        for (const winarr of win) {
            const isWinning = winarr.every(element => arr.includes(element));

            if (isWinning) {
                someonewon=true;
                setTimeout(() => heading.textContent = `${name} Won, Reset Board to Play Another Game!`, 300
                )
                break;
            }
            
            
        }
    }
}


function reset() {
    counter = 0;
    player1.length=0;
    player2.length=0;
    clickedCells = {};
    someonewon=false;
    heading.textContent = `O's Turn`
    gridItems.forEach (cell => {
        cell.textContent='';
        cell.classList.remove('clicked')
        cell.style.pointerEvents = ''; //yeah I apply good practices!
    })
}



gridItems.forEach ((item) => {
    item.addEventListener('click', function() {
        if (!clickedCells[item.id] && !someonewon) {
            play(item.id);
            render(item.id);
            if (counter >= 9 && !someonewon) {
                heading.textContent = `Game Over, Reset Board to Play Another Game!`
            }
            
        }
        
    })
});

document.getElementById('reset').addEventListener('click', reset)