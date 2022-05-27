import React from 'react'
export default class Child1 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <>
            <h1>This is Child1</h1>
            <button onClick={this.props.check1.bind(this, "Rishabh")}>
                    Click Here</button>
            </>
        )
    }
}