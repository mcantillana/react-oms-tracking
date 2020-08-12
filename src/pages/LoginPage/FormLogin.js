import React, { useState } from 'react';
import { Form, Button, Alert } from './styles';
import { Redirect } from 'react-router-dom';
import { getTracking } from "../../services/tracking.api";
import { Spinner } from '../../components/common/Spinner';


export const FormLogin = props => {


    const [form, setForm] = useState({order_id:'', email: ''});
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


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
                setError(false);
                setRedirect(true);   
            },
            (_error) => {
                setLoading(false);
                setError(true);
                console.log('error: ', _error);
            }
        );
        
    }


    if (redirect) {
        const base64 = btoa(JSON.stringify(form));
        return <Redirect to={`/tracking/${base64}`} />
    }

    return (
        <React.Fragment>


                <Form onSubmit={handleOnSubmit} method="POST">
                    {error && 
                    <Alert variant="warning" >
                        <Alert.Heading>Tus datos son incorrectos</Alert.Heading>
                        <p>No encontramos una orden asociado con el email ingresado. Prueba nuevamente! </p>
                    </Alert>}
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
        </React.Fragment>
    )
}