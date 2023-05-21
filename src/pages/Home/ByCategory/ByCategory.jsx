import { useState, useEffect, useContext } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ByCategory = () => {
  const [toysData, setToysData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');
  const { user } = useContext(AuthContext);
  const [displayedToys, setDisplayedToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch('https://b7a11-toy-marketplace-server-side-arafataft.vercel.app/allToy');
        if (response.ok) {
          const data = await response.json();
          setToysData(data);
          setLoading(false);
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

  useEffect(() => {
    // Set the displayed toys based on the selected tab and limit to 5 initially
    const filteredToys = selectedTab === 'All' ? toysData : toysData.filter((toy) => toy.subCategory === selectedTab);
    setDisplayedToys(filteredToys.slice(0, 3));
  }, [selectedTab, toysData]);

  const handleTabClick = (category) => {
    setSelectedTab(category);
  };
  
  if (loading) {
    return <Spinner animation="border" role="status" className="d-block mx-auto my-5"><span className="sr-only"></span></Spinner>;
  }

  const handleViewDetails = () => {
    if (!user) {
      // User is not logged in, show toast notification and redirect to login page
      toast('You have to log in first to view details');
      
    } 
  };

  const handleSeeMore = () => {
    const filteredToys = selectedTab === 'All' ? toysData : toysData.filter((toy) => toy.subCategory === selectedTab);
    const nextBatch = filteredToys.slice(displayedToys.length, displayedToys.length + 3);
    setDisplayedToys((prevToys) => [...prevToys, ...nextBatch]);
  };

  return (
    <div className='container my-5 pt-5'>
      <h2 className="section-title">Category</h2>
      <Nav variant="tabs" className='pt-5'>
        <NavItem>
          <NavLink active={selectedTab === 'All'} onClick={() => handleTabClick('All')}>
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={selectedTab === 'LEGO City'} onClick={() => handleTabClick('LEGO City')}>
            LEGO City
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={selectedTab === 'LEGO Star Wars'} onClick={() => handleTabClick('LEGO Star Wars')}>
            LEGO Star Wars
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={selectedTab === 'LEGO Architecture'} onClick={() => handleTabClick('LEGO Architecture')}>
            LEGO Architecture
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className='mt-4'>
        <TabPane eventKey='All' className={selectedTab === 'All' ? 'show active' : ''}>
          <div className="container">
            <div className="row">
              {displayedToys.map((toy) => (
                <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                  <Card style={{ height: '100%' }}>
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <Card.Img src={toy.pictureUrl} alt={toy.name} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <Card.Body>
                      <Card.Title>{toy.name}</Card.Title>
                      <Card.Text>Price: ${toy.price}</Card.Text>
                      <Card.Text>Rating: {toy.rating}</Card.Text>
                      <Link to={`/toy/${toy._id}`}><Button variant="info" onClick={() => handleViewDetails()}>
                        View Details
                      </Button></Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {selectedTab === 'All' && displayedToys.length > 2 && displayedToys.length < toysData.length && (
              <div className="text-center mt-4">
                <Button variant="info" onClick={handleSeeMore}>
                  See More
                </Button>
              </div>
            )}

          </div>
        </TabPane>

        <TabPane eventKey='LEGO City' className={selectedTab === 'LEGO City' ? 'show active' : ''}>
          <div className="container">
            <div className="row">
              {displayedToys.map((toy) => (
                <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                  <Card style={{ height: '100%' }}>
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <Card.Img src={toy.pictureUrl} alt={toy.name} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <Card.Body>
                      <Card.Title>{toy.name}</Card.Title>
                      <Card.Text>Price: ${toy.price}</Card.Text>
                      <Card.Text>Rating: {toy.rating}</Card.Text>
                      <Link to={`/toy/${toy._id}`}><Button variant="info" onClick={() => handleViewDetails()}>
                        View Details
                      </Button></Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {selectedTab === 'LEGO City' && displayedToys.length > 2 && displayedToys.length < toysData.length && (
              <div className="text-center mt-4">
                <Button variant="info" onClick={handleSeeMore}>
                  See More
                </Button>
              </div>
            )}

          </div>
        </TabPane>

        <TabPane eventKey='LEGO Star Wars' className={selectedTab === 'LEGO Star Wars' ? 'show active' : ''}>
          <div className="container">
            <div className="row">
              {displayedToys.map((toy) => (
                <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                  <Card style={{ height: '100%' }}>
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <Card.Img src={toy.pictureUrl} alt={toy.name} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <Card.Body>
                      <Card.Title>{toy.name}</Card.Title>
                      <Card.Text>Price: ${toy.price}</Card.Text>
                      <Card.Text>Rating: {toy.rating}</Card.Text>
                      <Link to={`/toy/${toy._id}`}><Button variant="info" onClick={() => handleViewDetails()}>
                        View Details
                      </Button></Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {selectedTab === 'LEGO Star Wars' && displayedToys.length > 2 && displayedToys.length < toysData.length && (
              <div className="text-center mt-4">
                <Button variant="info" onClick={handleSeeMore}>
                  See More
                </Button>
              </div>
            )}

          </div>
        </TabPane>

        <TabPane eventKey='LEGO Architecture' className={selectedTab === 'LEGO Architecture' ? 'show active' : ''}>
          <div className="container">
            <div className="row">
              {displayedToys.map((toy) => (
                <div key={toy._id} className="col-lg-4 col-sm-12 mb-4">
                  <Card style={{ height: '100%' }}>
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <Card.Img src={toy.pictureUrl} alt={toy.name} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <Card.Body>
                      <Card.Title>{toy.name}</Card.Title>
                      <Card.Text>Price: ${toy.price}</Card.Text>
                      <Card.Text>Rating: {toy.rating}</Card.Text>
                      <Link to={`/toy/${toy._id}`}><Button variant="info" onClick={() => handleViewDetails()}>
                        View Details
                      </Button></Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {selectedTab === 'LEGO Architecture' && displayedToys.length > 2 && displayedToys.length < toysData.length && (
              <div className="text-center mt-4">
                <Button variant="info" onClick={handleSeeMore}>
                  See More
                </Button>
              </div>
            )}

          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ByCategory;
