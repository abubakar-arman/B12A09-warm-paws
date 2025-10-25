import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { emailRegex, passwordRegex } from "../lib/utils";

const Signup = () => {
    const { signup, user, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState(null)


    const errText = (`Enter a valid password:
    - Must have an Uppercase letter in the password 
    - Must have a Lowercase letter in the password  
    - Length must be at least 6 character 
    `)


    // useEffect(() => {
    //     console.log('from signup', user);
    // }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError(null)

        // return
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        // console.log(email);

        if (!email || !password || !name || !photoUrl) {
            toast.error('Fill in the form correctly')
            return
        }
        if (!emailRegex.test(email)) {
            toast.error('Type your email correctly')
            return
        }
        if (!passwordRegex.test(password)) {
            setError(errText)
            return
        }

        try {
            await signup(email, password, name, photoUrl)
            // toast.success('Account created successfully')
            navigate('/')
        } catch (err) {
            if(err.code === 'auth/email-already-in-use'){
                toast.error('Email is already in use')
                return
            }
            toast.error('Incorrect information')
            // console.log(err.code)
        }
    }

    const handleGoogleLogin = async (e) => {
        e.preventDefault()

        try {
            await loginWithGoogle()
            navigate('/')
        } catch(err){
            toast.error('Error occured while Logging in')
            return err.message
        }
    }
    return (
        <div>
            <div className="lg:hero bg-base-200 lg:min-h-screen">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img
                            src="https://i.postimg.cc/d1KvdCW4/Winter-Wellness-Check-Up.png"
                            className="w-md object-cover rounded-lg shadow-2xl h-120 hidden lg:block"
                        />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className="card bg-base-100 w-md min-h-120 shrink-0 shadow-2xl">
                            <h3 className='text-3xl text-center font-bold pt-8'>Create an account</h3>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <fieldset className="fieldset w-xs mx-auto">
                                        <label className="label">Name</label>
                                        <input name="name" type="text" className="input" placeholder="Name" />
                                        <label className="label">Email</label>
                                        <input name="email" type="email" className="input" placeholder="Email" />
                                        <label className="label">Photo URL</label>
                                        <input name="photoUrl" type="text" className="input" placeholder="Photo URL" />
                                        <label className="label">Password</label>
                                        <input name="password" type="password" className="input" placeholder="Password" />
                                        {error && <p className="text-red-600">* Choose a strong password of at least 6 characters with upper and lower case letters</p>}
                                        <div>Already have an account? <Link to='/login' className="link link-hover">Login here.</Link></div>
                                        <button className="btn w-xs btn-primary mt-4">Signup</button>
                                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-3">
                                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                            Signup with Google
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;