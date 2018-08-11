import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';
import Header from './header';


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'console.log(\'hello world\')'
        }
    }

    updateCode = (event) => {
        this.setState(() => ({
            code: event.value
        }));
    }

    render() {
        const options = {
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
        }
        return (
            <React.Fragment>
                {
                    // TODO: remaining components, scratchpad, button.
                    /*
                        scratchpad: half CodeMirror, half Execution results
                        button: button to run functions entered in scratch pad
                                and send them to execution results component.
                    */
                }
                <Header />
                <CodeMirror
                    value={this.state.code}
                    options={options}
                    onBeforeChange={(editor, data, value) => {
                        this.setState({value});
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />
            </React.Fragment>
        )
    }
}

export default Landing;
