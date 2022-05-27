import './my.css';
import style from './custom.module.css';
import React from 'react';
export default function Functional(props){
    const user= [
        {name: "Rishabh Sharma", email: "rishabh@gmail.com"},
        {name: "Rishu", email: "rishu@gmail.com"}
    ]
    const [count, setCount]= React.useState(0);
    React.useEffect(function handleData(){
        console.warn("Use Effect")
    }, [count]);// here in [count] if array is empty then useEffect only works on component mount.
    //if [any state] is entered then the hook works for that particular state only.
    //we can use more than one useEffect in a single component.
    //one useEffect can only be for the mounting phase with empty array, other with state condition
    //that is only used for the update lifecycle.
    return(
        <>
            <h1>This is function file {count}</h1>
            <h2 className="primary">This is {props.name}</h2>
            <h2 style={{backgroundColor:'orange'}}> This is second heading</h2>
            <h3 className={["primary", style.secondary]}>This is third heading</h3>
            <button
                onClick={
                    function updateCount() {
                        setCount(count + 1)
                    }}>
                Update Count</button>
            <table border="1">
                <tbody>
                <tr>
                    <td>Sno.</td>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
                {
                user.map((item, i) => 
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>

                )
                }
                </tbody>
            </table>
        </>
    )
}
