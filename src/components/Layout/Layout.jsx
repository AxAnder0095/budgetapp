import './LayoutStyles.sass'
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

function Layout(){

    return (
        <div className={'main-layout'}>
            <div className={'container-fluid m-0 p-0 h-100'}>
                <div className={''} id={'left-side'}>
                    <Navbar/>
                </div>
                <div className={''} id={'right-side'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;