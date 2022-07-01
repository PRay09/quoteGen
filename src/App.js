import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react";
 
const App=()=>{
const [quot,setQuotes]=useState(''); 
const [q,setQ]=useState('');
const getQuote=()=>{
  const req = new XMLHttpRequest();
req.open("GET",'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',true);
req.send();
req.onload = function(){
  setQuotes(JSON.parse(req.responseText));
  let randomNum=Math.floor(Math.random()*quot.quotes.length);
  setQ(quot.quotes[randomNum]);
};
  };
  useEffect(() => {
    getQuote();
  },[]);
  return(
    <div className="container">
      <h1 className="quote">{q.quote}</h1>
      <h2 className="Author">-{q.author}</h2>
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
};
export default App;
