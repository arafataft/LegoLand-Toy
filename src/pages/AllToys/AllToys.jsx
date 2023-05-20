import { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Container, Table, Form, Modal, Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hook/useTitle';

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(20);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const Navigate = useNavigate();

  useTitle('All Toy');

  const toys = useLoaderData();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const handleViewDetails = (toy) => {
    if (user) {
      setSelectedToy(toy);
      setShowModal(true);
    } else {
      Navigate('/login');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const filteredToys = toys
    .filter((toy) => toy.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, limit);

  return (
    <Container>
      <h1>All Toys</h1>
      <Form.Group controlId="searchForm">
        <Form.Control
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form.Group>
      <Form.Group controlId="limitForm">
        <Form.Label>Show:</Form.Label>
        <Form.Control as="select" value={limit} onChange={handleLimitChange}>
          <option value="20">20</option>
          <option value="3">3</option>
          <option value="1">1</option>
        </Form.Control>
      </Form.Group>
      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy, index) => (
              <tr key={index}>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>
                  <span>$</span>
                  {toy.price}
                </td>
                <td>{toy.quantity}</td>
                <td>
                  <Button variant="primary" onClick={() => handleViewDetails(toy)}>
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Toy Details Modal */}
      {selectedToy && (
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Toy Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={selectedToy.pictureUrl} alt="Toy" fluid rounded />
            <p>Toy Name: {selectedToy.name}</p>
            <p>Seller Name: {selectedToy.sellerName}</p>
            <p>Seller Email: {selectedToy.sellerEmail}</p>
            <p>Price: ${selectedToy.price}</p>
            <p>Rating: {selectedToy.rating}</p>
            <p>Available Quantity: {selectedToy.quantity}</p>
            <p>Detail Description: {selectedToy.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default AllToys;
