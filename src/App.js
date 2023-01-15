import "./App.css";
import Nav from "./comp/navbar";
import Card from "./comp/card";
import React from "react";
import { searchtext } from "./comp/navbar";
import Main from "./comp/main";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { adddata } from "./action/product";
import Login from "./comp/login";
import Log from "./comp/signup";



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("https://api.npoint.io/ce679b345e7e8bbe165f").then((response) => {
      dispatch(adddata(response.data));
    });
  }, []);

  

  const state = useSelector((state) => state.product)
  const statelog = useSelector((state)=> state.logswitch.statelogin)
  const statwswitch = useSelector((state) => state.logswitch.stat)


  return (
    <div>
      
      {statelog === true ?
        <>
          <Nav />
          <Main />
          <h2 className="display-3 font-weight-normal mb-5" id="hh1">POPULAR PRODUCTS</h2>
          <div className="grid grid-cols-2" id="myDiv">
            {
              state.map((pro, index) => {
                if ((pro.title).toUpperCase().indexOf(searchtext.toUpperCase()) > -1) {
                  return (
                    <Card title={pro.title} price={pro.price} img={pro.images} description={pro.description} stock={pro.stock} index={index} sta={pro.sta} />
                  )
                }

              })
            }
          </div>

        </>
        : 
        statwswitch === "signup" ?  <Log /> : <Login /> 

        
          
      

      }
    </div>
  );
}

export default App;
