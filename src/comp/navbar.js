import React, { useState } from "react";
import Shop from "./shop";
import {useDispatch, useSelector} from 'react-redux'
import { sigin } from "../action/switch";

export let  searchtext = "" ;

export default function Nav() {
  
  let state=useSelector((state)=> state.shopingcart)
  const dispatch = useDispatch()

  return (
    <div>
      <Shop /> 
    <nav className="bg-white border-gray-200 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a className="flex items-center">
          
          <img
            src="https://cdn-icons-png.flaticon.com/512/897/897295.png"
            className="mr-3 h-6 sm:h-9  "
            alt="Flowbite Logo"
            id="logoico"
          />
          
          <span className="self-center spncol text-2xl font-semibold whitespace-nowrap dark:text-black" >
            Ult<span style={{color:"purple"}}>ra PC</span> 𝓰ₐₘᵢₙ𝓰
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="flex yy  flex-col p-4 mt-3   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li >
              <a
                href="#"
                className="text-violet-800 text-xl	 violet text-decoration-none  pr-4 pl-3 text-violet bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-2 dark:text-violet "
                aria-current="page"  
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-decoration-none py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-blue-100 md:hover: md:border-0 md:hover:text-blue-200 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 text-decoration-none pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 text-decoration-none pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 text-decoration-none pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <li>
              <a
              onClick={()=>{dispatch(sigin(false))}}
                href="#"
                className="block py-2 pr-4 text-decoration-none pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                disconnect
              </a>
            </li>
          </ul>
        </div>

        <ul className="uu">
          <li>
            <div class="text-center">
              
            </div>
          </li>
          <li  class="font-sans uu block  lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <a
              
              role="button"
              class="relative flex "  data-toggle="modal" data-target="#cartModal"
            >
              
              <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {state.length}
              </span>
            </a>
          </li>
          <li>
            <form className="frm">
              <input
                type="search"
                required
                className="inp"
                placeholder="Search Here ..."
                onChange={(e)=>{window.location.href = "#myDiv" ;return searchtext = e.target.value } }
                
              />
              <i className="fa fa-search" />
              <a href="javascript:void(0)" id="clear-btn" className="aa">
                Clear
              </a>
            </form>
            
          </li>
        </ul>
      </div>
      
    </nav>
    </div>
  );
}
