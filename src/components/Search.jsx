import React, { Component } from 'react';
import Display from './Display';
class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            AllZips:[],//will hold the zip codes returned from the city entered
            City: "",//holds the City that the user enters
            Exist: false//sees if zipCodes exists
        }
    }

    onChange = (event) =>{
        let userCity = event.target.value;
        let UppercasedCity= userCity.toUpperCase();
        console.log(UppercasedCity);
        this.setState({City : UppercasedCity})
    }

    onSubmit = async(event) => {
        event.preventDefault()
        if(this.state.City === "" || !this.state.City){
            return(alert('Need a city to search zips!'))
        }
        // if(!/^[a-zA-Z]+$/.test(this.state.City)){
    
        this.fetchZipCodes()
        console.log("calling fetch to api")

        // if(!this.state.Exist){
        //     return(alert('This is not a city!'))
        // }
    }

    fetchZipCodes = async() =>{
        try{
            this.state.Exist = true;
            let CityGiven = this.state.City;
            console.log('this is the City: '+ CityGiven);
            let response = await fetch('http://ctp-zip-api.herokuapp.com/city/'+CityGiven, { method: 'GET'} )
            console.log(response);
            const status = response.status
            let result = await response.json();
            console.log(result);
            if (status === 400 || status === 500) {
                console.log(result.error)
              } else {
                this.setState({AllZips:result, Exist:true})//updates array and makes it so if the address is real Exist is true. 
                console.log('array of state is updated')
            }

        }catch (error){
            console.log(error);
            return(alert('This is not a city!'));
        }
    }


    render(){
        const {City}=this.state.City
        console.log(this.state.City);
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={City}></input>
                    <input type="submit"></input>
                </form>
                <Display zipCodes = {this.state.AllZips}/>
            </div>
        )
    }
}
export default Search;