import React, {useRef} from "react";
function Sunday1(){
    const inputRef=useRef(null);
    function controlInput() {
        console.warn("hello");
        inputRef.current.value="abc";
        inputRef.current.style.color="red";
        inputRef.current.focus();
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={controlInput}>Click</button>
        </>
        
    )
}
export default Sunday1;