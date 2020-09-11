import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import DummyData from './components/dummyData'

// console.log(DummyData)

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

// State: all characters
  const [allChars, setAllChars] = useState([])
  
//State: active character
  const[activeChar, setActiveChar] = useState(0)


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        console.log('Here are the axios results:')
        console.log(res)
        setAllChars(res.data.results[0])

        console.log('-------')
        console.log('All Chars:')
        console.log(allChars)
        console.log(res.data.results)
      })
      .catch(err => {
        console.log('-------There was a problem with the axios call:-------')
        console.log(err)
        debugger
      })
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
