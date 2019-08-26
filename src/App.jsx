import React from 'react';
import Map from './Nearby.jsx';
import axios from 'axios';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nearby:[],
            activity:[]
        }
        this.getOne = this.getOne.bind(this);
    }

    componentDidMount(){
        this.getOne();
    }

    getOne(){
        axios.get(`/api/location/1`)
        .then((datas) =>{
            console.log(datas);
            this.setState({
                nearby:datas.data[0],
                activity:datas.data[1]
            })
        })
    }

    render(){
        return(
            <div>
                <Map nearby={this.state.nearby}/>
            </div>
        )
    }
}