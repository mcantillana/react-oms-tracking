import React, { Fragment } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from 'react-bootstrap';

import '../../../assets/css/style.css';

export const Layout = props => {

    return (
        <Fragment>
            {/* <GlobalStyle /> */}
            <Header />
            <Container>
                <section className="purchase-traking" {...props}>
                    {props.children}
                </section>
            </Container> 
            <Footer />
        </Fragment>
    );
}
