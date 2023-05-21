import { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const MenuBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation(); // location for isActive

    // handle logout
    const handleLogout = () => {
        logOut()
            .then()
            .catch((error) => console.error(error));
    };
            
    return (
        <div>
            <Navbar className='container p-2' expand='sm'>
                <Navbar.Brand>
                <Link to='/'><img src="/logo.png" alt="LegoLand Toy" className='img-fluid' style={{ height: '50px', width: 'auto' }} /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mx-auto'>
                        <Link
                            to='/'
                            className={`mx-3 text-decoration-none ${isActiveLink('/') ? 'fw-bold' : ''}`}>
                            Home
                        </Link>

                        <Link
                            to='/all-toys'
                            className={`mx-3 text-decoration-none ${isActiveLink('/all-toys') ? 'fw-bold' : ''}`}>
                            All Toys
                        </Link>

                        {user && (
                            <>
                                <Link
                                    to='/myToys'
                                    className={`mx-3 text-decoration-none ${isActiveLink('/my-toys') ? 'fw-bold' : ''}`}>
                                    My Toys
                                </Link>

                                <Link
                                    to='/add-toy'
                                    className={`mx-3 text-decoration-none ${isActiveLink('/add-toy') ? 'fw-bold' : ''}`}>
                                    Add A Toy
                                </Link>
                            </>
                        )}

                        <Link
                            to='/blogs'
                            className={`mx-3 text-decoration-none ${isActiveLink('/blogs') ? 'fw-bold' : ''}`}>
                            Blogs
                        </Link>
                    </Nav>
                    {user ? (
                        <div className='d-flex'>
                            
                            <Button onClick={handleLogout} variant='secondary' className='me-1 btn-sm'>
                                Logout
                            </Button>
                            <div data-toggle='tooltip' title={user.displayName}>
                                <Image src={user?.photoURL || 'https://picsum.photos/200'} roundedCircle height={35} />
                            </div>
                        </div>
                    ) : (
                        <Link to='/login'>
                            <Button variant='secondary' size='sm'>Login</Button>
                        </Link>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

    function isActiveLink(path) {
        return location.pathname === path;
    }
};

export default MenuBar;
