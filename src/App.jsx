
import './App.css'
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'



function App(){



return <>


<BrowserRouter>

<Routes>
  <Route path ='/' element = {<Layout/>}>
   <Route path = "/neet/class11" element = {<Class11Program/>} />
   <Route path = "/neet/class12" element = {<Class12Program/>} />
   <Route path = "/" element = {<Landing/>} />
   <Route path = '*' element = {<Error/>}/>


  </Route>
  
</Routes>
</BrowserRouter>





</>
}
function Layout(){




  return <div>
     <Link to = "/">Allen</Link> 

     <Link to = "/neet/class11">Class 11</Link>
|
     <Link to = "/neet/class12">Class 12</Link>

    <Outlet/>
    Contact Us
  </div>
}



function Error(){

  return <div>
    Sorry page not found
  </div>

}



function Landing(){


  return <div>

    Welcome to Allen
  </div>
}






function Class11Program(){




  return <div>
    Class 11 NEET

  </div>


}

function Class12Program(){



  return <div>
    Class 12 NEET


  </div>



}


export default App