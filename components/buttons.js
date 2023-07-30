'use client';
import { useSession, signOut ,signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';


export function SignInButton(){
    const  {data : session , status} = useSession()
    if(status ==='loading'){
        return <>....</>
    }
    if(status === 'authenticated'){
       
    }
    return <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => signIn()}>Sign In</button>
}
export function SignOutButton(){
    return <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=>signOut()}>Sign Out</button>
}