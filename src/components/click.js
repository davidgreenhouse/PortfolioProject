import React, { Component } from "react";
import { Circle, Image } from "react-konva";

class PlanetClick extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicked : false
        }
    }

    imageClick = () => {
        console.log(Click);
        this.setState({
            clicked : true
        })
    }
    render () {
        return (
            <div>
                <img src="https://github.com/davidgreenhouse/movie-generator/settings" onClick={this.imageClick} />
                {
                 this.state.clicked &&
                 <div>Hello World</div>  
                } 
            </div>
        );
    }
}

export default PlanetClick;