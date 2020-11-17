import StoreContext from '../StoreContext';
import React from 'react'

class SpeciesResults extends React.Component {

    render() {
        return (
            <StoreContext.Consumer>
                {({ results }) => {
                    const list = results.map((result, idx) => {
                        return (
                            <li key={idx}>
                                <p><b>Name:</b> {result.name}</p>
                                <h4>Designation: {result.designation}</h4>
                                <span><b>Language:</b>  {result.language}</span>
                        <span><b>Class:</b> {result.classification}</span>
                            </li>
                        )
                    }) || 'Content not found'

                    return (
                        <div className='planet-results'>
                            {list}
                        </div>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default SpeciesResults;