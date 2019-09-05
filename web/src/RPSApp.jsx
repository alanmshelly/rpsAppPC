import React from 'react'

class RPSApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            p1Throw: undefined,
            p2Throw: undefined,
            result: '',
        }
    }

    invalid() {
        this.setState({result: 'Invalid Input!'})
    }

    p1Wins() {
        this.setState({result: 'Player 1 Wins!'})
    }

    p2Wins() {
        this.setState({result: 'Player 2 Wins!'})
    }

    tie() {
        this.setState({result: 'Tie!'})
    }

    handleThrowInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleClick() {
        this.props.requests.play(this.state.p1Throw, this.state.p2Throw, this)
    }

    render() {
        return <div>
            <div>{this.state.result}</div>
            <input name='p1Throw' onChange={this.handleThrowInputChange.bind(this)}/>
            <input name='p2Throw' onChange={this.handleThrowInputChange.bind(this)}/>
            <button onClick={this.handleClick.bind(this)}>play</button>
        </div>
    }
}

export default RPSApp