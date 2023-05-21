import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section" style={{ backgroundColor: 'black', padding: '30px 0', color: 'white' }}>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <div className="footer-logo">
              <Link to='/'><img src="/logo1.png" alt="LegoLand Toy" className='img-fluid' /></Link>
              {/* <h3 className="footer-website-name" style={{ marginTop: '10px' }}>LegoLand Toy</h3> */}
            </div>
            <p className="footer-description" style={{ marginTop: '20px' }}>
              We offer a wide range of Lego toys for kids and enthusiasts. Explore our collection and let your imagination run wild!
            </p>
            <div className="footer-social-icons" style={{ marginTop: '20px' }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" style={{ marginRight: '10px', color: 'white' }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" style={{ marginRight: '10px', color: 'white' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" style={{ marginRight: '10px', color: 'white' }} />
              </a>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <h4 className="footer-section-title" style={{ marginTop: '10px' }}>Categories</h4>
            <ul className="footer-links">
              <li>
                <a href="/" style={{ color: 'white' }}>Bricks</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Sets</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Minifigures</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Accessories</a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h4 className="footer-section-title" style={{ marginTop: '10px' }}>Information</h4>
            <ul className="footer-links">
              <li>
                <a href="/" style={{ color: 'white' }}>About Us</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Contact Us</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Shipping &amp; Returns</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h4 className="footer-section-title" style={{ marginTop: '10px' }}>Customer Service</h4>
            <ul className="footer-links">
              <li>
                <a href="/" style={{ color: 'white' }}>FAQs</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Track Order</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Terms of Service</a>
              </li>
              <li>
                <a href="/" style={{ color: 'white' }}>Refund Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr style={{ marginTop: '30px', borderColor: 'white' }} />
        <div className="footer-bottom" style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} LegoLand Toy. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
