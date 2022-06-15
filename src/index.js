import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CounterSimple from './components/counter-simple'
import CounterInput from './components/counter-input'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <CounterSimple min={3} max={7} />
    <CounterInput min={-5} max={50} />
  </React.StrictMode>
)
