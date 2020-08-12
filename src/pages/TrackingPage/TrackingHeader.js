import React, { Fragment } from 'react';

export const TrackingHeader = ({tracking}) => {

    return (
        <Fragment>
        <h2 className="traking__title">
            <i className="fas fa-info-circle"></i> Te informamos que:
        </h2>
        <p className="traking__text">
                Tu compra <span className="purchase-traking__insert-info-2"><strong>{tracking.external_reference}</strong></span> será despachada a <strong>{tracking.shipping_address}</strong> y el estado del despacho es el siguiente:
        </p>

        </Fragment>
    )
}