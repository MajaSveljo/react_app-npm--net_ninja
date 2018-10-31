import React, { Component } from 'react';

class Ninjas extends Component{
    render() {
        //this is called destructuring and it's destructuring props
        //to their variables. they have to be the same name as the variable
        //in which we want to use them in
        const {name, age, belt} = this.props;
        return(
            <div className="ninja">
                <div>{name}</div>
                <div>{age}</div>
                <div>{belt}</div>
            </div>
        )
    }
}

export default Ninjas