import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      red: 0
    }
    this.update = this.update.bind(this)
  }

  update(e){

    this.setState({
      red: ReactDOM.findDOMNode(this.refs.inp.refs.red).value
    })
  }

  render(){
  
    return (
      <div>
        <NumInput
          ref="inp"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          label="Red"
          update={this.update} />
      </div>
    )
  }
}

class NumInput extends React.Component {
  render(){
    return (
      <div>
        <label>Val: {this.props.val}</label>
        <input
          ref="red"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update}
        />
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

ReactDOM.render(<App />, document.getElementById('app'))
