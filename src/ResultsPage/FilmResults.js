import StoreContext from '../StoreContext';
import React from 'react'

class FilmResults extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ results }) => {
                    const list = results.map((result, idx) => {
                        return (
                            <li key={idx}>
                                <p><b>Title:</b> {result.title}</p>
                                <h4>Release date: {result.release_date}</h4>
                                <span><b>Directed by:</b> {result.director}</span>
                                <span><b>Produced by:</b> {result.producer}</span>
                            </li>
                        )
                    })

                    return (
                        <div className='film-results'>
                            {list}
                        </div>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default FilmResults;