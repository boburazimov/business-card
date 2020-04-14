import React from 'react';
import MainNavBar from "./component/MainNavBar";
import Example from "./component/Example";
import ParticlesBg from "particles-bg";

function App() {
    return (
        <div className="App">
            <MainNavBar/>
            <header>

            <div className="particle">
              <ParticlesBg class="particleBg" color="#5a5a5a" num={100} type="cobweb" bg={true} />
            </div>
            </header>
        </div>
    );
}

export default App;
