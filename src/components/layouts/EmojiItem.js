import '../../styles/components/layouts/EmojiItem.css';
import React from 'react'
import PropTypes from "prop-types";

export default class EmojiItem extends React.Component {

    static propTypes = {
        key: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
        onSelect: PropTypes.func.isRequired,
        onHover: PropTypes.func.isRequired,
    };

    handleHover = () => this.props.onHover(this.props.data)
    handleClick = () => this.props.onSelect(this.props.data)

    shouldComponentUpdate = (nextProps) => {
        return this.props.data.slug !== nextProps.data.slug
    }

    render() {
        const { data } = this.props
        return <li
            title="Нажмите, чтобы скопировать"
            className="emoji-item"
            onClick={this.handleClick}
            onMouseOver={this.handleHover}
            key={data.slug}>
            {data.character}
        </li>
    }
}