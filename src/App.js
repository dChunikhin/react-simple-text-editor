import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";

import TextService from "./services/text.service";

class App extends Component {

    constructor(props) {
        super(props);
        this.changeContent = this.changeContent.bind(this);
        this.state = {
            content: ''
        };
    }

    async componentDidMount() {
        let content = await TextService.getMockText();
        this.setState({ content });
    }

    changeContent(content) {
        this.setState({ content })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel />
                    <FileZone onContentChange={this.changeContent} content={this.state.content} />
                </main>
            </div>
        );
    }
}

export default App;
