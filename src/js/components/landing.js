import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Header from './header';


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'console.log(\'hello world\')'
        }
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
                    onChange={(editor, data, value) => {
                    }}
                />
            </React.Fragment>
        )
    }
}

export default Landing;
