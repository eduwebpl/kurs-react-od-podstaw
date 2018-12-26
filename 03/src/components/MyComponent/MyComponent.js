import React from 'react';

class MyComponent extends React.Component {
    state = {
        text: '',
    }
    
    handleChange = (e) => {
        this.setState({ text: e.target.value.toUpperCase() });
    }
    
    render() {
        return (
            <>
                <input
                    placeholder="Your text" 
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

export default MyComponent;