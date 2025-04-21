import React from 'react';

const Hero = (props) => {
    return (
        <div>
            <h1>{props.hudai['nameIs']}</h1>
            <h1>{props.hudai['age']}</h1>
            <h1>{props.hudai['language']}</h1>
            <h1>ami hero tei asii</h1>
        </div>
    );
};

export default Hero;