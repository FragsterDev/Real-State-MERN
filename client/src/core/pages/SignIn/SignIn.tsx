import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

    const fieldnames = ['Email', 'Password']

    return (
        <div className='max-w-lg mx-auto p-3'>
            <p className='text-center text-3xl font-semibold my-7'>Sign In</p>

            <form className='flex flex-col gap-4'>
                {
                    fieldnames && fieldnames.map((fieldname, index) => {
                        return (
                            <input type="text" placeholder={fieldname} key={index} id={fieldname}
                                className='focus:outline-none p-3 bg-white rounded-lg'
                            />
                        )
                    })
                }

                <button className='bg-slate-700 p-3 rounded-lg hover:cursor-pointer'>
                    <p className='text-center text-white'>SIGN IN</p>
                </button>

                <button className='bg-red-700 p-3 rounded-lg hover:cursor-pointer'>
                    <p className='text-center text-white'>CONTINUE WITH GOOGLE</p>
                </button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Not a registered user ?</p>
                <Link to={'/sign-up'}>
                    <p className='text-blue-500 hover:underline hover:cursor-pointer'>Click here to Sign Up</p>
                </Link>
            </div>
        </div>
    )
}

export default SignIn