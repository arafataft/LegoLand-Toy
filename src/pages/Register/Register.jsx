
import { useContext, useState } from 'react';
import { Container, Col, Card, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [reset, setReset] = useState();
  const [Error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleRegister = event => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password, name, photo)
      .then(() => {
        alert('Registration successful! Please Login');
        setError('');
        Navigate('/login');
      })
      .catch(error => {
        setError(error.code);
      })
    setReset(form.reset());
  }
  const resetForm=()=>reset;

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">

      <Col lg={5}>
        <Card>
          <Card.Body>
            <h1 className="text-center">Register</h1>
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="name" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="url">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="url" name="photo" placeholder="photoURL" />
              </Form.Group>
              <Form.Text className="text-danger">
                    {setError&&<p>{Error}</p>}
                </Form.Text>
              <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
              <Button onClick={resetForm} variant="primary" type="submit" className="d-block mx-auto mt-3">Register</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>

    </Container>
  );
};

export default Register;
