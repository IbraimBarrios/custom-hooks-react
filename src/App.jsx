import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeadingTitle from './components/HeadingTitle'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <HeadingTitle title={"Sistema de progreso"}/>
      <div className="App center">
        <div>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default App
