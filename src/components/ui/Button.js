import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button className="my-button" onClick={this.props.onLoadMore}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;