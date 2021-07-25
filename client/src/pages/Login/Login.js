import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Container } from 'react-bootstrap';
import {useMutation} from '@apollo/react-hooks'
import { USER_LOGIN } from '../../utils/mutations'
import Auth from "../../utils/Auth";



function Login() {
  const [userFormData, setUserFormData] = useState({email: '', password: ''})
  const [Login] = useMutation(USER_LOGIN)
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await Login({
        variables: {...userFormData}
      })
      Auth.login(data.login.token)
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
            type="email" name='email' value={userFormData.email} onChange={handleInputChange} placeholder= 'Enter your email'
          />
        </Form.Group>
        <Form.Group size="lg" controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password" name='password' value={userFormData.password} onChange={handleInputChange} placeholder='Enter your password'
          />
        </Form.Group>
        <Button type="submit" id='logIN' href='#'>
          LOGIN
        </Button>
      </Form>
      </Container>
      </Container>
    </section>
  );
}

export default Login;