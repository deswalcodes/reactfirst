import { useState,useRef } from "react";


export default function App(){
  const [bulbOn , setBulbOn] = useState(true);






  return <div>
    <LightBulb bulbOn = {bulbOn} setBulbOn = {setBulbOn}/>
  </div>
}



function LightBulb(bulbOn,setBulbOn){
  

  return <div>
    <BulbState bulbOn ={bulbOn}/>
    <ToggleBulbState setBulbOn = {setBulbOn} />

  </div>

}

function BulbState(props){
  


  return <div>
    {props.bulbOn ? <div> Bulb is On </div> : <div> Bulb is off </div>}

  </div>
}

function ToggleBulbState(props){
  function changeState(){
    props.setBulbOn(currentState => !currentState)
  }



  return <div>
    <button onClick={changeState}>Toggle the Bulb</button>
  </div>
}