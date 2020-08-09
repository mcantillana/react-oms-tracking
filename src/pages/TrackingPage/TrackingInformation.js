import React, { Fragment } from 'react';
import { OrderCreated } from './OrderCreated';
import { ShippingMethod } from './ShippingMethod';

export const TrackingInformation = ({ tracking }) => {
    return (
        <Fragment>
        {
            tracking && 
            <section className="information">
                <div className="information__boxes">
                    <OrderCreated date={tracking.order_created} />
                    <ShippingMethod shipping_method={tracking.shipping_method} />
                </div>
                <hr />
            </section>
        }
        </Fragment>
    )
}