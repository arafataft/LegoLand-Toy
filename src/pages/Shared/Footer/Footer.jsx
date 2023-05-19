import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="bg-light py-3">
      <Row>
        <Col md={4} className="text-center text-md-start">
          <p>© 2023 LegoLand Toys</p>
        </Col>
        <Col md={4} className="text-center mt-2 mt-md-0">
          <a href="/">About Us</a> | <a href="/">Contact</a>
        </Col>
        <Col md={4} className="text-center text-md-end mt-2 mt-md-0">
          <p>Follow us on social media!</p>
          <ul className="list-unstyled d-inline">
            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
