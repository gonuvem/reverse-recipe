import logo from '@assets/reverse-recipe-logo.svg'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Reverse Recipe!</p>
      </header>
      <footer>
        <a href='https://www.vecteezy.com/free-vector/food-pattern'>
          Food Pattern Vectors by Vecteezy
        </a>
      </footer>
    </div>
  )
}

export default App
