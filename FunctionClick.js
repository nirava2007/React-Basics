import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('button clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
{/* Parenthesis is not written along with clickHandler because we dont want function call. */}
    </div>
  )
}

export default FunctionClick