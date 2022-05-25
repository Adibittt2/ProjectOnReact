
import React from "react";


const Item =(props)=> {


    return(
        <div style = {{display:"flex",gap:"30px",margin:"10px",padding:"10px"}}>
        <li style = {{maxwidth:"20px"}}>{props.list}</li>
        
        <button onClick = {() =>{props.onDelete(props.id)}}> Delete</button>

        </div>
        
    )
}



export {Item};