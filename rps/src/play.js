export default class Requests {
    play(p1Throw, p2Throw, observer) {
        const choices = ['paper', 'scissors', 'rock']
        if (
            !choices.includes(p1Throw) ||
            !choices.includes(p2Throw)
        ) {
            observer.invalid()
            return
        }

        if (p1Throw === p2Throw) {
            observer.tie()
            return
        }

        if (
            p1Throw === 'paper' && p2Throw === 'rock' ||
            p1Throw === 'rock' && p2Throw === 'scissors' ||
            p1Throw === 'scissors' && p2Throw === 'paper'
        ) {
            observer.p1Wins()
            return
        }

        observer.p2Wins()
    }
}
