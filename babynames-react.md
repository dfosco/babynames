# ReactJS Beginner Series

- You can't use refs in stateless components -- you have to use classes

#### ways to declare stateless components

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
