import React from 'react'
import ReactDOM from 'react-dom'
import RPSApp from '../src/RPSApp'
import ReactTestUtils from 'react-dom/test-utils'


describe('play form', () => {
    let domFixture
    beforeEach(() => {
        domFixture = setupDom()
    })

    afterEach(() => {
        domFixture.remove()
    })
    describe('when the play use case tells the UI that the input is invalid', () => {
        beforeEach(() => {
            renderRPSApp({
                play: (p1Throw, p2Throw, observer) => observer.invalid(),
            })
        })

        it('by default does not display the result', () => {
            expect(textContent()).not.toContain('Invalid Input!')
        })

        it('tells the user that their input is invalid', () => {
            clickPlayButton()


            expect(domFixture.textContent).toContain('Invalid Input!')
        })
    })

    describe('when the play use case tells the UI that player 1 wins', () => {
        beforeEach(() => {
            renderRPSApp({
                play: (p1Throw, p2Throw, observer) => observer.p1Wins(),
            })
        })

        it('by default does not display the result', () => {
            expect(textContent()).not.toContain('Player 1 Wins!')
        })

        it('tells the user that player 1 wins', () => {
            clickPlayButton()


            expect(domFixture.textContent).toContain('Player 1 Wins!')
        })
    })

    describe('when the play use case tells the UI that player 2 wins', () => {
        beforeEach(() => {
            renderRPSApp({
                play: (p1Throw, p2Throw, observer) => observer.p2Wins(),
            })
        })

        it('by default does not display the result', () => {
            expect(textContent()).not.toContain('Player 2 Wins!')
        })

        it('tells the user that player 2 wins', () => {
            clickPlayButton()


            expect(domFixture.textContent).toContain('Player 2 Wins!')
        })
    })

    describe('when the play use case tells the UI that it is a tie', () => {
        beforeEach(() => {
            renderRPSApp({
                play: (p1Throw, p2Throw, observer) => observer.tie(),
            })
        })

        it('by default does not display the result', () => {
            expect(textContent()).not.toContain('Tie!')
        })

        it('tells the user that it is a tie', () => {
            clickPlayButton()


            expect(domFixture.textContent).toContain('Tie!')
        })
    })

    function setPlayer1Throw(player1Throw) {
        const p1ThrowInput = domFixture.querySelector('input[name="p1Throw"]')
        p1ThrowInput.value = player1Throw
        ReactTestUtils.Simulate.change(p1ThrowInput)
    }
    function setPlayer2Throw(player2Throw) {
        const p2ThrowInput = domFixture.querySelector('input[name="p2Throw"]')
        p2ThrowInput.value = player2Throw
        ReactTestUtils.Simulate.change(p2ThrowInput)
    }

    describe('when the play button is clicked', () => {
        it('sends the user inputs to the game module', () => {
            const spyRequests = {
                play: jasmine.createSpy(),
            }
            renderRPSApp(spyRequests)

            setPlayer1Throw('rock')
            setPlayer2Throw('paper')


            clickPlayButton()


            expect(spyRequests.play)
                .toHaveBeenCalledWith('rock', 'paper', jasmine.any(Object))
        })
    })

    function textContent() {
        return domFixture.textContent
    }

    function clickPlayButton() {
        document.querySelector('button').click()
    }

    function renderRPSApp(requests) {
        ReactDOM.render(
            <RPSApp requests={requests}/>,
            domFixture,
        )
    }

    function setupDom() {
        const domFixture = document.createElement('div')
        document.body.append(domFixture)
        return domFixture
    }
})