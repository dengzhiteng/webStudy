// React 18
import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'

const root = ReactDOM.createRoot(
  document.querySelector('#root')
)

root.render(
  <App />
)

// setTimeout(() => {
//   root.unmount()
// }, 3000)