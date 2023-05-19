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
                    <Link to='/' className='mx-3 text-black text-decoration-none fw-bolder'>
                        LegoLand Toys
                    </Link>
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
                                    to='/my-toys'
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
                            <div data-toggle='tooltip' title={user.displayName}>
                                <Image src={user?.photoURL || 'https://picsum.photos/200'} roundedCircle height={25} />
                            </div>
                            <Button onClick={handleLogout} variant='secondary' className='ms-1'>
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Link to='/login'>
                            <Button variant='secondary'>Login</Button>
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
