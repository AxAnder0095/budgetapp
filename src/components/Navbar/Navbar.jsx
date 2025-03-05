import './NavbarStyles.sass'
import {signOut } from "firebase/auth";
import {auth} from "../../firebase/config.js";
import {setUser} from "../../store/userSlice.js";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPageTitle} from '../../store/pageNameSlice.js';

function Navbar() {
    const dispatch = useDispatch();


    const handleSignOut = () => {
        // if (confirm("Are you sure you want to logout?")){
        //     signOut(auth).then(() => {
        //         // sigh out successful
        //         dispatch(setUser(null))
        //     }).catch((error) => {
        //         // an error occurred
        //         console.log(error)
        //     })
        // }
        signOut(auth).then(() => {
            // sigh out successful
            dispatch(setUser(null))
        }).catch((error) => {
            // an error occurred
            console.log(error)
        })
    }

    return (
        <>
            <div className={'row mx-0 navigation'}>
                <Link to={'/'} className={'links'} onClick={() => dispatch(setPageTitle('Dashboard'))}>Home</Link>
            </div>
            <div className={'row mx-0 navigation'}>
                <Link to={'/expenses'} className={'links'} onClick={() => dispatch(setPageTitle('Your Expenses'))}>Expenses</Link>
            </div>
            <div className={'row mx-0 navigation'}>
                <Link to={'/transactions'} className={'links'} onClick={() => dispatch(setPageTitle('Transaction History'))}>Transactions</Link>
            </div>
            <div className={'row mx-0 navigation'}>
                <Link to={'/'} className={'links'}>Dashboard</Link>
            </div>
            <div className={'row mx-0 nav-logout'}>
                <button onClick={handleSignOut} id={'logout-button'}>Logout</button>
            </div>
        </>
    )
}

export default Navbar;