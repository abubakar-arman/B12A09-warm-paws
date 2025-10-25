import { useAuth } from '../contexts/AuthContext';
import { Link, useLocation } from 'react-router';
import toast from 'react-hot-toast';
import { emailRegex } from '../lib/utils';

const PasswordReset = () => {
    const { resetPassword } = useAuth()
    const location = useLocation()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(e.target);

        const email = e.target.email.value

        if(!emailRegex.test(email)){
            toast.error('Type your email correctly')
            return
        }
        
        try {
            await resetPassword(email)
            toast.success('Check your email to reset password.')
            window.open('https://mail.google.com/', '_blank', 'noopener,noreferrer')
        } catch (err) {
            // console.log(err.message);
            // toast.error('Password reset failed',err)
            return err

        }
    }

    return (
        <div>
            <div className="lg:hero bg-base-200 lg:min-h-screen">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    <div className='flex flex-col gap-10'>
                        <div className="card bg-base-100 w-md h-120 shrink-0 shadow-2xl">
                            <h3 className='text-3xl text-center font-bold pt-8'>Forgot your password?<br />Reset here.</h3>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <fieldset className="fieldset w-xs mx-auto">
                                        <label className="label">Email</label>
                                        <input name='email' type="email" className="input beautify" defaultValue={location.state.email} placeholder="Email" />
                                        <button className="btn w-xs btn-primary mt-4">Reset Password</button>
                                        <Link to='/login' className="link link-hover mt-10">Go to Login page.</Link>
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

export default PasswordReset;