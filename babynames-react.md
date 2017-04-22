# React Notes

- You can't use refs in stateless components -- you have to use class components


### On State

- State is anything that represents the current status of the app's UI

- The `constructor` function is called automatically when an instance of its parent class is created. So it makes sense for state to go inside it! See [introduction to ES6 classes](http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/).

```javascript
// constructor adds props to component (class) when instantiated
constructor(props) {
  // super adds or overrides objects in the current props
  super(props)
  this.state = {
    filterText: ''
  }
}

// see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
```

 - You cannot update the state from the child component: you have to pass the new value back to the parent component, and the parent component will update the state

### Different ways to declare stateless components

```javascript
import React from 'react'

export default function Component() {
  return (
    <div></div>
  )
}
```

---

```javascript
import React, { /* PropTypes */ } from 'react'

const Credit = () => (
  <div>
  </div>  
)

export default Credit
```

---

```javascript
import React from 'react'

export default () => (
  //Component will be exported with the filename
  <div></div>
)
```
