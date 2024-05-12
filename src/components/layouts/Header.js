import '../../styles/components/layouts/Header.css';
import React, {Component} from 'react';
import SearchBar from "./SearchBar";

class Header extends Component {
    render() {
        return (
            <header className="app-header content">
                <SearchBar
                    searchResults={this.props.searchResults}
                    allResults={this.props.emojis}
                    onSearch={this.props.onSearch}
                    selectedCodeType={this.props.selectedCodeType}
                    onCodeTypeSelect={this.props.onCodeTypeSelect}
                />
            </header>
        );
    }
}

export default Header;