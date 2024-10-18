import { useState,useEffect } from 'react'
import { PostComponent } from './post'

import './App.css'

function App() {
  const [posts,setPosts] = useState([])
  // const posts = [{
  //   Name : "Priyanshu",
  //   subtitle : '10k followeres',
  //   time : '3m ago',
  //   image : 'https://cdn-icons-png.flaticon.com/512/104/104499.png',
  //   description : "How to get hired in 2024?" 
  // }]

  const postComponents = posts.map(post => <PostComponent
    Name = {post.Name}
    subtitle = {post.subtitle}
    time = {post.time}
    image = {post.image}
    description = {post.description}
    />)


  function addPost(){
    setPosts([...posts,{
      Name : "Deswal",
      subtitle : '1k followeres',
      // time : '4m ago',
      image : 'https://cdn-icons-png.flaticon.com/512/104/104499.png',
      description : "How to get hired in 2025?" 
    }])
   


  }
  
  

  return <div style = {{backgroundColor : "#95a5a6",height : "100vh"}}>
    <button onClick = {addPost}>Add New Post</button>
    <div style = {{display : 'flex',justifyContent : 'center',padding: 10}}>
      <div>
        {postComponents}
     
      </div>

      

     
    
      


    </div>
      




  </div>
   

  
    
}








export default App
