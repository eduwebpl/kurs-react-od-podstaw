import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div className="wrapper">
        <h1 className="mainHeader">Hello World</h1>
        <h2 className="secondaryHeader">Hello eduweb</h2>
    </div>
);

ReactDOM.render(
    // rendered element
    <App />,
    // target
    document.getElementById('root')
);