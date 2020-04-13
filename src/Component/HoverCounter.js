import React from 'react';
import UpdatedComponent from './HOC/withCounter';

class HoverCounter extends React.Component{
    render(){
        console.log(this.props)
        const { count, incrementCount, name } = this.props;
        return(
            <div>
                <h2 onMouseOver={incrementCount}> {name} Hovered {count} times </h2>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter,3);