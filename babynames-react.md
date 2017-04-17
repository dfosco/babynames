# ReactJS Beginner Series

### Ways to create react components


#### Stateless Components

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
