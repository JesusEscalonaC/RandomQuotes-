import React from 'react';

const Button = ({click, color}) => {
    return (
        <div>
            <button style={{backgroundColor: color }} onClick={click} className= "button"><i className="fa-solid fa-paper-plane"></i></button>
        </div>
    );
};

export default Button;