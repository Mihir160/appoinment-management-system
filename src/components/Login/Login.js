import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Context/Authprovider';
const Login = () => {
    const { login, googleSignIn,facebookSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const googlProvider = new GoogleAuthProvider()
    const faceboolProvider = new FacebookAuthProvider();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                
                form.reset()
                navigate('/')
            
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
         
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googlProvider)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                navigate('/')

            })
            .catch(error => console.error(error))
    }

    const handleFacebookSignIn = () => {
        facebookSignIn(faceboolProvider)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                navigate('/')

            })
            .catch(error => console.error(error))
    }
    return (
        <div className="relative">
            <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col justify-center items-center  xl:flex-row">
                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                        <form onSubmit={handleLogin}>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="email"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    placeholder="enter your email"
                                    required
                                    type="email"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                    name="email"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    className="inline-block mb-1 font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    placeholder="enter your password"
                                    required
                                    type="password"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                    name="password"
                                />
                            </div>


                            <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-gray-800 focus:shadow-outline focus:outline-none"
                                >
                                    Login
                                </button>

                                <div className='flex gap-4'>
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="submit"
                                        className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-gray-800 focus:shadow-outline focus:outline-none"
                                    >
                                        Google <span className='mx-2'><FaGoogle></FaGoogle></span>
                                    </button>
                                    <button
                                        onClick={handleFacebookSignIn}
                                        type="submit"
                                        className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-gray-800 focus:shadow-outline focus:outline-none"
                                    >
                                        Facebook <span className='mx-2'><FaFacebook></FaFacebook></span>
                                    </button>
                                </div>

                                <p className="text-xs text-red-600 sm:text-sm">
                                  {error}
                                </p>
                            </div>
                            <p className="text-xs text-gray-600 sm:text-sm">
                                You have no account please <Link className='underline' to='/register'><span className='text-orange-600'>register</span></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;