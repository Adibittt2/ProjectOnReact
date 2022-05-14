
// import logo from './logo.svg';
import './App.css';

function App() {

  let time = new Date(2022,15,6,22);
  time = time.getHours();
  let wish = "";
  const sty = {};
  if(time>=0 && time<12){

    wish = "Good Morning";
    sty.color = "blue";
  }
  else if(time>=12 && time<20){
    wish = "Good Afternoon";
    sty.color = "Green"; 
  }
  else{
    wish = "Good Night";
    sty.color = "Yellow";
  }

  return (
    <div className="App">
     <h1>Hello Sir, <span style = {sty}>{wish}</span>{time}</h1>
    
    </div>
  );
}


// function add(a,b){
//   let sum = a+b;
//       return sum;
//   }
  
//   function sub(a,b){
//   let sub = a-b;
//       return sub;
  
//   }
  
  

export default App;

// export{add,sub};
