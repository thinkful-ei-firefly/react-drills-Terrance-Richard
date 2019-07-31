import React from 'react'
// import { threadId } from 'worker_threads';

class Bomb extends React.Component {
  state= {
    count:0,
    message: 'tick'
  }

  updateCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  changeMessage() {
    if (this.state.count > 8) {
      this.setState({
        count: 0,
        message: 'tick'
      })
    }
    else if (this.state.count === 8) {
      this.setState({
        message: 'BOOM!'
      })
    }
    else if(this.state.count %2 === 0) {
      this.setState({
        message: 'tick'})
    }
    else if(this.state.count %2 !== 0){
      this.setState({
        message: 'tock'
      })
    }
  }

   componentDidMount() {
    this.interval = setInterval(() => {
      console.log('tick');
      this.updateCount();
      this.changeMessage();
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
   
   
   
   

export default Bomb
