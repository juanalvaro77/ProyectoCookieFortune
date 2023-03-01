import React from 'react';

const CookiePlay = ({phraseData}) => {
    return (
        <div className='show-fortune'>
            <h1>Prueba tu Suerte</h1>
            <h3>{phraseData.phrase}</h3>
            <h4>{phraseData.author}</h4>
        </div>
    );
};

export default CookiePlay;