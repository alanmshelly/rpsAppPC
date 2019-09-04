import Requests from '../src/play'

describe('play', () => {
    it('rock vs scissors', () => {
        const spyObserver = jasmine.createSpyObj(['p1Wins'])


        new Requests().play('rock', 'scissors', spyObserver)


        expect(spyObserver.p1Wins).toHaveBeenCalled()
    })

    it('rock vs paper', () => {
        const spyObserver = jasmine.createSpyObj(['p2Wins'])


        new Requests().play('rock', 'paper', spyObserver)


        expect(spyObserver.p2Wins).toHaveBeenCalled()
    })

    it('rock vs rock', () => {
        const spyObserver = jasmine.createSpyObj(['tie'])


        new Requests().play('rock', 'rock', spyObserver)


        expect(spyObserver.tie).toHaveBeenCalled()
    })

    it('paper vs rock', () => {
        const spyObserver = jasmine.createSpyObj(['p1Wins'])


        new Requests().play('paper', 'rock', spyObserver)


        expect(spyObserver.p1Wins).toHaveBeenCalled()
    })

    it('paper vs scissors', () => {
        const spyObserver = jasmine.createSpyObj(['p2Wins'])


        new Requests().play('paper', 'scissors', spyObserver)


        expect(spyObserver.p2Wins).toHaveBeenCalled()
    })

    it('paper vs paper', () => {
        const spyObserver = jasmine.createSpyObj(['tie'])


        new Requests().play('paper', 'paper', spyObserver)


        expect(spyObserver.tie).toHaveBeenCalled()
    })

    it('scissors vs paper', () => {
        const spyObserver = jasmine.createSpyObj(['p1Wins'])


        new Requests().play('scissors', 'paper', spyObserver)


        expect(spyObserver.p1Wins).toHaveBeenCalled()
    })

    it('scissors vs rock', () => {
        const spyObserver = jasmine.createSpyObj(['p2Wins'])


        new Requests().play('scissors', 'rock', spyObserver)


        expect(spyObserver.p2Wins).toHaveBeenCalled()
    })

    it('scissors vs scissors', () => {
        const spyObserver = jasmine.createSpyObj(['tie'])


        new Requests().play('scissors', 'scissors', spyObserver)


        expect(spyObserver.tie).toHaveBeenCalled()
    })

    it('sailboat vs scissors', () => {
        const spyObserver = jasmine.createSpyObj(['invalid'])


        new Requests().play('sailboat', 'scissors', spyObserver)


        expect(spyObserver.invalid).toHaveBeenCalled()
    })

    it('rock vs sailboat', () => {
        const spyObserver = jasmine.createSpyObj(['invalid'])


        new Requests().play('rock', 'sailboat', spyObserver)


        expect(spyObserver.invalid).toHaveBeenCalled()
    })

    it('sailboat vs sailboat', () => {
        const spyObserver = jasmine.createSpyObj(['invalid'])


        new Requests().play('sailboat', 'sailboat', spyObserver)


        expect(spyObserver.invalid).toHaveBeenCalled()
    })
})
