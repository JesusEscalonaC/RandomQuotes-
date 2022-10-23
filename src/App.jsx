import { useState } from 'react'
import './App.css'
import QuoteBox from './QuoteBox'
import Tweets from "./Tweets.json"

function App() {
  
 console.log(Tweets)
  return (
    <div className="App">
      <QuoteBox/>
    </div>
  )
}

export default App
