import '../styles/components/App.css';
import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import { withStyles } from '@material-ui/core/styles'
import copy from 'clipboard-copy'
import EmojiService from "../actions/EmojiService";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import PopupMessage from "./ui/PopupMessage";
import {EmojiCode} from "../actions/EmojiCode";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emojis: [],
            searchTerm: '',
            selected: null,
            hover: null,
            maxNumOfResults: 300,
            open: false,
            selectedCodeType: EmojiCode.CHARACTER
        }

        EmojiService.getAll().then((response) => {
            this.setState({
                emojis: response.data
            })
        })
    }

    updateSearchTerm = debounce(event => {
        this.setState({
            maxNumOfResults: 300,
            searchTerm: event.target.value
        })
    }, 30)

    handleChange = event => {
        event.persist()
        this.updateSearchTerm(event)
    }

    handleSelect = emoji => {
        copy(this.state.selectedCodeType.fromEmoji(emoji)).then(() =>
            this.setState({
                open: true
            })
        )

        this.setState({
            selected: emoji
        })
    }

    handleHover = emoji => {
        this.setState({
            hover: emoji
        })
    }

    handleLoadMore = () => {
        this.setState(prevState => ({
            maxNumOfResults: prevState.maxNumOfResults + 200
        }))
    }

    handleCodeTypeSelect = codeType => {
        if (codeType) {
            this.setState({
                selectedCodeType: codeType
            })
        }
    }

    handleClose = () => this.setState({ open: false })

    filterEmojis = (emojis, searchTerm) =>
        emojis.filter(e =>
            e.unicodeName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        )

    render() {
        const { emojis, searchTerm, selected, selectedCodeType, maxNumOfResults, open } = this.state
        const results = this.filterEmojis(emojis, searchTerm)

        return (
            <div className="App">
                <Header emojis={emojis}
                        searchResults={results}
                        onSearch={this.handleChange}
                        selectedCodeType={selectedCodeType}
                        onCodeTypeSelect={this.handleCodeTypeSelect}
                />
                <Content results={results}
                         allResults={emojis}
                         maxNumOfResults={maxNumOfResults}
                         onSelect={this.handleSelect}
                         onSearch={this.handleChange}
                         onHover={this.handleHover}
                         onLoadMore={this.handleLoadMore}
                />
                <PopupMessage
                    selectedCodeType={selectedCodeType}
                    selected={selected}
                    open={open}
                    onClose={this.handleClose}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
})

export default withStyles(styles)(App);
