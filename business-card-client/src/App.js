import React from 'react';
import MainNavBar from "./component/MainNavBar";

function App() {
    return (
        <div className="App">
            <MainNavBar/>
            <div id="scalemaxmin">HOME</div>
            <div style={{minHeight: 800 + 'em'}}/>
        </div>
    );
}

export default App;
