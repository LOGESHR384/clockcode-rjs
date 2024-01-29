import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()} 
  //or this method use constructor(props){
  super(props)
  this.state ={date: new Date()}
} //
  

  componentDidMount() {
    console.log('componentDidMount() called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWilUnmount() called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(date)
    console.log('render() called')

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <h1 className="time">{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
