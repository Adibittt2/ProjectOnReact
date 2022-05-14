import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {add,sub,multi,div } from './myFolder/calculater';

ReactDOM.render(
<>
<App/>
{/* <ol>
  
  <li>This is add {add(6,7)}</li>
  <li>This is sub {sub(6,7)}</li>
  <li>This is multi {multi(6,7)}</li>
  <li>This is div {div(6,7)}</li>
  
</ol> */}

</>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
