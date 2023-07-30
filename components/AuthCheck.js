'use client';
import { useSession } from "next-auth/react";
import React from "react";
export default function AuthCheck({children}){
    const {data : session , status} = useSession()
    console.log(session,status)

    if(status=== 'authenticated'){
        return <>{children}</>
    }else{
        return <></>
    }
}
