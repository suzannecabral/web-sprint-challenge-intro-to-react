import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Character from './components/Character'
// import DummyData from './components/dummyData'

// console.log(DummyData)

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // State: all characters
  const [allChars, setAllChars] = useState([])

  //State: active character
  // const[activeChar, setActiveChar] = useState(0)


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        console.log('Here are the axios results:')
        console.log(res.data.results)

        setAllChars(res.data.results)
        // console.log ('Changing all chars to test vals')
        
        // console.log('Test Characters: ----------')
        // console.log(allChars)

        
        //setAllChars is NOT WORKING
        // doesn't work with axios
        // doesn't work with dummy data
        // no error, is just undefined.

        //initializing allChars to DummyData.results works just fine

        //trying to use setAllChars after initializing with DummyData also doesn't work

        // console.log('-------')
        // console.log('All Chars:')
        // console.log(allChars)


        // // console.log(res.data.results)
        // setAllChars(['test1','test2'])
        // console.log(allChars)
      })
      .catch(err => {
        console.log('-------APP: There was a problem with the axios call:-------')
        console.log(err)
        debugger
      })
  }, [])

  
  console.log('AllChars outside UseEffect: -----')
  console.log(allChars)

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characterList">
        {
          allChars.map(
            (eachChar) => {
              return <Character 
                info = {eachChar}
                // key = {eachChar.index()}
              />
            }
          )
        }
      </div>
    </div>

  );
}

export default App;
