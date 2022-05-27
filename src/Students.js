import React from 'react';
export default class Student extends React.Component{
    constructor(){
        super()
        this.state={phone: 1001};
    }
    render(){
        return(
            <>
            <h1 style={{color:"orange"}}>My name is {this.props.name}</h1>
            <h1>{this.state.phone}</h1>
            <button onClick={()=>{this.setState({phone:this.state.phone+1})}}>Click</button>
            </>
        )
    }
}