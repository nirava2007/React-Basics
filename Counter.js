import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    changeCount(){
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
    }
  render() {
    return (
        <div>
            <div>Count={this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment Five Times</button>
        </div>
    )
  }
}

export default Counter