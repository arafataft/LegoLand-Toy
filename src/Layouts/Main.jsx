
import { Outlet } from 'react-router-dom';
import MenuBar from '../pages/Shared/MenuBar/MenuBar';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet/>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default Main;