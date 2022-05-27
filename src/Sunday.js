import React, {createRef} from 'react';
class Sunday extends React.Component{
    constructor(){
        super()
        this.inputRef=createRef();
    }
    componentDidMount(){
        console.warn(this.inputRef.current.value="1000")
    }
    getVal(){
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor="yellow"
    }
    render(){
        return(
            <div>
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.getVal.bind(this)}>Check REF</button>
            </div>
        )
    }
}
export default Sunday;