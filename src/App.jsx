import { useState } from "react";
import { useRef } from "react";




function App(){
  const [currentCount,setCurrentCount] = useState(0);
  const timer = useRef(null);

  function startClock(){
    
   
    if(timer.current === null){
      timer.current = setInterval(function(){
        setCurrentCount(c=>c+1)
  
      },1000);

      
      
    }
  
  }


  function stopClock(){
    clearInterval(timer.current)
    timer.current = null
  }


  return <div>
    {currentCount}

  <button onClick = {startClock}>Start the Clock</button>
  <button onClick = {stopClock}>Stop the clock</button>



  </div>
}




export default App