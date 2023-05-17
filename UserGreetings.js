import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : true
      }
    }
  render() {
    return(
        this.state.isLoggedin && 'Welcome Nirava'
    )

    //Conditional Operators
    // return(
    //     this.state.isLoggedin?
    //     'Welcome Nirava': 'Welcome Guest'
    // )

    // let message
    // if(this.state.isLoggedin){
    //     message='Welcome Nirava'
    // }
    // else{
    //     message='Welcome Guest'
    // }
    // return message


    //Simple if else
    // if(this.state.isLoggedin){
    // return (
    //   <div>Welcome Nirava</div>
    // )
    // }
    // else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
  }
}

export default UserGreetings