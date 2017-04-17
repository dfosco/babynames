import React, { Component } from 'react'
import './App.css'
import NamesList from './components/NamesList'
import Credit from './components/Credit'
import Search from './components/Search'
import Shortlist from './components/Shortlist'


class App extends Component {
  render() {
    return(
      <div>
        <Search />
        <Shortlist />
        <main>
          <NamesList data={this.props.data} />
          <Credit />
        </main>
      </div>
    )
  }
}

export default App;
