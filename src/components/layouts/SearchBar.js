import '../../styles/components/layouts/SearchBar.css';
import React, {Component} from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import { pluralize } from '../../utils/utils'
import {EmojiCode} from "../../actions/EmojiCode";
import PropTypes from "prop-types";

const styles = () => ({
    root: {
        flexDirection: 'row'
    },
    group: {
        flexDirection: 'row',
        margin: '0 0 0 0.6rem',
    },
});

const StyledRadio = withStyles({
    root: {
        padding: '0 0.2rem'
    }
})(Radio)

class SearchBar extends Component {

    static propTypes = {
        searchResults: PropTypes.array.isRequired,
        allResults: PropTypes.array.isRequired,
        onSearch: PropTypes.func.isRequired,
        selectedCodeType: PropTypes.object.isRequired,
        onCodeTypeSelect: PropTypes.func.isRequired,
    };

    render() {
        const handleChange = e => this.props.onCodeTypeSelect(e.target.value)

        return <div className="search-bar">
            <input
                className="search-input"
                autoFocus={true}
                onChange={this.props.onSearch}
                type="text"
                placeholder="Введите название смайлика..."
            />
            <div className="result-statuses">
                {`Найдено 
                ${this.props.searchResults.length} из ${this.props.allResults.length} 
                ${pluralize('смайлик', 'смайликов', this.props.searchResults.length)}`}
            </div>

            <div className="code-type-radio">
                <div className="tip">Тип копируемых данных:</div>
                <RadioGroup
                    className={this.props.classes.group}
                    aria-label="Code Type"
                    name="codeType"
                    value={this.props.selectedCodeType ? this.props.selectedCodeType.label : EmojiCode.CHARACTER.label}
                    onChange={handleChange}
                >
                    {Object.keys(EmojiCode).map(key =>
                        <FormControlLabel value={EmojiCode[key].value}
                                          label={EmojiCode[key].label}
                                          control={<StyledRadio/>} />
                    )}
                </RadioGroup>
            </div>
        </div>
    }
}

export default withStyles(styles)(SearchBar)