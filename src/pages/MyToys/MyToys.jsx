import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useTitle from '../../Hook/useTitle';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedQuantity, setUpdatedQuantity] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  useTitle('My Toys');

  const fetchToys = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000/myToys/${user?.email}`);
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

  return (
    <div>
      <h1>My Toys</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.name}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <button onClick={() => handleDeleteToy(toy._id)}>Delete</button>
                <button onClick={() => handleShowModal(toy)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
          />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={updatedQuantity}
            onChange={(e) => setUpdatedQuantity(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          ></textarea>
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
    </div>
  );
};

export default MyToys;
