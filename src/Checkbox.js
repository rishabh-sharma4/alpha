import React, {Component} from "react";
class Checkbox extends Component{
    constructor(props){
        super(props)
        this.state={
            pokemon:"",
            tnc:""
        }
    }
    handleSubmit(event){
        event.preventDefault();
    }
    selectPokemon(event){
        this.setState({pokemon:event.target.value});
    }
    tncUpdate(event){
        this.setState({tnc:event.target.checked});
    }
    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                <select onChange={this.selectPokemon.bind(this)} defaultValue={'Charizard'}>
                    <option>Pikachu</option>
                    <option value="Charizard" >Charizard</option>
                    <option>Bulbsaur</option>
                </select>
                <br/>
                <input type="checkbox" onChange={this.tncUpdate.bind(this)}/><span>I agree</span>
                <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
export default Checkbox;