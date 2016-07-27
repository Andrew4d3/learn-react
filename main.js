import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  render(){
    return (<Button>React <Heart /></Button>)
  }
}

class Button extends React.Component{
  render(){
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span> is Cool!</span>

ReactDOM.render(<App />, document.getElementById('app'))
