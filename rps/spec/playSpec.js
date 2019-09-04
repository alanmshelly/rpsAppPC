import Requests from '../src/play'

describe('play', () => {
    describe('player 1 wins scenario', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = jasmine.createSpyObj(['p1Wins'])
        })

        it('rock vs scissors', () => {
            new Requests().play('rock', 'scissors', spyObserver)


            expect(spyObserver.p1Wins).toHaveBeenCalled()
        })

        it('paper vs rock', () => {
            new Requests().play('paper', 'rock', spyObserver)


            expect(spyObserver.p1Wins).toHaveBeenCalled()
        })

        it('scissors vs paper', () => {
            new Requests().play('scissors', 'paper', spyObserver)


            expect(spyObserver.p1Wins).toHaveBeenCalled()
        })
    })

    describe('player 2 wins scenario', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = jasmine.createSpyObj(['p2Wins'])
        })

        it('rock vs paper', () => {
            new Requests().play('rock', 'paper', spyObserver)


            expect(spyObserver.p2Wins).toHaveBeenCalled()
        })

        it('paper vs scissors', () => {
            new Requests().play('paper', 'scissors', spyObserver)


            expect(spyObserver.p2Wins).toHaveBeenCalled()
        })

        it('scissors vs rock', () => {
            new Requests().play('scissors', 'rock', spyObserver)


            expect(spyObserver.p2Wins).toHaveBeenCalled()
        })
    })

    describe('tie scenario', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = jasmine.createSpyObj(['tie'])
        })

        it('rock vs rock', () => {
            new Requests().play('rock', 'rock', spyObserver)


            expect(spyObserver.tie).toHaveBeenCalled()
        })

        it('paper vs paper', () => {
            new Requests().play('paper', 'paper', spyObserver)


            expect(spyObserver.tie).toHaveBeenCalled()
        })

        it('scissors vs scissors', () => {
            new Requests().play('scissors', 'scissors', spyObserver)


            expect(spyObserver.tie).toHaveBeenCalled()
        })
    })

    describe('invalid scenario', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = jasmine.createSpyObj(['invalid'])
        })

        it('sailboat vs scissors', () => {
            new Requests().play('sailboat', 'scissors', spyObserver)


            expect(spyObserver.invalid).toHaveBeenCalled()
        })

        it('rock vs sailboat', () => {
            new Requests().play('rock', 'sailboat', spyObserver)


            expect(spyObserver.invalid).toHaveBeenCalled()
        })

        it('sailboat vs sailboat', () => {
            new Requests().play('sailboat', 'sailboat', spyObserver)


            expect(spyObserver.invalid).toHaveBeenCalled()
        })
    })
})
