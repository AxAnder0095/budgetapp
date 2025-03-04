import {signOut } from "firebase/auth";
import {auth} from "../../firebase/config.js";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/userSlice.js";
import {Link} from "react-router-dom";

function Navbar() {
    const dispatch = useDispatch();
    const handleSignOut = () => {
        if (confirm("Are you sure you want to logout?")){
            signOut(auth).then(() => {
                // sigh out successful
                dispatch(setUser(null))
            }).catch((error) => {
                // an error occurred
                console.log(error)
            })
        }
    }

    return (
        <>
            <div className={'row navigation'}>
                <Link to={'/'}>Dashboard</Link>
            </div>
            <div className={'row navigation'}>
                <Link to={'/'}>Enter Expense</Link>
            </div>
            <div className={'row navigation'}>
                <Link to={'/'}>Transactions</Link>
            </div>
            <div className={'row navigation'}>
                <Link to={'/'}>Dashboard</Link>
            </div>
            <div className={'row'}>
                <button onClick={handleSignOut}>Logout</button>
            </div>
        </>
    )
}

export default Navbar;