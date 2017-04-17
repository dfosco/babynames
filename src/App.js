import React, { Component } from 'react'
import './App.css'
import NamesList from './components/NamesList'
import Credit from './components/Credit'
import Search from './components/Search'
import Shortlist from './components/Shortlist'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: ''
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  render() {
    console.log('filterText state from parent component: ', this.state.filterText)
    return(
      <div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
                       {/* Breaking it down: */}
                       {/* this. -- gets the context */}
                       {/* filterUpdate. -- passes down the filterUpdate function */}
                       {/* bind(this) -- feeds the result back to the context...? */}
        <main>
          <Shortlist />
          <NamesList
            data={this.props.data}
            filterText={this.state.filterText}
          />
          <Credit />
        </main>
      </div>
    )
  }
}

export default App;
