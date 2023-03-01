import React from 'react';
 const Button = ({pressButton}) => {
    return (
        <div>
            <button onClick={pressButton}>
              Prueba tu suerte
            </button>        
        </div>
    );
};

export default Button;
