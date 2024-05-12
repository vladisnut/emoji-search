import '../../styles/components/ui/PopupMessage.css';
import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";

class PopupMessage extends Component {
    render() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={this.props.open}
                autoHideDuration={3000}
                onClose={this.props.onClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">
                    {`${this.props.selected ? 
                        this.props.selectedCodeType.fromEmoji(this.props.selected) : 'None'} 
                        скопирован!`}
                </span>}
                action={[
                    <div key="close"
                         className="snackbar-close-btn"
                         onClick={this.props.handleClose}
                    >&#x274C;</div>,
                ]}
            />
        );
    }
}

export default PopupMessage;