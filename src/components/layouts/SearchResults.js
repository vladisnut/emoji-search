import '../../styles/components/layouts/SearchResults.css';
import React, {Component} from 'react'
import EmojiItem from './EmojiItem'
import PropTypes from "prop-types";
import Loading from "../ui/Loading";
import Button from "../ui/Button";

class SearchResults extends Component {

    static propTypes = {
        results: PropTypes.array.isRequired,
        maxNumOfResults: PropTypes.number.isRequired,
        onSelect: PropTypes.func.isRequired,
        onHover: PropTypes.func.isRequired,
        onLoadMore: PropTypes.func.isRequired,
    };

    render() {
        return <ul className="search-results" style={{ display: 'flex' }}>
            {this.props.results.slice(0, this.props.maxNumOfResults).map(result =>
                <EmojiItem
                    key={result.slug}
                    data={result}
                    onSelect={this.props.onSelect}
                    onHover={this.props.onHover}
                />
            )}
            {this.props.maxNumOfResults < this.props.results.length &&
                <Button text="Показать больше"
                        onLoadMore={this.props.onLoadMore}
                />
            }
            {!this.props.results.length &&
                <Loading />
            }
        </ul>
    }
}

export default SearchResults