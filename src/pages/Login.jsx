import React from 'react';

const Login = () => {
    return (
        <div>
            <div class="lg:hero bg-base-200 lg:min-h-screen">
                <div class="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    <div className='flex flex-col gap-10'>
                        <div class="card bg-base-100 w-md h-120 shrink-0 shadow-2xl">
                        <h3 className='text-3xl text-center font-bold pt-8'>Log into your account</h3>
                            <div class="card-body">
                                <form>
                                    <fieldset class="fieldset">
                                        <label class="label">Email</label>
                                        <input type="email" class="input" placeholder="Email" />
                                        <label class="label">Password</label>
                                        <input type="password" class="input" placeholder="Password" />
                                        <div><a class="link link-hover">Forgot password?</a></div>
                                        <button class="btn w-xs btn-primary mt-4">Login</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="text-center lg:text-left">
                        <img
                            src="https://i.postimg.cc/G2ZDvX02/Winter-Grooming-Paw-Treatment.png"
                            class="w-md object-cover rounded-lg shadow-2xl h-120 hidden lg:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;