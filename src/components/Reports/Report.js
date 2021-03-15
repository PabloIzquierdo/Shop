import React from 'react';
import reportData from './reportData.js';

export default function Report() {
    return ( reportData.map(e => <div className="reportContainer" key={e.id}>
                <div className="flipContainer">
                    <div className="front">
                        <h1>{e.title}</h1>
                        <li>{e.icon}</li>   
                        <p>{e.description}</p>
                    </div>
                    <div className="back">
                        <img class="image" src={e.url}/>
                    </div>
                </div>
            </div>))
}