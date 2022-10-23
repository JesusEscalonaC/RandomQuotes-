import React from 'react';
import Button from './Button';
import Tweets from "./Tweets.json"
import { useState } from 'react';

const QuoteBox = () => {
  
    const [index, setIndex] = useState((Math.floor(Math.random() * Tweets.length)))


  const changeTweets = () =>{
    const randomIndex = (Math.floor(Math.random() * Tweets.length))

    setIndex(randomIndex);
  }

  const colors = ["#6a6a6a", "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#B95EC2", "#F9F871", "#FFCD5E", "#FF837E", "#00C89E", "#009879", "#E9003D", "#DF9693"];
  const randomColors = Math.floor(Math.random()* colors.length)
  document.body.style = `background: ${colors[randomColors]}`;
  let colorChange = `${colors[randomColors]}`;
    return (
        
        <div className = "container">
            <h2 style={{color:`${colors[randomColors]}`}} className= "quote"><i id="leftQuote" className="fa-sharp fa-solid fa-quote-left"></i>  {Tweets[index].quote}</h2>
            <div className= "right">
            <h2 style={{color:`${colors[randomColors]}`}} className= "autor">{Tweets[index].author}</h2>
            <Button click= {changeTweets} color = {colorChange}/>
            </div>
            
        </div>
    );
};

export default QuoteBox;