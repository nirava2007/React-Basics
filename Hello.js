import React from "react";

const Hello = () =>{
    //JSX
    //return(
    //    <div>
    //        <h1>Hi Nirava</h1>
    //    </div>
    //)

    //Without JSX
    return(
        React.createElement('div', null, React.createElement('h1', null, 'Hi Nirava'))
    )
}

export default Hello