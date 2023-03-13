import React, { useState } from 'react';
import img from './img.png';
import './analysis.css';
import { shopData } from './shopData';
import ShowAnalysis from './showAnalysis';

export default function Analysis() {
    const [sortBy, setSortBy] = useState('');

    const analyse = shopData
        .sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'competition') {
                return b.competition - a.competition;
            } else {
                return 0;
            }
        })
        .map((item) => (
            <ShowAnalysis
                key={item.id}
                name={item.name}
                competition={item.competition}
                imageurl={item.imageurl}
                site={item.site}
            />
        ));

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div>
            <div className='analysis-container'>
                <div className='analysis-header'>
                    <h1>Analysis</h1>
                    <div className='analysis-filter'>
                        <span>Filter:</span>
                        <select value={sortBy} onChange={handleSortByChange}>
                            <option value=''>None</option>
                            <option value='name'>Name</option>
                            <option value='competition'>Competition</option>
                        </select>
                    </div>
                </div>
                <p> </p>
                <div className='analysis-list'>{analyse}</div>
            </div>
        </div>
    );
}
