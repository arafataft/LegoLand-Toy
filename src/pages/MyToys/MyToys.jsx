import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Container, Table, Button, Modal, Image } from 'react-bootstrap';
import useTitle from '../../Hook/useTitle';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedQuantity, setUpdatedQuantity] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [sortAscending, setSortAscending] = useState(false); // State for sorting direction

  useTitle('My Toys');

  const fetchToys = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000/Toys/${user?.email}`);
      if (response.ok) {
        const data = await response.json();
        setToys(data);
      } else {
        console.log('Error fetching toys');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchToys();
    }
  }, [user, fetchToys]);

  const handleDeleteToy = async (id) => {
    if (window.confirm('Are you sure you want to delete this toy?')) {
      try {
        const response = await fetch(`http://localhost:3000/deleteToy/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log('Toy deleted successfully');
          // Update the list of toys after deletion
          fetchToys();
        } else {
          console.log('Error deleting toy');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const handleUpdateToy = async () => {
    try {
      const response = await fetch(`http://localhost:3000/updateToy/${selectedToy._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: updatedPrice,
          quantity: updatedQuantity,
          description: updatedDescription,
        }),
      });
      if (response.ok) {
        console.log('Toy updated successfully');
        // Close the modal and update the list of toys
        handleCloseModal();
        fetchToys();
      } else {
        console.log('Error updating toy');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleShowModal = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedToy(null);
    setShowModal(false);
    setUpdatedPrice('');
    setUpdatedQuantity('');
    setUpdatedDescription('');
  };

  const handleSort = () => {
    setSortAscending(!sortAscending);
    // Fetch toys again with the updated sort direction
    fetchToys();
  };

  // Sort the toys based on the price and sort direction
  const sortedToys = sortAscending ? toys.sort((a, b) => a.price - b.price) : toys.sort((a, b) => b.price - a.price);

  return (
    <Container className='my-5'>
      <h1 className="text-center my-5">My Toys</h1>
      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr style={{ backgroundColor: '#dff0e0'  }}>
              <th>Picture</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-category</th>
              <th>
                Price{' '}
                <Button variant="link" onClick={handleSort}>
                  {sortAscending ? '⬆' : '⬇'} 
                  {/* Here use up down symbol as button asc/dsc */}
                </Button>
              </th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedToys.map((toy,index) => (
              <tr key={toy._id} style={{ backgroundColor: index % 2 === 0 ? '#f5ffdf' : '#f5ffda' }}>
                <td>
                  <Image src={toy.pictureUrl} alt="Toy" className="toy-image " height={95} />
                </td>
                <td>{toy.name}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.subCategory}</td>
                <td>${toy.price}</td>
                <td>{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td>{toy.description}</td>
                <td>
                  <Button variant="danger" className="me-1 mb-1" onClick={() => handleDeleteToy(toy._id)}>
                    <FaTrash />
                  </Button>
                  <Button variant="primary" onClick={() => handleShowModal(toy)}>
                    <FaEdit />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                id="price"
                className="form-control"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={updatedQuantity}
                onChange={(e) => setUpdatedQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                id="description"
                className="form-control"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateToy}>
            Update Toy
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MyToys;
