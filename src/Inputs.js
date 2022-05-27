import React,{useState} from "react";
const Inputs=(props)=>{
    const totalNumbers=[...props.numbers, 109, 34];
    const[alldata,setAlldata]=useState(null);
    const[print,setPrint]=useState(false);
    const update=(ev)=>{
        setAlldata(ev.target.value);
        setPrint(false);
    }
    function showToggle(){
        setPrint(!print);
    }
    return(
        <>
        {print ?<h1>{alldata}</h1> :null}
        <input type="text" onChange={update}/>
        <button onClick={showToggle}>Show/Hide</button>
        {props.children}<br/>
        {totalNumbers.toString()}
        </>
    )
}
export default Inputs;