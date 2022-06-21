
// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
// import {add,sub,multi,div} from "./myFolder/calculater";
// import slotFun from "./myFolder/slotMachine";

// import {Item} from "./myFolder/Todo/Item";

// import {api} from "./myFolder/Accordion/api";
// import Accordion from './myFolder/Accordion/Accordion';


// import {Card} from "./Restaurant/Card";
import Restaurant from './Restaurant/Restaurant';


// function App() {

//   let time = new Date(2022,15,6,22);
//   time = time.getHours();
//   let wish = "";
//   const sty = {};
//   if(time>=0 && time<12){

//     wish = "Good Morning";
//     sty.color = "blue";
//   }
//   else if(time>=12 && time<20){
//     wish = "Good Afternoon";
//     sty.color = "Green"; 
//   }
//   else{
//     wish = "Good Night";
//     sty.color = "Yellow";
//   }

//   return (
//     <div className="App">
//      <h1>Hello Sir, <span style = {sty}>{wish}</span>{time}</h1>
    
//     </div>
//   );
// }


// calculator app starts


// function App(){

//   return(
//   <ol>
  
//   <li>This is add {add(6,7)}</li>
//   <li>This is sub {sub(6,7)}</li>
//   <li>This is multi {multi(6,7)}</li>
//   <li>This is div {div(6,7)}</li>
  
//   </ol>
  
//   ); 

// }


// function App(){

//   return(
//  <>
//   <div>
//     <h1>{slotFun(3,5)}</h1>

//     <h1>skfsj</h1>
//   </div>
//   </>
//   ); 

// }



// function App(){

// //  var count = 0;
// //  const state = useState();
// var time = new Date().toLocaleTimeString();
// var date = new Date().toLocaleDateString();
// // var hr = date.getHours();
// // var min = date.getMinutes();
// // var sec = date.getSeconds();
// // var ampm = date.toLocaleTimeString();
// // var res = hr + ":" + min + ":"+ sec;


// var res = time + "\n" + date;

//   const [count,newfun] = useState(res);

//   // setInterval(myfun,1000);
//   const myfun = () =>{
//     return (
//       newfun(res)
//     )
//   }


//   return (

//     <>
    
//     <div>

//       <h1> {count}</h1>

//       <button onClick={myfun}>
//         Click Here
//       </button>

//     </div>

//     </>
//   )
// }

// function App(){

//   var time = new Date().toLocaleTimeString();

//   const [primary,secondary] = useState(time);

//   const fun = () =>{

//     return(
//       secondary(time)
//     )
//   }

//   setInterval(fun,1000);

//   return(

//     <>
  
//       <h1>{primary}</h1>
    
//     </>

//   )

// }
  

// function App(){

//   const [name,name1] = useState("");
//   const [val,val_fun] = useState();

//   const fun1 = (event) =>{
//     return(

//       name1(event.target.value)

//       // name1({name})

//     )

//     }

//   const fun2 = () => {  
//     return(
//       val_fun(name)
//     )
//   }

//   return(
//     <>
//     <h1>Hello {val}</h1>
//     <input type="text" 
//     placeholder= "Put name here" 
//     onChange ={fun1} 
//     value = {name} />
//     <button onClick = {fun2}>Click Here</button>
//     </>
//   )
// }

 
// function App(){

//   const [data,data_fun] = useState({
//     firstName: "",
//     lastName: ""
//   });

//   const [show,show_fun] = useState({
//     firstName: "",
//     lastName: ""
//   });

//   const fun1 = (event)=>{

//     const name = event.target.name;
//     const value = event.target.value;
    
//       data_fun((prevalue) =>{

//         console.log(prevalue);
//     // console.log(prevalue.lastName);
   
//         if(name == "fName"){
//           return(
//            {
//              firstName:value,
//              lastName: prevalue.lastName
//            }
//           )}
//          else if(name == "lName"){
//             return(
//              {
//                firstName:prevalue.firstName,
//                lastName: value
//              }
//             )}
//       })
    
//   }

//   const fun2 = () => {

//     return(
//       show_fun(data)
//     )
//   }


//   return(

//     <>
//     <h1>Hello {show.firstName} {show.lastName}</h1>
   
//     <input type="text" placeholder="Enter Name" name = "fName"
//     onChange = {fun1} value = {data.firstName}/>

//      <input type="text" placeholder="Enter Name" name = "lName"
//     onChange = {fun1} value = {data.lastName}/>

//     <button onClick={fun2}>Click Here</button>

//     </>

    
//   )


// }


// function App(){

//   const [input,setInput] = useState("");
//   const [btnInput,setBtnInput] = useState([]);

//   const fun1 = (event) =>{

//     setInput(event.target.value)
//   }

//   const clickButton = ()=>{

//     setBtnInput((oldValue)=>{
//       return [input,...oldValue]
//     })

//     setInput("");
//   }

//   const Delete = (id) => {
//     // console.log("sfjkskf" + "deleted")
//     return (setBtnInput(btnInput.filter((item,i,array)=>{
//         return i !=id
//     })))
     
// }
//   return <>
  
//   <h1>Todo List</h1>

//   <input type="text" placeholder = "Enter Value" value = {input} onChange = {fun1}/>

//   <button onClick = {clickButton}>Add</button>

//   <ol>{btnInput.map( (val,ind,arr) => {
//     return <Item list = {val} id = {ind} onDelete = {Delete}/>
//   })}

//   </ol>



//  {/* <ol><Item list = {btnInput}/></ol> */}
//   </> ;
// }



// function App(){

// const [input,setInput]  = useState({
//   fName:"",
//   lName:"",
//   phone:"",
//   address:"",

// })

// const [submit,setSubmit]  = useState({
//   fName:"",
//   lName:"",
//   phone:"",
//   address:"",

// })


// const inputFun = (event)=>{

//   // const name = event.target.name;
//   // const value = event.target.value;

//   const {placeholder,value} = event.target;

//   console.log(event.target.value);

  
//     setInput((prevalue)=>{

//       // console.log(prevalue);
//         // if(name == "firstName"){
//         //             return(
//         //              {
//         //                fName:value,
//         //                lName: prevalue.lName
//         //              }
//         //             )}
//         //             else if(name == "lastName"){
//         //               return(
//         //                {
//         //                  lName:value,
//         //                  fName: prevalue.fName
//         //                }
//         //               )}
      
        


//         return{
//           ...prevalue,
//           [placeholder] : value,
//           // fName:value

// // see line 207 or near;
//           // yahan par input object ke place pe  placeholder h and 
//           // placeholder name should be same as object name;

//         };
      
//     })
  
// }

// const submitFun =()=>{

//   return(
//     setSubmit(input)
//   )
// }


// return(
//   <>
//   <h1>{submit.fName}  {submit.lName} {submit.phone} {submit.address}</h1>
 
//   <input 
//    type="text"
//    placeholder="fName"
//   //  name = "fName"
//    onChange={inputFun}
//    value={input.fName}/>

// <input 
//    type="text"
//    placeholder="lName"
//   //  name = "lName"
//    onChange={inputFun}
//    value={input.lName}/>

// <input 
//    type="text"
//    placeholder="phone"
//   //  name = "phone"
//    onChange={inputFun}
//    value={input.phone}/>

// <input 
//    type="text"
//    placeholder="address"
//   //  name = "address"
//    onChange={inputFun}
//    value={input.address}/>

//     <button onClick={submitFun}>Submit</button>
//   </>
// )

// }



// function App(){

//   const [data,setData] = useState(api);

  
  

// return(

// <>
// {data.map((val)=>{
// return(
//   <Accordion key = {val.id} id = {val.id} ques = {val.q} ans = {val.a}/>
// )
// })
// }

// {/* <Accordion/> */}

// {/* <div className='main'>

//   <div> */}
//   {/* {
//     data.map((val)=>{
// return(
//     <Accordion/>
// )
//     })
//     } */}
    

//     {/* <h1> {data.map((val)=>{

//       return val.q
// })}</h1> */}


//   {/* </div>
// </div> */}
// </>

// )

// }


function App(){



  return(

    <>


    <Restaurant/>
    </>
  )
}

export default App;

