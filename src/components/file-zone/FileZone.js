import React, { Component } from 'react';
import './FileZone.css';
import ContentEditable from 'react-contenteditable';
import Tooltip from "./components/Tooltip/Tooltip";
import SynonymList from "./components/SynonymList/SynonymList";
import Controls from "../control-panel/components/Controls";
import DictionaryService from '../../services/dictionary.service';
import TextFormatterService from '../../services/text-formatter.service';

class FileZone extends Component {

    constructor(props) {
        super(props);
        this.onSelectedWord = this.onSelectedWord.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedWord: {
                content: '',
                synonyms: []
            }
        }
    }

    async onSelectedWord() {
        const selectedWord = window.getSelection().toString();
        const synonyms = await DictionaryService.getSynonymsForWord(selectedWord, 10);

        this.setState({
            selectedWord: {
                content: selectedWord,
                synonyms,
            }
        })
    }

    performReplace(synonym) {
        TextFormatterService.replaceSelectedTextWith(synonym)
    }

    performAction(action) {
        TextFormatterService.formatSelectedText(action);
    }

    handleChange(event) {
        this.props.onContentChange(event.target.value);
    }

    render() {
        return (
            <div id="file-zone">
                <div id="file" >
                    {this.state.selectedWord.content &&
                        <Tooltip>
                            <Controls onAction={this.performAction} />
                            <SynonymList items={this.state.selectedWord.synonyms} onSelectedSynonym={this.performReplace} />
                        </Tooltip>
                    }
                    <ContentEditable html={this.props.content} onSelect={this.onSelectedWord} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default FileZone;
