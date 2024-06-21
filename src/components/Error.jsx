import React from 'react';
import './Error.css';

function Error(props) {
    return (
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">
                {
                    (props.error.message) ? props.error.message : 'Sorry, the page not found'
                }
            </p>
            <p className="error-description">The link you followed probably broken or the page has been removed.</p>
            
            <div className="error-robot">
                {/* You can replace this with an SVG or an image of a broken robot */}
                <svg viewBox="0 0 64 64" width="64" height="64">
                    {/* SVG content goes here */}
                </svg>
            </div>
        </div>
    );
}

export default Error;
