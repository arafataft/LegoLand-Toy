import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
import { Container, Col, Card, Form, Button } from 'react-bootstrap';


const Login = () => {
  

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      
        <Col lg={5}>
          <Card>
            <Card.Body>
              <h1 className="text-center">Login</h1>
              <Form >
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" />
                  
                </Form.Group>
                <Button variant="primary" type="submit" className="d-block mx-auto mt-3">Login</Button>
              </Form>
              <p className="text-center mt-3">New to LegoLand Toys? <Link to="/signup">Sign Up</Link></p>
            </Card.Body>
          </Card>
        </Col>
      
    </Container>
  );
};

export default Login;
