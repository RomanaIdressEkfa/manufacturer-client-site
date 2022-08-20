import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/login1.jpg'
// import Footer from '../Shared/Footer';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let errorMessage;

    if (error || gError || updateError) {
        errorMessage = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (user || gUser) {
        console.log(user || gUser);

    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        navigate('/Appointment');
    }
    return (
        <div className='flex h-screen justify-center items-center mt-20' style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="name" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"   {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}



                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Enter your Email" className="input input-bordered w-full max-w-xs"   {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },

                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" placeholder="Enter your passwords" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },

                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 Character or longer!!!'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}


                            </label>
                        </div>


                        {errorMessage}
                        <input className='btn w-full max-w-xs' type="submit" value='Signup' />

                    </form>
                    <p> <small>Already have an Account ? <Link className="text-secondary" to="/login">  Please Login</Link></small> </p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default SignUp;