import React from "react";
import './analysis.css'

export default function showAnalysis({ name, competition, imageurl, site }) {
    return (
        <div className='analysis-packet'>
            <img src={imageurl} />
            <div className='analysis-details'>
                <h2>{name}</h2>
                <p>{competition}</p>
                <p>{site}</p>
            </div>
        </div>

    );
}