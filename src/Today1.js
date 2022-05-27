import React from 'react';
export default class Today1 extends React.PureComponent{
    constructor(props){
        super(props)
        
    }

    render(){
        console.log("rerender");
        return(
            <h1>This is no {this.props.value}</h1>
        )
    }
}