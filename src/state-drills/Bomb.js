import React from 'react'
import { threadId } from 'worker_threads';

class Bomb extends React.Component {
   state= {
       count:0,
       message: 'tick'
   }
   componentDidMount() {
    this.interval = setInterval(() => {
      console.log('tick');
      function changeMessage() {
          if(this.state.count %2 === 0) {
            this.setState({
                message: 'tick'})
          }
          else if(this.state.count %2 !== 0){
              this.setState({
                  message: 'tock'
              })
          }
      }
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}
   
   
   
   

export default Bomb
