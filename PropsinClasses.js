import React,{Component} from "react";

class Hey extends Component{
    render(){
        return(
            <h1>Hey {this.props.name} a.k.a {this.props.relation}</h1>
        )
    }
}

//Destructuring Props
// class Hey extends Component{
//     render(){
//         const {name,relation} = this.props 
//         return(
//             <h1>Hey {name} a.k.a {relation}</h1>
//         )
//     }
// }
export default Hey