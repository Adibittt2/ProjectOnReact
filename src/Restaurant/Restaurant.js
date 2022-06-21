import React from "react";
import {Card} from "./Card";
import {Api} from "./Api.js";
import { useState } from "react";
import { Navbar } from "./Navbar";



function Restaurant(){


    const [data,setData] = useState(Api);


    const cate = Api.map((el)=>{
    
        return(el.category)
    })
    // console.log(cate);

    const uniquelist = ["All",...new Set(cate)]


    const filter =((sel)=>{

      
        if(sel === "All"){

          const allData =  Api.map((elem)=>{
               return  elem;
            
            })

            setData(allData);
     
        }
        else{
           const updatedlist = Api.filter((elem)=>{

                return elem.category === sel;
            })

            setData(updatedlist);
        }

    })

    // console.log(uniquelist);
   
    return(
        <>
        
        <Navbar catelist = {uniquelist} fil ={filter}/>

            <Card menu = {data}/>

          


        
        </>
    )
}

export default Restaurant;