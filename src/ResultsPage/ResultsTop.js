import React from 'react';
import { withRouter } from 'react-router-dom';

class ResultsTop extends React.Component {
    render() {
        return (
                <h2 onClick={() => this.props.history.push(`/`)}>Click here to go back.</h2>
        )
    }
}

export default withRouter(ResultsTop);