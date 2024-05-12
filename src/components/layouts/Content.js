import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class Content extends Component {
    render() {
        return (
            <div className="main">
                <header className="app-header content hidden" style={{ position: 'static' }}>
                    <SearchBar
                        searchResults={this.props.results}
                        allResults={this.props.allResults}
                        onSearch={this.props.onSearch}
                    />
                </header>

                <SearchResults
                    results={this.props.results}
                    maxNumOfResults={this.props.maxNumOfResults}
                    onSelect={this.props.onSelect}
                    onHover={this.props.onHover}
                    onLoadMore={this.props.onLoadMore}
                />
            </div>
        );
    }
}

export default Content;