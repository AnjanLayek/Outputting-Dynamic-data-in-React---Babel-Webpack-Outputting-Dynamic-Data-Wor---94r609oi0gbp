import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
const onChange=(e)=>{
  console.log(e);
}
const onClick = (e) =>{
  let text = document.getElementById('input').value;
  document.getElementById('text').innerHTML = `Hello my name is ${text} and I study at Newton School`
}
  return (
    <div id="main">
      <input id='input' onChange={onChange}></input>
      <button id='button' onClick={onClick}>Click</button>
      <p id='text'> Hello my name is ____ and I study at Newton School</p>
    </div>
  )
}


export default App;
