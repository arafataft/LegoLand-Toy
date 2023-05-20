import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

import { Container, Col, Card, Form, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import useTitle from '../../Hook/useTitle';


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [Error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  useTitle('Login');

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(from);
        setError(null);
      })
      .catch(error => console.error(error.message))
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(() => {
        navigate(from);
        setError('')
      })
      .catch(error => {
        if (error.code === "auth/user-not-found") {
          setError("User not found");
        } else if (error.code === "auth/wrong-password") {
          setError("Invalid password");
        } else {
          setError(error.message);
        }
      })
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">

      <Col lg={5}>
        <Card>
          <Card.Body>
            <h1 className="text-center">Login</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />

              </Form.Group>
              <Form.Text className="text-danger">
                {setError && <p>{Error}</p>}
              </Form.Text>
              <Button variant="primary" type="submit" className="d-block mx-auto mt-3">Login</Button>
            </Form>
            <p className="text-center mt-3">New to LegoLand Toys? <Link to="/signup">Sign Up</Link></p>
            <Button onClick={handleGoogleLogin} className='mb-2 mx-auto d-block' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
          </Card.Body>
        </Card>
      </Col>


    </Container>
  );
};

export default Login;
