import React, { useState } from 'react';
import { Form, Button } from './styles';
import { Redirect } from 'react-router-dom';
import { getTracking } from "../../services/tracking.api";
import { Spinner } from '../../components/common/Spinner';


export const FormLogin = props => {


    const [form, setForm] = useState({order_id:'', email: ''});
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);


    const handlerOnChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }


    const handleOnSubmit = event => {
        event.preventDefault();
        setLoading(true);
        getTracking(form).then(
            (response) => {
                console.log(response);
                setLoading(false);
                setRedirect(true);   
            },
            (error) => {
                setLoading(false);
                console.log('error: ', error);
            }
        );
        
    }


    if (redirect) {
        const base64 = btoa(JSON.stringify(form));
        return <Redirect to={`/tracking/${base64}`} />
    }

    return (
            <Form onSubmit={handleOnSubmit} method="POST">
                <Form.Group controlId="OrderCustomer">
                    <Form.Label>Número de Orden: </Form.Label>
                    <Form.Control type="text" name="external_reference" onChange={handlerOnChange} required />
                </Form.Group>

                <Form.Group controlId="EmailCustomer">
                    <Form.Label>Email con el cuál realizó la compra: </Form.Label>
                    <Form.Control type="email" name="customer_email" onChange={handlerOnChange} required  />
                </Form.Group>
                
                <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <Spinner size="xs" bg="white" />:"Consultar"}
                </Button>
            </Form>
    )
}