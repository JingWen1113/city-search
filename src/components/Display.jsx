import React, { Component } from 'react';

class Display extends Component{
    render(){

        const zips = this.props.zipCodes.map(zip => 
            <li>{zip}</li>) //creates an array where each zip code from the api is now part of a list

        return(
            <ul>{zips}</ul> 
        ) //displays each zipcode in an unordered list
    }
}

export default Display;