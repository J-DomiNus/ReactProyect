import React from 'react';

const style = ['generic-buttons'];

const button = (props) => {
    const style2 = [props.btnType]
        return (
        <button
            disabled={props.disabled}
            className={[style, style2].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    );
}
export default button;