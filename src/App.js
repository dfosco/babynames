import React, { Component } from 'react'
import './App.css'
import NamesList from './components/NamesList'
import Credit from './components/Credit'

class App extends Component {
  render() {
    return(
      <main>
        <NamesList data={this.props.data} />
        <Credit />
      </main>
    )
  }
}

export default App;
