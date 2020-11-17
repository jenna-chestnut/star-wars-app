import React from 'react';
import './SearchInput.css';
import SearchTerm from './SearchTerm';
import SearchTypeSelect from './SearchTypeSelect';
import StoreContext from '../StoreContext';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchType: 'people'
        };
    }

    setSearch = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    resetSearchState = () => {
        this.setState({
            search: '',
            searchType: 'people'
        })
    }

    render() {
        const { search, searchType } = this.state;
        return (
            <StoreContext.Consumer>
                {({ fetchResults }) => {
                    return (
                        <div className="search-input">

                            <form onSubmit={(e) => {
                                this.resetSearchState();
                                fetchResults(e, search, searchType);
                            }}>

                                <SearchTerm search={this.state.search}
                                    handleChange={this.setSearch} />

                                <SearchTypeSelect handleChange={this.setSearch} />

                            </form>
                        </div>
                    )
                }}
            </StoreContext.Consumer>
        )
    }
}


export default SearchInput;