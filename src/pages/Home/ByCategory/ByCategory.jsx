import { useState, useEffect, useContext } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ByCategory = () => {
  const [toysData, setToysData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');
  const { user } = useContext(AuthContext); 
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch('http://localhost:3000/allToys');
        if (response.ok) {
          const data = await response.json();
          setToysData(data);
        } else {
          console.log('Error fetching toys');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchToys();
  }, []);

  useEffect(() => {
    // Select the "All" tab by default if no category is selected
    if (selectedTab === 'All') {
      setSelectedTab('All');
    }
  }, [selectedTab]);

  const handleTabClick = (category) => {
    setSelectedTab(category);
  };

  const handleViewDetails = (id) => {
    if (user) {
      // User is logged in, navigate to the view details page
      Navigate(`/toy/${id}`); 
    } else {
      // User is not logged in, show toast notification and redirect to login page
      toast('You have to log in first to view details');
      setTimeout(() => {
        Navigate('/login'); 
      }, 3000); // Adjust the timeout as needed
    }
  };

  // Filter the toysData based on the selected tab/category
  const filteredToys = selectedTab === 'All' ? toysData : toysData.filter((toy) => toy.subCategory === selectedTab);

  return (
    <div>
      <Nav variant="tabs">
        <NavItem>
          <NavLink active={selectedTab === 'All'} onClick={() => handleTabClick('All')}>
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={selectedTab === 'Math Toys'} onClick={() => handleTabClick('Math Toys')}>
            Math Toys
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={selectedTab === 'Language Toys'} onClick={() => handleTabClick('Language Toys')}>
            Language Toys
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={selectedTab === 'Engineering Toys'} onClick={() => handleTabClick('Engineering Toys')}>
            Engineering Toys
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent>
        <TabPane eventKey="All" className={selectedTab === 'All' ? 'show active' : ''}>
          <div className="row">
            {filteredToys.map((toy) => (
              <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                <Card>
                  <Card.Img variant="top" src={toy.pictureUrl} alt={toy.name} />
                  <Card.Body>
                    <Card.Title>{toy.name}</Card.Title>
                    <Card.Text>Price: ${toy.price}</Card.Text>
                    <Card.Text>Rating: {toy.rating}</Card.Text>
                    <Button variant="primary" onClick={()=>handleViewDetails(toy._id)}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </TabPane>

        <TabPane eventKey="Math Toys" className={selectedTab === 'Math Toys' ? 'show active' : ''}>
          <div className="row">
            {filteredToys.map((toy) => (
              <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                <Card>
                  <Card.Img variant="top" src={toy.pictureUrl} alt={toy.name} />
                  <Card.Body>
                    <Card.Title>{toy.name}</Card.Title>
                    <Card.Text>Price: ${toy.price}</Card.Text>
                    <Card.Text>Rating: {toy.rating}</Card.Text>
                    <Button variant="primary" onClick={handleViewDetails}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </TabPane>

        <TabPane eventKey="Language Toys" className={selectedTab === 'Language Toys' ? 'show active' : ''}>
          <div className="row">
            {filteredToys.map((toy) => (
              <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                <Card>
                  <Card.Img variant="top" src={toy.pictureUrl} alt={toy.name} />
                  <Card.Body>
                    <Card.Title>{toy.name}</Card.Title>
                    <Card.Text>Price: ${toy.price}</Card.Text>
                    <Card.Text>Rating: {toy.rating}</Card.Text>
                    <Button variant="primary" onClick={handleViewDetails}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </TabPane>

        <TabPane eventKey="Engineering Toys" className={selectedTab === 'Engineering Toys' ? 'show active' : ''}>
          <div className="row">
            {filteredToys.map((toy) => (
              <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                <Card>
                  <Card.Img variant="top" src={toy.pictureUrl} alt={toy.name} />
                  <Card.Body>
                    <Card.Title>{toy.name}</Card.Title>
                    <Card.Text>Price: ${toy.price}</Card.Text>
                    <Card.Text>Rating: {toy.rating}</Card.Text>
                    <Button variant="primary" onClick={handleViewDetails}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ByCategory;
