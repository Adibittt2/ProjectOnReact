
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
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


function App(){

  // var count = 0;
 const state = useState();
  const [count,newfun] = useState(0);

  const myfun = () =>{
    return (
      newfun(count+1)
    )
  }

  
  return (

    <>
    
    <div>

      <h1> {count}</h1>

      <button onClick={myfun}>
        Click Here
      </button>

    </div>

    </>
  )
}
  

export default App;

