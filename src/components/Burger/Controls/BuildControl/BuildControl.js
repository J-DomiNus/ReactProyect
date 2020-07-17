import React from 'react';


const buildControl = (props) => (
    <div className='build-control-wrapper'>
        <div className='label'>{props.label}</div>
        <button 
            className='generic-buttons light'
            onClick={props.removed}
            disabled={props.disableButton}>
            Less
            </button>
        <button 
            className='generic-buttons dark'
            onClick={props.added}>
            More
            </button>
    </div>
);

export default buildControl;
