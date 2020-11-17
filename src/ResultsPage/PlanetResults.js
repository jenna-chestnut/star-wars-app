import StoreContext from '../StoreContext';
import React from 'react'

class PlanetResults extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ results }) => {
                    const list = results.map((result, idx) => {
                        return (
                            <li key={idx}>
                                <p><b>Name:</b> {result.name}</p>
                                <h4>Population: {result.population}</h4>
                                <span><b>Terrain:</b>  {result.terrain}</span>
                                <span><b>Climate:</b> {result.climate}</span>
                            </li>
                        )
                    })
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

export default PlanetResults;

//Dubrillion