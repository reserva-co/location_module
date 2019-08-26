import React from 'react';
import NearbyEntry from './NearbyEntry.jsx';

export default class Nearby extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.nearby.map((n,i) => (
                    <NearbyEntry nearby={n} key={i}/>
                ))}
            </div>
        )
    }
}