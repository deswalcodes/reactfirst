import { useEffect,useState } from "react";
import { useFetch } from "./hooks/useFetch";

export default function App(){
  const [currentPost ,setCurrentPost] =useState(1)
  const {finalData,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)


  



  return <div>
    <button onClick = {() => setCurrentPost(1)}>1</button>
    <button onClick = {() => setCurrentPost(2)}>2</button>
    <button onClick = {() => setCurrentPost(3)}>3</button>
    
    {!loading ? JSON.stringify(finalData) : <div> loading </div>}



  </div>
}