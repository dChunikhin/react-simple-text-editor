import React, { Component } from 'react';
import './ControlPanel.css';
import TextFormatterService from '../../services/text-formatter.service';
import Controls from "./components/Controls";

class ControlPanel extends Component {

    performAction(action) {
        TextFormatterService.formatSelectedText(action)
    }

    render() {
        return (
            <div id="control-panel">
                <Controls onAction={this.performAction} />
            </div>
        );
    }
}

export default ControlPanel;
