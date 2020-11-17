import StoreContext from '../StoreContext';
import React from 'react'

class StarshipResults extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ results }) => {
                    const list = results.map((result, idx) => {
                        return (
                            <li key={idx}>
                                <p>{result.name}</p>
                                <h4>Model {result.model}</h4>
                                <span><b>Class:</b>  {result.starship_class}</span>
                                <span><b>Crew:</b>  {result.crew}</span>
                                <span><b>Passengers:</b> {result.passengers}</span>
                            </li>
                        )
                    })
                    return (
                        <div className='starship-results'>
                            {list}
                        </div>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default StarshipResults;