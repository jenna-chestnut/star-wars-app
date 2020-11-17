import React from 'react';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>STAR WARS SEARCH</h1>
            </header>
        )
    }
}

export default withRouter(Header);