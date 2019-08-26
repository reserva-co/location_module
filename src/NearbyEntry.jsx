import React from 'react';

export default class NearbyEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            picNum:0,
        }
    }

    componentDidMount(){
        let num = Math.floor(Math.random()*101+1);
        this.setState({
            picNum:num,
        })
    }

    render(){
        return(
            <ul>
                <li><img src={`https://feclocation.s3-us-west-1.amazonaws.com/nearby/${this.state.picNum}.jpg`} height="150" width="150" /></li>
                <li>{this.props.nearby.house_type}</li>
                <li>{this.props.nearby.location}</li>
                <li>{this.props.nearby.title}</li>
                <li>{this.props.nearby.price}</li>
                <li>{this.props.nearby.rate}</li>
            </ul>
        )
    }
}