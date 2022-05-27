import React, {useRef} from 'react';
export default function Tuesday(){
    let nameRef=useRef(null);
    let passwordRef=useRef(null);
    function submitForm(e){
        e.preventDefault()
        console.warn("input 1 value is:", nameRef.current.value)
        console.warn("input 2 value is:", passwordRef.current.value)
        let email=document.getElementById("email").value;
        console.warn("input 3 value is", email);
    }
    return(
        <div>
            <h1>Controlled Component</h1>
            <form onSubmit={submitForm}>
                <input ref={nameRef} type="text"/><br/>
                <input ref={passwordRef}type="text"/><br/>
                <input id="email" type="text"/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}