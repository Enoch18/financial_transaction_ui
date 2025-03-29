'use client';

import TextInput from "@components/FormInput/TextInput"
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

interface LoginProps{
    session: any;
}

const UserLogin = ({session}: LoginProps) => {
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const searchParams = useSearchParams();

    useEffect(() => {
        if(searchParams.get('error')){
            setError(searchParams.get('error') || '');
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }, [searchParams.get('error')])
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required!'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnChange: false,
        validationSchema: validationSchema,
        onSubmit: async (values:any) => {       
            setSubmitting(true);
            
            const data = {
                redirect: false,
                email: values.email,
                password: values.password,
            }

            await signIn('credentials', data).then((response:any) => {
                if(response?.ok){
                    window.location.href = '/wallet';
                }else{
                    setError(response?.error || '');
                    setTimeout(() => {
                        setError('');
                    }, 5000);
                }
                setSubmitting(false);
            });
        }
    });

    return (
        <div>
            <h4 className="text-2xl font-semibold">Login</h4><hr className="border-gray-300 mt-1" />
            <p className="text-sm mt-4">Login in order to transact!</p>

            <form onSubmit={formik.handleSubmit}>

                {error && <p className="mt-2 text-black font-bold" style={{color: 'red'}}>{error}</p>}

                <TextInput id="email" onChange={formik.handleChange} value={formik.values.email} label="Email Address*" />
                <TextInput id="password" type="password" onChange={formik.handleChange} value={formik.values.password} label="Password*" />

                <p className="mt-4">Don't have an account? <Link href="/auth/register" className="text-orange-600 font-semibold underline">Register</Link></p>

                <button className={`${submitting ? 'bg-orange-400' : 'bg-orange-700'} hover:bg-orange-900 p-2 px-4 rounded text-white font-semibold mt-4 cursor-pointer`} disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default UserLogin;