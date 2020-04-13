import React from 'react';
import UpdatedComponent from './HOC/withCounter';

class ClickCounter extends React.Component{
    render(){
        console.log(this.props);
        const { count, incrementCount, name } = this.props;
        return(            
            <div>
                <button onClick={incrementCount}>{name} Clicked {count} times</button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCounter,2);