import React from 'react'
import ReactDOM from 'react-dom'

let Mixin = InnerComponent => class extends React.Component {
  constructor(){
    super()
    this.state = { val: 0}
    this.update = this.update.bind(this)
  }

  update(){
    this.setState({val: this.state.val + 1})
  }

  componentWillMount(){
    console.log('will unmount');
  }

  componentDidMount(){
    console.log('mounted');
  }

  render(){
    return (<InnerComponent update={this.update} {...this.state} {...this.props} />)
  }

}

const Button = (props) =>{
  return (
    <button onClick={props.update}>
      {props.txt} - {props.val}
    </button>
  )
}

const Label = (props) =>{
  return (
    <label onMouseMove={props.update}>
      {props.txt} - {props.val}
    </label>
  )
}

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component{
  render(){
    return (<div><ButtonMixed txt="Button" /><LabelMixed txt="Button" /></div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
