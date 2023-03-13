import React, { useState } from 'react';
import './home.css';

export default function Shop(props) {
    const [showAttributes, setShowAttributes] = useState(false);

    const handleButtonClick = () => {
        setShowAttributes(!showAttributes);
    };

    return (
        <div className='shop-container'>
            <div className='shop-card'>
                <img src={props.url} className='shop-logo' alt='shop logo' />
                <h3>{props.name}</h3>
                {showAttributes ? (
                    <button className='shop-button' onClick={handleButtonClick}>
                        Hide
                    </button>
                ) : (
                    <button className='shop-button' onClick={handleButtonClick}>
                        View Store
                    </button>
                )}
            </div>
            {showAttributes && (
                <div className='attributes-container'>
                    <p>{props.address}</p>
                    <p>{props.openTime} - {props.closeTime}</p>
                    <p>{props.size}</p>
                    <p>{props.class}</p>
                </div>
            )}
        </div>
    );
}
