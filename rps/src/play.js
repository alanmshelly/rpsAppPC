export default class Requests {
    play(p1Throw, p2Throw, observer) {
        new PlayRoundRequest(p1Throw, p2Throw, observer).process()
    }
}

class PlayRoundRequest {
    constructor(p1Throw, p2Throw, observer) {
        this.p1Throw = p1Throw
        this.p2Throw = p2Throw
        this.observer = observer
    }

    process() {
        if (
            this.isInvalidChoice(this.p1Throw) ||
            this.isInvalidChoice(this.p2Throw)
        ) {
            this.observer.invalid()
            return
        }

        if (this.tieScenario()) {
            this.observer.tie()
            return
        }

        if (this.p1WinsScenarios()) {
            this.observer.p1Wins()
            return
        }

        this.observer.p2Wins()
    }

    isInvalidChoice(playerChoice) {
        const choices = [
            PlayerChoice.PAPER,
            PlayerChoice.SCISSORS,
            PlayerChoice.ROCK,
        ]
        return !choices.includes(playerChoice)
    }

    p1WinsScenarios() {
        return this.p1Throw === PlayerChoice.PAPER && this.p2Throw === PlayerChoice.ROCK ||
            this.p1Throw === PlayerChoice.ROCK && this.p2Throw === PlayerChoice.SCISSORS ||
            this.p1Throw === PlayerChoice.SCISSORS && this.p2Throw === PlayerChoice.PAPER
    }

    tieScenario() {
        return this.p1Throw === this.p2Throw
    }
}

const PlayerChoice = {
    PAPER: 'paper',
    SCISSORS: 'scissors',
    ROCK: 'rock',
}
