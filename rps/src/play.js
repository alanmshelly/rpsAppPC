export default class Requests {
    play(player1Throw, player2Throw, observer) {
        const validThrows = ['paper', 'scissors', 'rock']
        if (
            !validThrows.includes(player1Throw) ||
            !validThrows.includes(player2Throw)
        ) {
            observer.invalid()
        } else if (
            player1Throw === player2Throw
        ) {
            observer.tie()
        } else if (
            player1Throw === 'paper' && player2Throw === 'rock' ||
            player1Throw === 'rock' && player2Throw === 'scissors' ||
            player1Throw === 'scissors' && player2Throw === 'paper'
        ) {
            observer.p1Wins()
        } else {
            observer.p2Wins()
        }
    }
}
