import React, { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../action/addtocart";
import { delpro, show } from "../action/product";

export default function Card(props) {
  const [sta, setSta] = useState();
  const state = useSelector((state) => state.shopingcart);
  const dispatch = useDispatch();

  function swalert() {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {

      if (result.dismiss === Swal.DismissReason.timer) {
        dispatch(delpro(props.index));
      }
    });
  }

  function click(e) {
    e.preventDefault();
    const found = state.some((el) => el.title === props.title);
    if (!found) {
      const action = { title: props.title, price: props.price, img: props.img };
      dispatch(add(action));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "product added to cart",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "product is already added to your cart!",
      });
    }
  }

  return (
    <div className="card">
      <div className="flex p-6 font-mono">
        <div className="flex-none w-48 mb-10 relative  before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
          <img
            src={props.img}
            alt="hh"
            className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <form className="flex-auto pl-6">
          <div
            style={{
              background:
                "linear-gradient(109.6deg, rgb(157, 75, 199) 11.2%, rgb(119, 81, 204) 83.1%)",
            }}
            className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6"
          >
            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
              {props.title}
            </h1>
            <div className="relative text-lg text-white">{props.price}$</div>
            <div className="relative uppercase text-teal-400 ml-3">
              {props.stock} In stock
            </div>
          </div>
          <div className="flex items-baseline my-6"></div>
          <div className="flex space-x-2 mb-4 text-sm font-medium">
            <div className="flex space-x-4">
              <button
                style={{
                  background:
                    "linear-gradient(109.6deg, rgb(157, 75, 199) 11.2%, rgb(119, 81, 204) 83.1%)",
                }}
                onClick={click}
                className="px-6 btnby h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                onClick={() => {
                  swalert();
                }}
                className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900"
                type="button"
              >
                Remove Product
              </button>
            </div>
            <button
              onClick={() => {
                dispatch(show(props.index));
              }}
              className="flex-none flex items-center justify-center w-12 h-12 text-black"
              type="button"
              aria-label="Like"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          {props.sta ? (
            <p className="text-xs leading-6 text-slate-500">
              {props.description}
            </p>
          ) : (
            <span></span>
          )}
        </form>
      </div>
    </div>
  );
}
