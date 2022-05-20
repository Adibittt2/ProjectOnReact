
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
// import {add,sub,multi,div} from "./myFolder/calculater";
import slotFun from "./myFolder/slotMachine";

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
  

function App(){

  const [name,name1] = useState("");
  const [val,val_fun] = useState();

  const fun1 = (event) =>{
    return(
      name1(event.target.value)

      // name1({name})
    )
    
    }

  const fun2 = () => {  
    return(
      val_fun(name)
    )
  }

  return(
    <>
    <h1>Hello {val}</h1>
    <input type="text" 
    placeholder= "Put name here" 
    onChange ={fun1} 
    value = {name} />
    <button onClick = {fun2}>Click Here</button>
    </>
  )
}
export default App;

