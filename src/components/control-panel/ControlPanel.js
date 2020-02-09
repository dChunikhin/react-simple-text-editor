import React, { Component } from 'react';
import './ControlPanel.css';
import ActionButton from "./components/ActionButton";
import TextFormatterService from '../../services/text-formatter.service';
import Controls from "./components/Controls";

class ControlPanel extends Component {

    performAction(action) {
        TextFormatterService.formatSelectedText(action)
    }

    performReplace() {
        TextFormatterService.replaceSelectedTextWith('BABA')
    }

    render() {
        return (
            <div id="control-panel">
                <Controls onAction={this.performAction} />
                <ActionButton onAction={this.performReplace}>Replace</ActionButton>
            </div>
        );
    }
}

export default ControlPanel;
