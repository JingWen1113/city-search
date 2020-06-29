import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            AllZips:[],//will hold the zip codes returned from the city entered
            City: "",//holds the City that the user enters
            Exist: false//sees if zipCodes exists
        }
    }
    render(){
        const {City}=this.state.City
        console.log(this.state.City);
        return(
            <di>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={Zip}></input>
                    <input type="submit"></input>
                </form>
            </di>
        )
    }
}
export default Search;