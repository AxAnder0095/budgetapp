import './loginStyles.sass'
import {useState} from "react";
import {auth} from "../firebase/config.js"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "firebase/auth";
import alert from "bootstrap/js/src/alert.js";
import {useDispatch} from "react-redux";
import {setUser} from '../store/userSlice.js'

function LoginPage() {
    const dispatch = useDispatch();
    const [loginType, setLoginType] = useState("login");
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            dispatch(setUser({id: user.uid, email: user.email}))
        } else {
            // User is signed out
            dispatch(setUser(null))
        }
    });

    const handleCredentials = (event) => {
        setUserCredentials({...userCredentials, [event.target.name]: event.target.value});
        console.log(userCredentials);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            // .then((userCredential) => {
            //     // Signed up
            //     dispatch(setUser({id: userCredential.user.uid, email: userCredential.user.email}))
            // })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            // .then((userCredential) => {
            //     // Signed in
            //     // const user = userCredential.user;
            //     console.log(userCredential.user)
            //     dispatch(setUser({id: userCredential.user.uid, email: userCredential.user.email}))
            //     // ...
            // })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handleForgotPassword = () => {
        const email = prompt('Please enter your email')
        sendPasswordResetEmail(auth, email)
        alert('email sent: Check your inbox for password reset instructions.')

    }

    return (
        <>
            <div className={''} id={'login-container'}>
                <div className={'inner-login-container'}>
                    <h1 className={'text-center'}>Welcome to the Budget App</h1>
                    <p className={'text-center mt-4'}>Login or signup to continue on. </p>
                    <div className={'signInButtons gap-3 mb-4'}>
                        <button className={`btn ${loginType === 'login' ? 'selected' : ''}`}
                                onClick={() => setLoginType('login')}>
                            Login
                        </button>
                        <button className={`btn ${loginType === 'signup' ? 'selected' : ''}`}
                                onClick={() => setLoginType('signup')}>
                            Sign Up
                        </button>
                    </div>
                    <form  id={'login-form'}>
                        <label className='labels'>
                            <p>Email</p>
                            <input
                                name={'email'}
                                className='inputs'
                                type='text'
                                placeholder='enter your email'
                                onChange={handleCredentials}
                            />
                            {/*{inputError.emailError && <p className='error'>{inputError.emailError}</p>}*/}
                        </label>
                        <label className='labels'>
                            <p>Password</p>
                            <input
                                name={'password'}
                                className='inputs'
                                type='text'
                                placeholder='enter your password'
                                onChange={handleCredentials}
                            />
                            {/*{inputError.nameError && <p className='error'>{inputError.emailError}</p>}*/}
                        </label>
                        <div className='d-flex justify-content-center mt-1'>
                            {
                                loginType === 'login' ?
                                    <input type="submit" id='submit-button' value={'Sign In'} onClick={handleLogin}/>
                                    :
                                    <input type="submit" id='submit-button' value={'Sign Up'} onClick={handleSignUp}/>
                            }
                        </div>

                        {
                            error &&
                            <div className={'error text-center mt-3'}>
                                {error}
                            </div>
                        }

                        <p onClick={handleForgotPassword}>Forgot password?</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage