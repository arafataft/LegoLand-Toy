
import { Outlet } from 'react-router-dom';
import MenuBar from '../pages/Shared/MenuBar/MenuBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;