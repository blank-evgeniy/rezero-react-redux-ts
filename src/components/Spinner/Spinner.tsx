import React from 'react';
import "./Spinner.scss"

const Spinner:React.FC = () => {
    return (
        <div className='container'>
            <span className='spinner'></span>
        </div>
    );
};

export default Spinner;