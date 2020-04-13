import React from 'react';
import MainNavBar from "./component/MainNavBar";
import Example from "./component/Example";
import ParticlesBg from "particles-bg";

function App() {
    return (
        <div className="App">
            <MainNavBar/>
            <ParticlesBg color="#ff0000" num={200} type="cobweb" bg={true} />
        </div>
    );
}

export default App;
