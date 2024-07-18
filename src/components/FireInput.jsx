import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function FireInput() {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
            <img src="z.jpg" alt="fire fighting workers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h2 style={{ position: 'absolute', bottom: '60px', left: '20px', color: 'blue', margin: 0 }}>Fire Fighters</h2>
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', display: 'flex', alignItems: 'center', width: '100%' }}>
                <h1 style={{ color: 'blue', margin: 0 }}>Saving people life and properties by risking their life</h1>
                <div style={{ marginLeft: '10px' }}>
                    <FontAwesomeIcon 
                        icon={faInfoCircle} 
                        onClick={toggleDescription} 
                        style={{ color: 'yellow', cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }} 
                    />
                </div>
            </div>
            {showDescription && (
                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '50vw', 
                    height: '100vh', 
                    backgroundColor: 'pink', 
                    color: 'blue',  // Change text color to blue
                    padding: '20px', 
                    boxSizing: 'border-box', 
                    overflowY: 'auto' 
                }}>
                    <h2 style={{ color: 'blue' }}>Fire Fighters</h2>
                    <p>Firefighters are trained professionals who are dedicated to protecting life, property, and the environment from fire and other emergencies. They respond to a wide range of emergency situations including fires, medical emergencies, hazardous materials incidents, and natural disasters. Firefighters perform various duties such as fire suppression, rescue operations, providing emergency medical care, fire prevention, and public education.</p>
                    <button onClick={toggleDescription} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>Close</button>
                </div>
            )}
        </div>
    );
}
