import React from 'react';


const buildControl = (props) => (
    <div className='build-control'>
        <div className='label'>{props.label}</div>
        <button className='control-button control-button__less'>Less</button>
        <button className='control-button control-button__more'>More</button>
    </div>
);

export default buildControl;