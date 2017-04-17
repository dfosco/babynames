import React, { Component } from 'react'
import './App.css'
import NamesList from './components/NamesList'

class App extends Component {
  render() {
    return(
      <main>
        <NamesList data={this.props.data} />
      </main>
    )
  }
}

export default App;
