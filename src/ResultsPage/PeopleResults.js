import StoreContext from '../StoreContext';
import React from 'react';

class PeopleResults extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ results }) => {
                    const list = results.map((result, idx) => {
                        return (
                            <li key={idx}>
                                <p><b>Name:</b> {result.name}</p>
                                <span><b>Eye color:</b> {result.eye_color}</span>
                                <span><b>Hair color:</b> {result.hair_color}</span>
                                <span><b>Gender:</b> {result.gender}</span>
                            </li>
                        )
                    })

                    return (
                        <div className='people-results'>
                            {list}
                        </div>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default PeopleResults;