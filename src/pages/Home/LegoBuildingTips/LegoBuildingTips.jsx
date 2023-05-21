import { Container, Row, Col } from 'react-bootstrap';

const LegoBuildingTips = () => {
  // Sample array of Lego building tips
  const buildingTips = [
    {
      id: 1,
      title: 'Start with a Plan',
      description: 'Before you begin building, visualize your final creation and plan out the structure, color scheme, and design elements.',
    },
    {
      id: 2,
      title: 'Sort and Organize',
      description: 'Sort your Lego bricks by color, size, or type to make it easier to find the pieces you need during the building process.',
    },
    {
      id: 3,
      title: 'Use Baseplates',
      description: 'Baseplates provide a stable foundation for your Lego creations. Consider using them to build larger structures or create landscapes.',
    },
    {
      id: 4,
      title: 'Experiment with Different Techniques',
      description: 'Explore various building techniques such as SNOT (Studs Not On Top), greebling, or advanced connection methods to add detail and complexity to your builds.',
    },
    {
      id: 5,
      title: 'Add Creative Details',
      description: 'Personalize your Lego creations by incorporating unique and creative details, such as custom decals, accessories, or imaginative features.',
    },
    {
      id: 6,
      title: 'Join Online Lego Communities',
      description: 'Connect with fellow Lego enthusiasts through online communities, forums, or social media platforms to exchange ideas, get inspiration, and showcase your builds.',
    },
  ];

  return (
    <div className="lego-building-tips-section py-5 my-5" style={{ backgroundColor: '#cccccc' }}>
      <Container>
        <h2 className="section-title text-center">Lego Building Tips</h2>
        <Row className="justify-content-center">
          {buildingTips.map((tip) => (
            <Col key={tip.id} xs={12} md={6} lg={4} className="mb-4 d-flex" >
              <div className="building-tip-card w-100 shadow rounded p-4" style={{ backgroundColor: '#e1eaea'}}>
                <h3 className="tip-title">{tip.title}</h3>
                <hr />
                <p className="tip-description">{tip.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegoBuildingTips;
