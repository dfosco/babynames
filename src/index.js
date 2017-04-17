import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize-css'
import App from './App'
import data from './data/data'

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
