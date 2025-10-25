import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
    const {signup, user} = useAuth()
    const navigate = useNavigate()
    

    useEffect(() => {
        console.log('from signup',user);
    }, [user])
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        // return
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        // console.log(email);
        
        try {
            await signup(email, password, name, photoUrl)
            // toast.success('Account created successfully')
            navigate('/')
        } catch (err) {
            console.log(err);
            toast.error('Incorrect information')
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
                        <div className="card bg-base-100 w-md h-120 shrink-0 shadow-2xl">
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
                                        <div>Already have an account? <a className="link link-hover">Signup</a></div>
                                        <button className="btn w-xs btn-primary mt-4">Signup</button>
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