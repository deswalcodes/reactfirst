import { useEffect,useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

export default function App(){
  const [state,setState] = useState(0);
  const prev = usePrev(state);
  return <>
  <p>{state}</p>
  <button onClick ={() => setState(current => current +1)}>Click me</button>
  <p>The previous value was {prev}</p>

  
  
  
  
  
  
  </>

 

  



  return <div>
   



  </div>
}