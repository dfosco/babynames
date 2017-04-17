import React, { Component } from 'react'

class Search extends Component {

  filterUpdate() {
    const val = this.myValue.value
    /* Store the changed input value that will be used by the ref */
  }

  render() {
    return (
      <header>
        <form>
          <input
            type="text"
            placeholder="Type to filter..."
            ref={ (value) => this.myValue = value }
            onChange={this.filterUpdate.bind(this)}
          />
          { /* ref: Using strings in ref attributes is deprecated, so we pass a callback function that saves the value in itself */ }
          { /* onChange: Bind the event listener to the function that stores the input value */ }
        </form>
      </header>
    );
  }
}

export default Search
