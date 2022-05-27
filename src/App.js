import './App.css';
import Student from './Student';
import Students from './Students';
import Inputs from './Inputs';
import Checkbox from './Checkbox';
import React, {useState} from 'react';
import User from './User';
import Functional from './Functional';
import Child1 from './Child1';
import Today from './Today';
import Friday from './Friday';
import Sunday from './Sunday';
import Sunday1 from './Sunday1';
import Monday from './Monday';
import {useRef} from 'react';
import Tuesday from './Tuesday';
import Thursday from './Thursday';
import Higher from './Higher';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'


function App() {
  const ab=[1,4,6,66];
  const[name,setName]= useState("Rishu");
  let inputRef= useRef(null);
  
  function userData(data){
    alert(data);
  }
  function letscheck(name){
    alert(`Hello ${name}`);
  }
  function updateInput(){
    inputRef.current.value="1000";
    inputRef.current.style.color="red";
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        
       <Student name={name} district="JAMMU"/> 
       <button onClick={()=>setName("Rishabh Sharma")}>Click</button>
       <Students name={name}/>
       <Inputs numbers={ab}>
          <h3>We can toggle display by clicking</h3>
       </Inputs>
       <Checkbox/>
       <User info={userData}/>
       <Functional name="MY NAME: Rishabh"/>
       <Child1 check1={letscheck}/>
       <Today/>
       <Friday/>
       <Sunday/>
       <Sunday1/>
       <Monday ref={inputRef}/>
       <button onClick={updateInput}>HELLO</button>
       <Tuesday/>
       <Higher comp={Thursday}/>
      </header>
      <About/>
      </Router>
    </div>
  );
}
function About(){
  return(
    <h3>This is about page.</h3>
  )

}

export default App;
