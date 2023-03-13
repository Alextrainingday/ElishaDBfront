import React from 'react'
import img from './img.png'
import './street.css'
import { streetData } from './streetData';

export default function street() {
    return (
        <div className='street-page'>
            <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5473234719667!2d30.30513651593933!3d59.958911655679254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469637c58ea80d19%3A0x131e26959c078f54!2sPetrogradsky%20Island%2C%20St%20Petersburg%2C%20Russia!5e0!3m2!1sen!2sus!4v1647190195768!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className='street-container'>
                <h1>Streets</h1>
                <div className='street-list'>
                    {streetData.map((street) => (
                        <div className='street-packet' key={street.id}>
                            <img src={street.imageurl} className='street-image' />
                            <div className='street-N_D'>
                                <h2 className='street-name'>{street.name}</h2>
                                <p className='street-description'>plus to market {street.market}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
