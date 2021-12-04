import React from 'react';
import './form-input.styles.scss';

const FormInput= ({ handleChange, label, ...otherProps }) => (
    //label section: allows dev to pass in a label if they want, if not, component is still functional
    //label section: adds the shrink property to label as soon as user types something into form
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps } />
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;