import React, {Component} from 'react';
import ParticlesBg from 'particles-bg'

class Example extends Component {
    render() {
        return (
            <div id="Example">
                <ParticlesBg color="#ff0000" num={200} type="cobweb" bg={true}/>
            </div>
        )
    }
}

Example.propTypes = {};

export default Example;