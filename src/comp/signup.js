import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addacc } from "../action/login";
import { useDispatch } from "react-redux";
import { switchcom } from "../action/switch";

export default function Log() {
    
    const state = useSelector((state) => state.login);
    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [err,setErr] = useState("");
    const dispatch = useDispatch()
    function login(e) {
        e.preventDefault()
        state.map((item)=>{
            if (email =="" || user=="" || password =="") {
                setErr("All fields are mandatory")
            }
            else if (item.email === email|| item.user === user ) {
                setErr("Account already exists")
            }
            else {
                const action = {user:user,email:email,pass:password}
                dispatch(addacc(action))
                dispatch(switchcom("signin"))
                
                
            }
        })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            
            <div className="px-20 py-20 mt-4 text-left bg-white shadow-lg">
                
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-20 h-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                </div>
                <h3 className="text-2xl mt-1 font-bold text-center">Login <span style={{ color: "purple" }}>to </span>your <span style={{ color: "purple" }}>account</span></h3>
                <form action>
                    <div className="mt-6">
                    <div>
                            <label className="block" htmlFor="email">User <label>
                                <input onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder="User name" className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                            </label></label></div>
                        <div>
                            <label className="block" htmlFor="email">Email <label>
                                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"  required />
                            </label></label></div>
                        <div className="mt-4">
                            <label className="block">Password <label>
                                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                            </label></label></div>
                        <div className="flex items-baseline justify-between">
                            <button onClick={(e)=>login(e)} className="px-10 py-2 mt-4 text-white bg-violet-600 rounded-lg hover:bg-blue-900" >Login</button>                           
                            <a onClick={()=>dispatch(switchcom("signin"))} className="text-sm text-violet-700 hover:underline" >Sign In</a>
                        </div>
                        <span className="text-xs tracking-wide text-red-600">{err}</span>
                    </div>
                </form>
            </div>
        </div>


    )
}
