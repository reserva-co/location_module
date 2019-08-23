import React from 'react';
import Map from './Map.jsx';
import axios from 'axios';

export default class App extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <Map />
            </div>
        )
    }
}