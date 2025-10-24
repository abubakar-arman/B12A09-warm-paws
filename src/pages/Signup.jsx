const Login = () => {
    return (
        <div>
            <div class="lg:hero bg-base-200 lg:min-h-screen">
                <div class="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <img
                            src="https://i.postimg.cc/d1KvdCW4/Winter-Wellness-Check-Up.png"
                            class="w-md object-cover rounded-lg shadow-2xl h-120 hidden lg:block"
                        />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div class="card bg-base-100 w-md h-120 shrink-0 shadow-2xl">
                        <h3 className='text-3xl text-center font-bold pt-8'>Create an account</h3>
                            <div class="card-body">
                                <form>
                                    <fieldset class="fieldset w-xs mx-auto">
                                        <label class="label">Name</label>
                                        <input name="name" type="text" class="input" placeholder="Name" />
                                        <label class="label">Email</label>
                                        <input name="email" type="email" class="input" placeholder="Email" />
                                        <label class="label">Photo URL</label>
                                        <input name="photoUrl" type="text" class="input" placeholder="Photo URL" />
                                        <label class="label">Password</label>
                                        <input name="password" type="password" class="input" placeholder="Password" />
                                        <div>Already have an account? <a class="link link-hover">Login</a></div>
                                        <button class="btn w-xs btn-primary mt-4">Signup</button>
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

export default Login;