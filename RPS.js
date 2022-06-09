function computerPlay(){
    let x = Math.floor(Math.random()*3)
    console.log(x)
    switch(x){
        case 0:
            return 'scissors'
        case 1:
            return 'rock'
        default:
            return 'paper'
    }
}
function playRound(p,c){
    p = p.toLowerCase()
    switch(p){
        case 'scissors':
            if (c == 'rock'){
                return "You Lose! Rock beats Scissors"
            }
            else if (c=='scissors'){
                return "Tie"
            }
            else{
                return "You Win! Scissors beats Paper"
            }
        case 'rock':
            if (c == 'paper'){
                return "You Lose! Paper beats Rock"
            }
            else if (c=='rock'){
                return "Tie"
            }
            else{
                return "You Win! Rock beats Scissors"
            }
        case 'paper':
            if (c == 'scissors'){
                return "You Lose! Scissors beats Paper"
            }
            else if (c=='paper'){
                return "Tie"
            }
            else{
                return "You Win! Paper beats Rock"
            }
        default:
            return 'invalid input'
    }
}
function game(){
    for (let i =0; i < 5; i++){
        let p = prompt("You're move?")
        console.log(playRound(p,computerPlay()))
    }
}
game()