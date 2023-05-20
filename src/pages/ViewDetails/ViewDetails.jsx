import { useLoaderData, useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import useTitle from "../../Hook/useTitle";

const ViewDetails = () => {
  const allToy = useLoaderData();
  let { id } = useParams();
  useTitle('Details')

  const singleToy = allToy.find((toy) => toy._id === id);

  return (
    <div>
      {singleToy && (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={singleToy.pictureUrl} alt={singleToy.toyName} fluid />
              <Card.Body className="text-center">
                <Card.Title className="font-weight-bold">{singleToy.toyName}</Card.Title>
                <Card.Text><strong>Seller:</strong> {singleToy.sellerName}</Card.Text>
                <Card.Text><strong>Email:</strong> {singleToy.sellerEmail}</Card.Text>
                <Card.Text><strong>Price:</strong> {singleToy.price}</Card.Text>
                <Card.Text><strong>Rating:</strong> {singleToy.rating}</Card.Text>
                <Card.Text><strong>Available Quantity:</strong> {singleToy.quantity}</Card.Text>
                <Card.Text><strong>Description:</strong></Card.Text>
                <Card.Text>{singleToy.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ViewDetails;
