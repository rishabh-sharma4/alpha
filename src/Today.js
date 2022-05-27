import React from "react";
import Today1 from "./Today1";
export default class Today extends React.PureComponent{
    constructor(){
       super();
       this.state={count:1}; 
    }
    updateDay(){
        this.setState({count:this.state.count+1});
    }
    render(){
        console.log("render");
        return(
            <>
            <h1>Today is Day {this.state.count}</h1>
            <button onClick={
                //this.updateDay.bind(this)
               function updateD(){
                    //this.setState({count:this.state.count+1})}.bind(this)
                    this.setState({count:10})}.bind(this)// as this is pure comp, render will work 
                    //only when there is change in value of state/prop.
               
               }>Update Day</button>
            <Today1 value={this.state.count}/> 
            </>
        )
    }
}