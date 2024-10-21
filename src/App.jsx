import { useState,useRef,createContext, useContext } from "react";

const BulbContext = createContext();


function BulbProvider({children}){
  const [bulbOn , setBulbOn] = useState(true);

  return <BulbContext.Provider value = {{
    bulbOn : bulbOn,
    setBulbOn : setBulbOn
   }}>
    {children}
   </BulbContext.Provider>

}

export default function App(){
  const [bulbOn , setBulbOn] = useState(true);






  return <div>
   <BulbProvider>
     <LightBulb />
   </BulbProvider>
    
  </div>
}



function LightBulb(){
  

  return <div>
    <BulbState />
    <ToggleBulbState />

  </div>

}

function BulbState(){
  const {bulbOn} = useContext(BulbContext)
  


  return <div>
    {bulbOn ? <div> Bulb is On </div> : <div> Bulb is off </div>}

  </div>
}

function ToggleBulbState(){

  const {setBulbOn} = useContext(BulbContext)
  function changeState(){
    setBulbOn(currentState => !currentState)
  }



  return <div>
    <button onClick={changeState}>Toggle the Bulb</button>
  </div>
}