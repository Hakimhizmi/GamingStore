import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchcom, sigin } from "../action/switch";
import Swal from "sweetalert2";



export default function Login() {
    const state = useSelector((state) => state.login);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState("");
    const dispatch = useDispatch()

    function login() {
        state.map((item) => {
            if (item.email === email && item.pass === password) {
                dispatch(sigin(true))
                Swal.fire({
                    title: "welcome to Ultra PC " + item.user,
                    position: "center",
                    background: "transparent",
                    color: "purple",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 1700,
                });
            }
            else {
                setErr("information is incorrect")



            }
        })
    }

    return (
        <>


            <div className="flex items-center justify-center min-h-screen bg-gray-100">

                <div className="px-20 mb-5 py-20 mt-4 text-left bg-white shadow-lg">

                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-20 h-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                    </div>
                    <h3 className="text-2xl mt-1 font-bold text-center">Login <span style={{ color: "purple" }}>to </span>your <span style={{ color: "purple" }}>account</span></h3>
                    <form action>
                        <div className="mt-6">
                            <div>
                                <label className="block" htmlFor="email">Email <label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" required placeholder="Email" className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </label></label></div>
                            <div className="mt-4">
                                <label className="block">Password <label>
                                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" required placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </label></label></div>
                            <div className="flex items-baseline justify-between">
                                <button onClick={() => { login() }} className="px-10 py-2 mt-4 text-white bg-violet-600 rounded-lg hover:bg-blue-900" >Login</button>
                                <a onClick={() => dispatch(switchcom("signup"))} className="text-sm text-violet-700 hover:underline">Sign Up</a>
                            </div>
                            <span className="text-xs tracking-wide text-red-600">{err}</span>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
