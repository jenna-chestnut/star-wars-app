import React from 'react';
import './sweepingstyles/results.css';

class Results extends React.Component {
    render() {
        return (
        <div className='results'>
            {this.props.children}
        </div>
        )
    }
}

export default Results;