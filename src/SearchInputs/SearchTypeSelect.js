import React from 'react';

class SearchTypeSelect extends React.Component {
    render() {
        const { handleChange } = this.props;
        return (
            <>
                <label htmlFor='search-type'>Search For:</label>
                <select id='search-type'
                    onChange={(e) => handleChange('searchType', e.target.value)}>
                    <option value='people'>People</option>
                    <option value='films'>Films</option>
                    <option value='starships'>Starships</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='species'>Species</option>
                    <option value='planets'>Planets</option>
                </select>
            </>
        )
    }
}

export default SearchTypeSelect;