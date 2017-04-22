import React, { Component } from 'react'

export default ({data, filterText, addFavourite}) => {
  // Always manipulate data outside of the return method

  // Filter goes through every item in the array and filters according to parameters
  const namesList = data
    .filter(name => {
      // Remove names that do no match current filter text (-1 is not )
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })
    .map(name => {
      return(
        <li
          key={name.id}
          className={`${name.sex} unselectable`}
          onClick={() => addFavourite(name.id)}
        >
          {name.name}
        </li>
      )
    })

  return (
    <div>
      <ul>
        {namesList}
      </ul>
    </div>
  );
}
