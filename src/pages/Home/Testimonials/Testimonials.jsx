import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Testimonials.css'

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Jo Doe',
      profilePicture: 'https://source.unsplash.com/random/800x601/?office-guy',
      quote: 'Legoland toys have brought endless joy to my children. They love the creative possibilities and the quality of the products.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      profilePicture: 'https://source.unsplash.com/random/800x607/?office-guy',
      quote: 'As a Lego enthusiast, Legoland Toy has been my go-to place for unique sets and limited editions. The customer service is exceptional!',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      profilePicture: 'https://source.unsplash.com/random/800x602/?office-guy',
      quote: 'Legoland Toy has exceeded my expectations. The fast shipping, great prices, and wide selection make it my favorite Lego shopping destination.',
    },
  ];

  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="section-title">Testimonials</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Carousel>
              {testimonialsData.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <p className="testimonial-quote">{testimonial.quote}</p>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                    </div>
                    <div className="testimonial-avatar">
                    <img
                        className="profile-picture"
                        src={testimonial.profilePicture}
                        alt={testimonial.name}
                      />
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
