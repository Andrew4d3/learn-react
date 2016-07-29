import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      data: [
        { id: 1, name: "Puyol"},
        { id: 2, name: "Xavi"},
        { id: 3, name: "Iniesta"},
        { id: 4, name: "Messi"}
      ]
    }
  }

  render(){
    /* Key is important. Otherwise we get an error here */
    let rows = this.state.data.map( (person) => <PersonRow key={person.id} data={person} /> )
    return (<table><tbody>{rows}</tbody></table>)
  }

}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
