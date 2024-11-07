"use client"
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactFlagsSelect from "react-flags-select";
import Link from 'next/link';
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

type UserSubmitForm = {

    email: string;
    password: string;
};
function login() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>();

    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
    };
    const [selected, setSelected] = useState("");
    const [radio, setRadio] = useState('')
    return (
        <div className="w-full p-4 h-max m-auto flex align-middle self-center ">
            <form onSubmit={handleSubmit(onSubmit)} className='flex m-auto flex-col space-y-4 w-full max-w-[25rem] h-fit border-2 border-gray-500 px-6 py-10 text-xs  pt-5'>


                <div className="flex flex-col align-start justify-start self-start w-full gap-1">
                    <label className='text-end pr-2 align-start self-start justify-start text-xs font-bold text-black' >Email:</label >
                    <div className="w-full flex flex-col"> <input
                        type="text"
                        placeholder='Enter your email or member ID'
                        {...register("email", {
                            required: "Please enter your email address",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                        className='border-[1px]  p-2 border-gray-300 w-full'
                    />
                        <div className="text-red-600 text-xs">{errors.email?.message}</div> </div>
                </div>

                <div className="flex flex-col align-start self-start w-full gap-1"><span className='w-full flex justify-between'>
                    <label className='text-end pr-2 align-start self-start justify-start text-xs font-bold text-black' >Password:</label ><Link className='text-blue-600' href='/'>Forgot password?</Link></span>
                    <div className="w-full flex flex-col">     <input
                        type="password"
                        placeholder='Enter password'
                        {...register('password')}
                        className='border-[1px]  p-2 border-gray-300 w-full'
                    />
                        <div className="text-red-600 text-xs">{errors.password?.message}</div>  </div>
                </div>



                <div className="flex flex-row align-start self-start w-full gap-1"><button type="submit" className="w-full px-2 mt-3 py-2 rounded-sm text-sm bg-orange-500 hover:bg-orange-700 text-white">
                    Sign in
                </button>

                </div>
                <div className="flex pt-[-10px] justify-between">
                    <Link className='text-blue-600' href='/'>Mobile number sign in</Link>
                    <Link className='text-blue-600' href='/signup'>Create account</Link>
                </div>
                <hr className='border-[1px] border-gray-400 my-4 w-full' />
                <span className="w-full text-sm flex gap-2 flex-row align-middle self-center">
                    <span className="flex align-middle self-center">Sign in with:</span>
                    <FcGoogle className="size-8" />
                    <IoLogoFacebook className="size-9 text-blue-700 " />
                    <FaLinkedin className="size-8 text-cyan-700" />
                </span>
            </form>
        </div>
    );
};
export default login