import './loginStyles.sass'
import {useState} from "react";
import {Link} from "react-router-dom";
// import {auth} from "../firebase/config.js"

function LoginPage() {
    // const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState("login");
    const [userCredentials, setUserCredentials] = useState({});
    // const [error, setError] = useState('');



    // const [inputError, setInputError] = useState({
    //     emailError: '',
    //     passwordError: '',
    // });
    //
    // const [tempData, setTempData] = useState({
    //     email: '',
    //     password: '',
    // });
    //
    // const handleEmailChange = (event) => {
    //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //     setTempData({...tempData, email: event.target.value})
    //     if (!event.target.value){
    //         setInputError({...inputError, emailError: 'Must enter an email address'});
    //     }
    //     else if (emailRegex.test(event.target.value))
    //         setInputError({...inputError, emailError: 'Incorrect email format'})
    //     else
    //         setInputError({...inputError, emailError: ''})
    // };
    //
    //
    const handleCredentials = (event) => {
        setUserCredentials({...userCredentials, [event.target.name]: event.target.value});
        console.log(userCredentials);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <form onSubmit={handleSubmit} id={'login-form'}>
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
                                    <input type="submit" id='submit-button' value={'Sign In'}/>
                                    :
                                    <input type="submit" id='submit-button' value={'Sign Up'}/>
                            }
                        </div>
                        {/*{inputError.submitError && <p className='error text-center'>{inputError.submitError}</p>}*/}
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage