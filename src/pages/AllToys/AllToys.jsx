import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hook/useTitle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useTitle('All Toys');

  const toysPerPage = 20; // Number of toys to display per page

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewDetails = () => {
    if (!user) {
      // User is not logged in, show toast notification and redirect to login page
      toast('You have to log in first to view details');
      navigate('/login', { state: { searchTerm, currentPage } });
    } 
  };

  const fetchToys = async () => {
    try {
      const response = await fetch(`https://b7a11-toy-marketplace-server-side-arafataft.vercel.app/allToys?search=${searchTerm}&page=${currentPage}&limit=${toysPerPage}`);
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

  useEffect(() => {
    // Restore previous state if available after login
    if (location.state && location.state.from === '/login') {
      const { searchTerm, currentPage } = location.state;
      setSearchTerm(searchTerm);
      setCurrentPage(currentPage);
    }
  }, [location.state]);

  return (
    <Container className='my-5'>
      <h2 className="text-center my-5">All Toys</h2>
      <Form.Group className="text-center my-4" style={{ display: 'flex', alignItems: 'center' }}>
        <Form.Label htmlFor="searchInput">
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

      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th style={{ color: 'blue' }}>No</th>
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
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5ffdf' : '#f5ffda' }}>
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
                  <Link to={`/toy/${toy._id}`}>
                    <Button variant="info" onClick={() => handleViewDetails()}>
                      View Details
                    </Button>
                  </Link>
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
    </Container>
  );
};

export default AllToys;
