import React from 'react'
import './card.css'


const cardColor = (color) => {
    alert ('The color of this card is ' + color)
}


const Card = ({color, text}) => {
    return (
        <div
        style={{ color: color, textTransform: text}}
        onClick={() => cardColor(color)} >
            <p className='card'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur labore error</p>
       </div>
    )
}

Card.defaultProps = {
    color: 'black',
    text: 'uppercase'
}

export default Card