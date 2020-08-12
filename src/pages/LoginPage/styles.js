import styled from 'styled-components';
import { 
    Form as FormBootstrap, 
    Button as ButtonBootstrap,
    Alert as AlertBootstrap,
} from 'react-bootstrap';

export const Form = styled(FormBootstrap)`
    margin-top: 100px;

`;

export const Alert = styled(AlertBootstrap)`
    margin-top: inherit;
`;

export const Button = styled(ButtonBootstrap)`
    color: #fff;
    background-color: #f96d32 !important;
    border-color: #a74319 !important;
`;
