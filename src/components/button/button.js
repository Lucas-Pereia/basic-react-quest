import React from 'react'
import './button.css'

const label = () => {
    alert ('The label of this button is ' + Button.defaultProps.label)
}

const Button = (props) => {
    return (
        <button className='btn' onClick={label}>
            {props.label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Push'
}

export default Button