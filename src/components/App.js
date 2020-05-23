import React from 'react';
import CreateForm from './CreateForm';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language: "english" };
    onLanguageChange(language) {
        this.setState({ language });
    }
    render() {
        return (
            <div className="ui container">
                Select a language:
                <i className="flag us" onClick={()=>this.onLanguageChange("english")} />
                <i className="flag in" onClick={()=>this.onLanguageChange("hindi")} />
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={this.state.language}>
                        <CreateForm /> 
                    </LanguageContext.Provider>    
                </ColorContext.Provider>       
            </div>
        );
    }
}

export default App;