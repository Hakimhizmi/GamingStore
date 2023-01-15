import React, { useState } from "react";
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { del } from "../action/addtocart";





export default function Shop() {

  const state=useSelector((state)=> state.shopingcart)
  let listof= {};
  
  const dispatche=useDispatch()

  
  const calcul = () => {
    const allElements = document.querySelectorAll('.priceh');
    let total = 0 ;
    for (const element of allElements) {
      total += parseInt(element.textContent)
    }
    return total
  }
  
  
  return (
    <div >
      <div className="background-container"></div>
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
          
        >
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title" id="exampleModalLabel">
                Your Shopping Cart
              </h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-image">
                <thead >
                  <tr>
                    <th scope="col" />
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {state.map((item,index) => {
                    
                    listof[item.title] = item.price ;
                    
                    return (
                      <tr key={item}>
                        <td className="w-25">
                          <img
                            src={item.img}
                            className="img-fluid img-thumbnail w-40 h-20"
                            alt="Sheep"
                          />
                        </td>
                        
                        <td >{item.title}</td>
                        <td id={"l"+item.title+""} className="priceh" >{item.price}$</td>
                        <td className="qty">
                          <input
                            type="number"
                            className="form-control"
                            id="input1"
                            defaultValue={1}
                            onChange = {(e)=>{calcul() ; document.getElementById("l"+item.title+"").innerHTML=(item.price * e.target.value)+"$" }}
                          />
                        </td>
                        
                        <td>
                          <a  className="btn btn-danger btn-sm" onClick={()=>{dispatche(del(index))}}>remove</a>
                        </td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <h5>
                  Total: <span className="price text-success">{calcul()}$</span>
                </h5>
              </div>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-between" >
              <button
                type="button"
                className="btn btn-danger bg-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn bg-success">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


