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


let player1 = []
let player2 = []



function wincheck(winarray, arr) {
    const sortedArr = arr.sort((a, b) => a - b).slice(0,3);


    winarray.forEach(win => {
        if (win.every(val => sortedArr.includes(val))) {
            console.log("you won");
        }
    }
    )

    if (arr.length >= 5 ) {
        console.log("game over")
    }
}


wincheck(win, player1)