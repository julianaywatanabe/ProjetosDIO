let winRate = getWinRate(70,34)
let ranking = getRanking(winRate)

function getWinRate(win, loss){
    let winRate = win - loss
    return winRate 
}

function getRanking(winRate){
    let ranking = ""
    if(winRate < 10){ranking = "Iron"}
    else if(winRate <= 20){ranking = "Bronze"}
    else if(winRate <= 50){ranking = "Silver"}
    else if(winRate <= 80){ranking = "Gold"}
    else if(winRate <= 90){ranking = "Diamond"}
    else if(winRate <= 100){ranking = "Legendary"}
    else {ranking = "Immortal"}
    return ranking
}

console.log("O herói tem saldo de " + winRate + " e está no nível " + ranking)