import React from 'react';

const input = (props) => {
    let inputElement = null
    const inputClasses = ['inputElement'];

    if (props.invalid && props.shouldValidate && props.focus) {
        inputClasses.push('invalid')
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} onChange={props.changed}/>
            break;
        case ( 'select' ):
            inputElement = (
                <select 
                    className={inputClasses.join(' ')}
                    value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} 
                            value={option.value}>
                            {option.display}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}/>
    }
        return (
        <div className='input-form'>
            <label className='label-form' >{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;