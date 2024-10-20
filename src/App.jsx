import { useState,useEffect } from 'react'
import { PostComponent } from './post'
import React from 'react'

import './App.css'

function App(){





  return <div>
    <ErrorBoundary>
    <Card1/>
    </ErrorBoundary>
   
    <Card2/>



  </div>
}


class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <h1 style = {{background : "red",borderRadius:20,padding :20,margin : 20}}>Something went wrong.</h1>;
      }

      return this.props.children; 
  }
}

function Card1(){

  throw new Error("Error while rendering")




  return <div style = {{background : 'red',borderRadius : 20,padding :20}}>
    hii

  </div>



}


function Card2(){


return <div style = {{background : "red",borderRadius:20,padding :20,margin : 20}}>
  hello

</div>

}























// function App() {
//   const [posts,setPosts] = useState([])
//   // const posts = [{
//   //   Name : "Priyanshu",
//   //   subtitle : '10k followeres',
//   //   time : '3m ago',
//   //   image : 'https://cdn-icons-png.flaticon.com/512/104/104499.png',
//   //   description : "How to get hired in 2024?" 
//   // }]

//   const postComponents = posts.map(post => <PostComponent
//     Name = {post.Name}
//     subtitle = {post.subtitle}
//     time = {post.time}
//     image = {post.image}
//     description = {post.description}
//     />)


//   function addPost(){
//     setPosts([...posts,{
//       Name : "Deswal",
//       subtitle : '1k followeres',
//       // time : '4m ago',
//       image : 'https://cdn-icons-png.flaticon.com/512/104/104499.png',
//       description : "How to get hired in 2025?" 
//     }])
   


//   }
  
  

//   return <div style = {{backgroundColor : "#95a5a6",height : "100vh"}}>
//     <button onClick = {addPost}>Add New Post</button>
//     <div style = {{display : 'flex',justifyContent : 'center',padding: 10}}>
//       <div>
//         {postComponents}
     
//       </div>

      

     
    
      


//     </div>
      




//   </div>
   

  
    
// }








export default App
