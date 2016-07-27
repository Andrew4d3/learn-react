import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  render(){
    let txt = this.props.txt
    let cat = this.props.cat
    return <h1>{txt} - {cat}</h1>
  }
}

// This will perform some validations
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// If we define txt value, this will be overwritten
App.defaultProps = {
  txt: 'This is the default text'
}

ReactDOM.render(<App cat={5} />, document.getElementById('app'))
