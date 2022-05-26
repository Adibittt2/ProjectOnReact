import React, { useState } from "react";

const Accordion = (props) => {

        const [show,getShow] = useState(false);
    return(

       <div style={{paddingLeft:"10px", paddingTop:"10px", width:"fill"}}>
       <div style = {{display: "flex", gap: "20px",background: "#b3b3", color:"#000000"}}>
        
       <h1 onClick = {()=>
           getShow(!show)
       } ><span style={{background:"#ffffff", borderRadius:"100%",margin:"5px",size:"20px"}} >
          {show ? "-": "+"}</span>
           {props.id}</h1>
       <h1>{props.ques}</h1></div>
       <div>{ show ?
       <p style={{paddingLeft:"30px", background: "#41054c", color:"#ffffff"}}>{props.ans}</p> : ""}
       </div>
       </div>
    )

}

export default Accordion;