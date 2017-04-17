import React, { Component } from 'react'

class NamesList extends Component {
  render() {
    const { data } = this.props

    // Always manipulate data outside of the return method
    const namesList = data.map(name => {
      return(
        <li key={name.id} className={name.sex}>{name.name}</li>
      )
    })

    return (
      <ul>
        {namesList}
      </ul>
    );
  }
}

export default NamesList