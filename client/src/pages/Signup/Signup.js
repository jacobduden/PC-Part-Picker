import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login/Login.css";
import { Container } from 'react-bootstrap';
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../../utils/mutations'
import Auth from "../../utils/Auth";



function Signup() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' })
    const [addUser] = useMutation(CREATE_USER)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(userFormData)
            const { data } = await addUser({
                variables: { ...userFormData }
                
            })
            Auth.login(data.addUser.token)
        } catch (e) {
            console.error(e)
        }
        setUserFormData({
            email: '',
            password: ''
        })
    };

    return (
        <section className="LoginSec">
            <Container className='Login'>
                <Container className='Login2'>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group size="lg" controlId="userEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email" name="email" value={userFormData.email} onChange={handleInputChange} placeholder='Enter your email'
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="userPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password" name='password' value={userFormData.password} onChange={handleInputChange} placeholder='Enter your password'
                            />
                        </Form.Group>
                        <Button name='button' type="submit" id='logIN'>
                            SIGN UP
                        </Button>
                    </Form>
                </Container>
            </Container>
        </section>
    );
}

export default Signup;