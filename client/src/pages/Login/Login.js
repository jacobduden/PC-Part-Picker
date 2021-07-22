import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Container } from 'react-bootstrap';

function Login() {
  const [userEmail, userEmailSet] = useState("");
  const [userPassword, userPasswordSet] = useState("");

  function validateForm() {
    return userEmail.length > 0 && userPassword.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="LoginSec">
    <Container className='Login'>
        <Container className='Login2'>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email" value={userEmail} onChange={(e) => userEmailSet(e.target.value)} placeholder= 'Enter your email'
          />
        </Form.Group>
        <Form.Group size="lg" controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password" value={userPassword} onChange={(e) => userPasswordSet(e.target.value)} placeholder='Enter your password'
          />
        </Form.Group>
        <Button block size="lg" type="submit" id='logIN' disabled={!validateForm()} href='#'>
          LOGIN
        </Button>
      </Form>
      </Container>
      </Container>
    </section>
  );
}

export default Login;