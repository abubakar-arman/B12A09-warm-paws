import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Login = () => {
    const { login, user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from || '/'

    useEffect(() => {
        console.log('user', user);
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(location);
        // console.log(e.target);

        const email = e.target.email.value
        const password = e.target.password.value
        try {
            await login(email, password)
            navigate(from)
        } catch (err) {
            console.log(err.message);
            toast.error('Invalid Username or Password')

        }
    }

    return (
        <div>
            <div className="lg:hero bg-base-200 lg:min-h-screen">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    <div className='flex flex-col gap-10'>
                        <div className="card bg-base-100 w-md h-120 shrink-0 shadow-2xl">
                            <h3 className='text-3xl text-center font-bold pt-8'>Log into your account</h3>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <fieldset className="fieldset w-xs mx-auto">
                                        <label className="label">Email</label>
                                        <input name='email' type="email" className="input" placeholder="Email" />
                                        <label className="label">Password</label>
                                        <input name='password' type="password" className="input" placeholder="Password" />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button className="btn w-xs btn-primary mt-4">Login</button>
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