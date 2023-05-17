import React from "react";

const Hi = props => {
    console.log(props);
    return(
        <div>
        <h1>Hello {props.name} a.k.a {props.relation} </h1>
        {props.children}
        </div>
    )
}
//Destructuring props
//
//Method 1
// const Hi = ({name,relation,children}) => {
//     //console.log(props);
//     return(
//         <div>
//         <h1>Hello {name} a.k.a {relation} </h1>
//         {children}
//         </div>
//     )
// }
//Method 2
// const Hi = props => {
//     console.log(props);
//     const {name,relation,children} = props
//     return(
//         <div>
//         <h1>Hello {name} a.k.a {relation} </h1>
//         {children}
//         </div>
//     )
// }
export default Hi