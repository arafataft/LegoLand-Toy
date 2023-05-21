import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="about-us-section py-5 my-5">
      <Container>
        <h2 className="section-title text-center pb-2">About Us</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="about-us-image">
              <img src='https://source.unsplash.com/random/800x616/?lego' alt="About Us" className='img-fluid rounded'/>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-us-content">
              <h3 className="about-us-title">LegoLand Toy Store!</h3>
              <p className="about-us-description">
                We are passionate about Lego toys and bring you a wide range of sets, minifigures, and accessories. With years of experience, we aim to provide the best selection of Lego products to satisfy the Lego enthusiasts of all ages. Whether you are a seasoned collector or a beginner builder, we have something for everyone. Explore our website and start building your Lego world today!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
