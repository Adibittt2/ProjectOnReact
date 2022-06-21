import React from "react";
import "./style.css"


function Navbar({catelist, fil}){

    return(
        <div className="btn-group">


        <>
    
       {catelist.map((cat)=>{

            return(
                <>
                 <button onClick={()=>{fil(cat)}} >{cat}</button>
                </>
            )

       })}
           
        
        </>

        </div>
    )
}

export {Navbar};