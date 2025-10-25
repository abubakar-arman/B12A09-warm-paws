import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { emailRegex, passwordRegex } from '../lib/utils';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';

const Login = () => {
    const { login, loginWithGoogle, user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    const from = location.state?.from || '/'

    // useEffect(() => {
    //     console.log('user', user);
    // }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEmailLogin = async (e) => {
        e.preventDefault()
        // console.log(formData)
        // console.log(e.target);

        // const email = e.target.parentNode.parentNode.email.value
        // const password = e.target.parentNode.parentNode.password.value

        if (!formData.email || !formData.password) {
            toast.error('Fill in the form correctly')
            return
        }
        if (!emailRegex.test(formData.email)) {
            toast.error('Type your email correctly')
            return
        }
        if (!passwordRegex.test(formData.password)) {
            toast.error(`Enter a valid password:
                - Must have an Uppercase letter in the password 
                - Must have a Lowercase letter in the password  
                - Length must be at least 6 character 
                `)
            return
        }
        toast('pass')
        try {
            await login(formData.email, formData.password)
            navigate(from)
        } catch (err) {
            toast.error('Invalid Username or Password')
            // console.log(err.message);
            return err.message

        }
    }

    const handleGoogleLogin = async (e) => {
        e.preventDefault()

        try {
            await loginWithGoogle()
            navigate(from)
        } catch (err) {
            toast.error('Error occured while Logging in')
            return err.message
        }
    }
    const handlePasswordShow = (e) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    }

    return (
        <div>
            <div className="lg:hero bg-base-200 lg:min-h-screen">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    <div className='flex flex-col gap-10'>
                        <div className="card bg-base-100 w-md h-120 shrink-0 shadow-2xl">
                            <h3 className='text-3xl text-center font-bold pt-8'>Log into your account</h3>
                            <div className="card-body">
                                <form>
                                    <fieldset className="fieldset w-xs mx-auto">
                                        <label className="label">Email</label>
                                        <input id='email' name='email' value={formData.email} onChange={handleChange} type="email" className="input beautify" placeholder="Email" />
                                        <label className="label">Password</label>
                                        <div className='relative'>
                                            <input name='password' type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} className="input beautify" placeholder="Password" />
                                            <button onClick={handlePasswordShow} className='btn btn-ghost btn-xs absolute top-2 right-2 z-50'>
                                                {!showPassword ? <FaEye className='size-3' /> : <FaEyeSlash />}
                                            </button>
                                        </div>
                                        <Link to='/password-reset' state={{ email: formData.email }} className="link link-hover">Forgot password?</Link>
                                        <button onClick={handleEmailLogin} className="btn w-xs btn-primary mt-4">Login</button>
                                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-3">
                                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g>
                                                <path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                            Login with Google
                                        </button>
                                        <div> Don't have an account? <Link to='/signup' className="link link-hover">Create an account.</Link></div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <img
                            src="https://i.postimg.cc/G2ZDvX02/Winter-Grooming-Paw-Treatment.png"
                            className="w-md object-cover rounded-lg shadow-2xl h-120 hidden lg:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;