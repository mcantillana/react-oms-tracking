import React from 'react';

export const ShippingMethod = props => {

    const shipping_method = props.shipping_method ? props.shipping_method : 'N/A';
    return (
        <div className="information__box">
            <span className="information__img">
                <i className="fas fa-shopping-bag"></i>
            </span>
            <span className="information__text">
                Despacho <br className="information__br" />
                <span className="purchase-traking__insert-info">{shipping_method}</span>
            </span>
        </div>
    )
}