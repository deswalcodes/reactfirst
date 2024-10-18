


const style = { width : 200 ,backgroundColor : "white",borderRadius : 10,borderColor : "gray", borderWidth : 1,padding : 25}

export function PostComponent(props){



  return <div style = {style}>
    <div style = {{display : "flex"}}>
    <img src = {props.image} style = {{
      width  :20,
      height : 20,
      borderRadius : 20
    }}/>
    <div style ={{fontSize : 10,marginLeft :10 }}>
      <b>
        {props.Name}
      </b>
      <div>
        {props.subtitle} 
      </div>
     {props.time !== undefined ? <div style = {{display : 'flex'}}>
      <div>{props.time}</div>
      <img src = {'https://media.istockphoto.com/id/1267200399/vector/clock-vector-icon-isolated-on-white-background-outline-thin-line-clock-icon-for-website.jpg?s=612x612&w=0&k=20&c=JabL97PMMJ6k0PtY2BmUWMBI5kjNCnu5fnAoAwByrQQ='} style = {{width : 10,height : 10}}/>


     </div> : <div>sponsored</div>}
    </div>
    
  </div>
  <div style = {{fontSize : 12 }}>
    {props.description}
  </div>
  </div>
    
}