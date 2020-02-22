import React from 'react';

import Card from './card/Card'

const cards = (props) => {
    console.log(props)
    const cards = props.data.map(card => {
        return (<Card
        key={card._id}
        titulo={card.title}
        contenido={card.title}
        responsable={card.responsable}/>);
    })

    return(
        <div>{cards}</div>
    );
}

export default cards;