"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactFlagsSelect from "react-flags-select";
import Link from 'next/link';

type UserSubmitForm = {
    selected: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstname: string;
    lastname: string;
    countrycode: string;
    statecode: string;
    phonenumber: string;
    acceptTerms: Boolean
};
function signup() {
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
        <div className="w-full p-4 h-max m-auto flex align-middle self-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex m-auto flex-col space-y-4 w-full max-w-[36rem] h-fit border-0 border-gray-500 px-6 py-10 text-xs  pt-5'>
                <div className=" flex flex-row gap-1">
                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Country / Region:</label >
                    <div className="w-full flex flex-col">  <ReactFlagsSelect
                        selected={selected}

                        onSelect={(code) => setSelected(code)}
                        className='font-sm text-xs w-full '
                        {...register("selected", { required: true })}
                    />
                        <div className="text-red-600 text-xs">{errors.selected?.message}</div></div>

                </div>

                <div className="flex flex-row align-middle self-center w-full gap-1">
                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Please select trade role:</label >
                    <div className="w-full flex flex-col">
                        <div className="flex flex-row w-full mt-2 space-x-2">
                            <input id='buyer' onChange={() => setRadio('buyer')} type="radio" value='buyer' className='p-2' name="radAnswer" checked /> <label htmlFor='buyer' id='buyer'>Buyer</label>
                            <input id='seller' type="radio" onChange={() => { setRadio('seller') }} value='seller' name="radAnswer" /> <label htmlFor='seller'>Seller</label>
                            <input id='both' onChange={() => setRadio("both")} value='both' type="radio" name="radAnswer" /> <label htmlFor='both'>Both</label>
                        </div>
                        <div className="text-red-600 text-xs">{errors.username?.message}</div></div>

                </div>

                <div className="flex flex-row align-middle self-center w-full gap-1">
                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Email:</label >
                    <div className="w-full flex flex-col"> <input
                        type="text"
                        placeholder='Please set the email as the login name'
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

                <div className="flex flex-row align-middle self-center w-full gap-1">
                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Login Password:</label >
                    <div className="w-full flex flex-col">     <input
                        type="password"
                        placeholder='Set the login password'
                        {...register('password')}
                        className='border-[1px]  p-2 border-gray-300 w-full'
                    />
                        <div className="text-red-600 text-xs">{errors.password?.message}</div>  </div>
                </div>
                <div className="flex flex-row align-middle self-center w-full gap-1">

                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Confirm Password:</label >
                    <div className="w-full flex flex-col">   <input
                        type="password"
                        {...register('confirmPassword')}
                        placeholder='Enter the login password again'
                        className='border-[1px]  p-2 border-gray-300 w-full'
                    /></div>
                    <div className="text-red-600 text-xs">
                        {errors.confirmPassword?.message}
                    </div>
                </div>
                <div className="flex flex-row align-middle self-center w-full gap-1">

                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Company Name:</label >
                    <div className="w-full flex flex-col">   <input
                        type="text"
                        placeholder='Please enter your company name'
                        {...register('confirmPassword')}
                        className='border-[1px]  p-2 border-gray-300 w-full'
                    /></div>
                    <div className="text-red-600 text-xs">
                        {errors.confirmPassword?.message}
                    </div>
                </div>

                <div className="flex flex-row align-middle self-center w-full gap-1">

                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Full name:</label >
                    <div className="w-full flex flex-col"> <section className='w-full gap-2 flex flex-row'> <input
                        type="text"
                        {...register('firstname', {
                            required: 'Please enter your first name'
                        })}
                        className='border-[1px]  p-2 border-gray-300 w-full'
                        placeholder='Please enter your first name' /> <input
                            type="text" placeholder='Please enter your last name'
                            {...register('lastname', {
                                required: "Please enter your last name"
                            })}
                            className='border-[1px]  p-2 border-gray-300 w-full'
                        /></section> </div>
                    <div className="text-red-600 text-xs">
                        {errors.firstname?.message} <br />
                        {errors.lastname?.message}
                    </div>
                </div>
                <div className="flex flex-row align-middle self-center w-full gap-1">

                    <label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' >Tel:</label >
                    <div className="w-full flex flex-col"> <section className='w-full gap-2 flex flex-row align-middle self-center'> <input
                        type="text"
                        {...register('countrycode', {
                            required: 'Please enter less than 14 digits'
                        })}
                        className='border-[1px]  p-2 border-gray-300 w-[25%]'
                        placeholder='+1' /> <span className='text-gray-800 align-middle self-center m-auto flex'>-</span> <input
                            type="text"
                            {...register('statecode',
                                {
                                    required: 'Please enter less than 14 digits'
                                }
                            )}
                            className='border-[1px]  p-2 border-gray-300 w-[25%]'
                            placeholder='area' /> <span className='text-gray-800 align-middle self-center m-auto flex'>-</span><input
                            type="text" placeholder='Phone number'
                            {...register('phonenumber', {
                                required: "Please enter less than 14 digits"
                            })}
                            className='border-[1px]  p-2 border-gray-300 w-full'
                        /></section> </div>
                    <div className="text-red-600 text-xs">
                        {errors.phonenumber?.message}
                    </div>
                </div>

                <div className="flex flex-row align-middle self-center justify-start w-full gap-1">

                    <label className='min-w-28 flex text-end pr-2 align-start self-start text-xs text-gray-500' ></label >
                    <div className="w-full flex justify-start flex-col">
                        <section className='w-fit flex flex-row'>
                            <input
                                type="checkbox"
                                {...register('acceptTerms')}
                                className='border-[1px] flex align-start items-start p-2 border-gray-300 w-fit'
                            />  <label className='min-w-28pr-2 align-middle self-center text-xs text-wrap text-left text-gray-500 pl-2' htmlFor="acceptTerms">

                                I agree to (a)<Link className='text-orange-500' href='/'>Free Membership Agreement</Link>, (b) <Link className='text-orange-500' href='/'>Terms of Use,</Link> and (c) <Link className='text-orange-500' href='/'>Privacy Policy</Link>. I agree to receive more information from Alibaba.com about its products and services.
                            </label ></section>

                        <div className="text-red-600 text-xs">{errors.acceptTerms?.message}</div></div>
                </div>

                <div className="flex flex-row align-start self-start w-full gap-1"><label className='min-w-28 text-end pr-2 align-middle self-center text-xs text-gray-500' ></label >
                    <button type="submit" className="w-fit px-5 py-4 text-sm bg-orange-500 text-white">
                        Agree and Register
                    </button>

                </div>
            </form>
        </div>
    );
};
export default signup