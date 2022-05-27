import {useState} from "react";
const Thursday=()=>{
    const[count,setCount]=useState(0);
    function updateVal(){
        setCount(count+1);
    }
    return(
        <>
            <h3>{count}</h3>
            <button onClick={updateVal}>Update</button>
        </>
    )
}
export default Thursday;