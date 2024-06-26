import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea 
                        className="input-text" 
                        value={this.state.text} 
                        onChange={this.handleInputChange} 
                    />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.text}</div>
                </div>                
            </div>
        );
    }
}

export default Editor;
