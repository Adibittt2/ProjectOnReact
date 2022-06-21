import React from "react";
import "./style.css";


function Card({menu}){
    
    return(
<> 
<section className="body">

{ menu.map((curElem) => {

          const { id, name, category,price, image, description } = curElem;


       return(
                <>

                <div className="card">
        
                <div className="card-header">
        
                <span style={{backgroundColor:"grey",color:"white", borderRadius:"50%"}}>{id}</span>
               </div>
              <div><img className="img" src={image}/>
              </div> 
        
              <div className="card-name">
                <h2>{name}</h2>
              </div>
        
              <div className="card-price">
                <h2>{price}</h2>
              </div>

              <div className="card-category">
                <h2>{category}</h2>
              </div>
        
              <div className="card-description">
                <p>{description}</p>
              </div>
        
              <div>
                <button className="card-button">Order Here</button>
              </div>
                       
                 </div>
            
                </>

            )
      
           
        })


    }
    </section>
    </> 
    )
}

export {Card};

 