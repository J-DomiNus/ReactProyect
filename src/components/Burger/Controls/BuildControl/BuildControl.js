import React from 'react';


const buildControl = (props) => (
    <div className='build-control'>
        <div className='label'>{props.label}</div>
        <button 
            className='ctrl-btn ctrl-btn--less'
            onClick={props.removed}
            disabled={props.disableButton}>
            Less
            </button>
        <button 
            className='ctrl-btn ctrl-btn--more'
            onClick={props.added}>
            More
            </button>
    </div>
);

export default buildControl;
