import { Image, Row, Col, Container } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://source.unsplash.com/random/800x600/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/random/800x601/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/random/800x602/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/random/800x603/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 5,
      src: 'https://source.unsplash.com/random/800x604/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 6,
      src: 'https://source.unsplash.com/random/800x605/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 7,
      src: 'https://source.unsplash.com/random/800x606/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 8,
      src: 'https://source.unsplash.com/random/800x607/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 9,
      src: 'https://source.unsplash.com/random/800x608/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 10,
      src: 'https://source.unsplash.com/random/800x610/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 11,
      src: 'https://source.unsplash.com/random/800x611/?lego',
      alt: 'Lego Toys',
    },
    {
      id: 12,
      src: 'https://source.unsplash.com/random/800x612/?lego',
      alt: 'Lego Toys',
    },
  ];

  return (
    <div className="gallery-section">
      <Container>
        <h2 className="section-title">Our Gallery</h2>
        <Row>
          {images.map((image) => (
            <Col xs={6} md={3} key={image.id} className="mb-4">
              <div className="gallery-image-wrapper">
                <Image src={image.src} alt={image.alt} fluid />
                <div className="gallery-image-overlay">
                  <p className="gallery-image-caption">{image.alt}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;

