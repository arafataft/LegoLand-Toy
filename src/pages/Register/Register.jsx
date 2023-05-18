// import { Link } from 'react-router-dom';

import { Container, Col, Card, Form, Button } from 'react-bootstrap';


const Register = () => {
  

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      
        <Col lg={5}>
          <Card>
            <Card.Body>
              <h1 className="text-center">Register</h1>
              <Form >
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control type="url" name="photo" placeholder="photoURL" />
                </Form.Group>
                <Button variant="primary" type="submit" className="d-block mx-auto mt-3">Register</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      
    </Container>
  );
};

export default Register;
