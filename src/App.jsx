import { useRef } from "react"


function useDebounce(originalFn){
  const currentClock = useRef()

  function reset(){
    clearTimeout(currentClock.current)
    currentClock.current = setTimeout(originalFn,200)


  }
    

  
  return reset


  


  

}

export default function App(){


  function sendData(){
    fetch("https://jsonplaceholder.typicode/todos/1")
  }

  const debouncedFun = useDebounce(sendData)


  return <div>
    <input type ="text" onChange={debouncedFun}></input>
  </div>


}