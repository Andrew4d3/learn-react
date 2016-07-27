/* Not used at this lesson */

import React from 'react'

class App extends React.Component{
  render(){

    // return <h1> Hello Guys </h1> <b>Hi Again!</b> // WRONG! It must be wrapped into a single DOM element
    return (
      <div>
        <h1>Hello guys!</h1>
        <b>Hi again</b>
      </div>
    )
  }
}


export default App
