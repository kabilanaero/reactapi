import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from './home'
import Login from './login'
import Details from './detail'
import {stateSlice} from '../redux/stateSlice'
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store';


export const Routing = () => {

  const state =useSelector(({sample}) => sample);

  return (
    
<BrowserRouter>
    {state?.isLoggedIn?(
<Routes>
<Route path="/Home" element={<Home/>}></Route>
<Route path="/Detail/:id" element={<Details/>}></Route>  
<Route path="*" element={<Navigate to={"/Home"}></Navigate>}></Route> 
</Routes>
    ):(
<Routes>
<Route path="/" element={<Login />}></Route>
<Route path="*" element={<Navigate to={"/"}></Navigate>}></Route> 
</Routes>
    )}
</BrowserRouter>

  )
};

const ProviderSetUp = () =>{
    return   <Provider store={store} >

        <Routing/>

    </Provider>
}
export default ProviderSetUp;





