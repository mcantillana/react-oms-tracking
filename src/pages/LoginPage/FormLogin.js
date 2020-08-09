import React, { useState } from 'react';
import { Form, Button } from './styles';
import { Redirect } from 'react-router-dom';


export const FormLogin = props => {


    const [form, setForm] = useState({order_id:'', email: ''});
    const [redirect, setRedirect] = useState(false);

    const handlerOnChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }


    const handleOnSubmit = event => {
        event.preventDefault();
        setRedirect(true);   
    }


    if (redirect) {
        const base64 = btoa(JSON.stringify(form));

        return <Redirect to={`/tracking/${base64}`} />
    }

    return (
            <Form onSubmit={handleOnSubmit} method="POST">
                <Form.Group controlId="OrderCustomer">
                    <Form.Label>Número de Orden: </Form.Label>
                    <Form.Control type="text" name="order_id" onChange={handlerOnChange} required />
                </Form.Group>

                <Form.Group controlId="EmailCustomer">
                    <Form.Label>Email con el cuál realizó la compra: </Form.Label>
                    <Form.Control type="email" name="email" onChange={handlerOnChange} required />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Consultar
                </Button>
            </Form>
    )
}