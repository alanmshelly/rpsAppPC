import React from 'react'
import ReactDOM from 'react-dom'
import RPSApp from "./RPSApp";
import Requests from 'rps/src/play'

ReactDOM.render(<RPSApp requests={new Requests()}/>, document.querySelector('#app'))