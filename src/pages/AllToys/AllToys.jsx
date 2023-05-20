import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Form, Modal, Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hook/useTitle';

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const Navigate = useNavigate();

  useTitle('All Toys');

  const toysPerPage = 20; // Number of toys to display per page

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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

  const fetchToys = async () => {
    try {
      const response = await fetch(`http://localhost:3000/allToys?search=${searchTerm}&page=${currentPage}&limit=${toysPerPage}`);
      const data = await response.json();
      setTotalPages(Math.ceil(data.totalCount / toysPerPage));
      return data.toys;
    } catch (error) {
      console.error(error);
      return [];
    }
  };


  // Load toys when the component mounts or the current page or search term changes
  useEffect(() => {
    const loadToys = async () => {
      const toys = await fetchToys();
      setToys(toys);
    };
    loadToys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchTerm]);

  const [toys, setToys] = useState([]);

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className='my-5'>
      <h2 className="text-center my-5">All Toys</h2>
      <Form.Group  className="text-center my-4" style={{ display: 'flex', alignItems: 'center' }}>
        <Form.Label htmlFor="searchInput" >
          <span className='me-4 fw-bolder'>Search</span>
        </Form.Label>
        <div style={{ width: '40%' }}>
          <Form.Control
            id="searchInput"
            type="text"
            placeholder="Search by toy name"
            name="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </Form.Group>

      

      {/* <Form.Group controlId="searchForm" className="text-center">
        <Form.Control
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form.Group> */}




      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th style={{ color: 'blue'}}>No</th>
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
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5ffdf' : '#f5ffda'}} >
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>
                  <span>$</span>
                  {toy.price}
                </td>
                <td>{toy.quantity}</td>
                <td>
                  <Button variant="secondary" onClick={() => handleViewDetails(toy)}>
                    View Details
                  </Button>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="text-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? 'primary me-1' : 'outline-primary me-1'}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}
      </div>

      {/* Toy Details Modal */}
      {selectedToy && (
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Toy Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={selectedToy.pictureUrl} alt="Toy" fluid rounded />
            <p><strong>Toy Name:</strong> {selectedToy.name}</p>
            <p><strong>Seller Name:</strong> {selectedToy.sellerName}</p>
            <p><strong>Seller Email:</strong> {selectedToy.sellerEmail}</p>
            <p><strong>Price:</strong> ${selectedToy.price}</p>
            <p><strong>Rating:</strong> {selectedToy.rating}</p>
            <p><strong>Available Quantity:</strong> {selectedToy.quantity}</p>
            <p><strong>Detail Description:</strong> </p>
            <p>{selectedToy.description}</p>
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
