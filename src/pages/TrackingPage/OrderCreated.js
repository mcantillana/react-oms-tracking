import React from 'react';

export const OrderCreated = props => {
    console.log('date', props.date)
    const date = new Date(props.date); 
    
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const purchase_date = date.toLocaleDateString('es-CL', options)

    return (
        <div className="information__box">
            <span className="information__img"><i className="fas fa-calendar"></i></span>
            <span className="information__text">
                Fecha de compra: <br className="information__br" />
                <span className="purchase-traking__insert-info">{purchase_date}</span>
            </span>
        </div>
    )
}