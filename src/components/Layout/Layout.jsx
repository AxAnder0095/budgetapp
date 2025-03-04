import './LayoutStyles.sass'
import {Outlet} from "react-router-dom";
import Dashboard from "../../views/Dashboard.jsx";
import Navbar from "../Navbar/Navbar.jsx";

function Layout(){
    return (
        <div className={'main-layout'}>
            <div className={'row top-page'}>
            </div>
            <div className={'row bottom-page'}>
                <div className={'col-2 border border-dark'} id={'left-side'}>
                    <Navbar/>
                </div>
                <div className={'col-10 border border-dark'} id={'right-side'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;