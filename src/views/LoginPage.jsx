import './loginStyles.sass'
import {useState} from "react";

function LoginPage() {
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // const passwordRegex = ''

    const [inputError, setInputError] = useState({
        nameError: '',
        emailError: '',
        ageError: '',
        expenseError: '',
        submitError: ''
    });

    const [tempData, setTempData] = useState({
        name: '',
        email: '',
        age: '',
        expense: ''
    });

    const handleEmailChange = (event) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setTempData({...tempData, name: event.target.value})
        if (!event.target.value){
            setInputError({...inputError, nameError: 'Must enter a name'})
        }
        else if (emailRegex.test(event.target.value))
            setInputError({...inputError, nameError: 'Incorrect name format'})
        else
            setInputError({...inputError, nameError: ''})
    };


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={'w-100 h-100'} id={'login-container'}>
                <div className={'d-flex justify-content-center'} id={'inner-login-container'}>
                    <div className={'d-flex'}>
                        <p>Sign up</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className='labels'>
                            <input
                                className='inputs'
                                type='text'
                                placeholder='enter name'
                                onChange={handleEmailChange}
                            />
                            {/*{inputError.nameError && <p className='error'>{inputError.nameError}</p>}*/}
                        </label>
                        <label className='labels'>
                            <input
                                className='inputs'
                                type='text'
                                placeholder='enter email'
                                onChange={handleEmailChange}
                            />
                            {/*{inputError.nameError && <p className='error'>{inputError.nameError}</p>}*/}
                        </label>
                        <label className='labels'>
                            <input
                                className='inputs'
                                type='text'
                                placeholder='enter password'
                                // onChange={}
                            />
                            {/*{inputError.nameError && <p className='error'>{inputError.emailError}</p>}*/}
                        </label>
                        <div className='d-flex justify-content-center mt-1'>
                            <input type="submit" id='submit-button'/>
                        </div>
                        {/*{inputError.submitError && <p className='error text-center'>{inputError.submitError}</p>}*/}
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage