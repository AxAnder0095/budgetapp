import {signOut } from "firebase/auth";
import {auth} from "../firebase/config.js"
import {useDispatch} from "react-redux";
import {setUser} from '../store/userSlice.js'

function Dashboard (){
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
            <h1>Dashboard Page</h1>
            <button onClick={handleSignOut}>Logout</button>
        </>
    )
}


export default Dashboard