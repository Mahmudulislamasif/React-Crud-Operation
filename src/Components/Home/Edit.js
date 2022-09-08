import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid"
import Products from '../Product';

const Edit = () => {
    const [id,setID]=useState("")
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [camera, setCamera]=useState('');
    const [display, setDisplay]=useState('');
    const [ram, setRam]=useState('');
    const [battery,setBattery]=useState('');
    let history=useNavigate();
    var index=Products.map(function(e){
        return e.id
       }).indexOf(id);
       const handleSubmit=(e)=>{
        e.preventDefault();
        let a=Products[index];
        a.Name=name;
        a.Price=price;
        a.Camera=camera;
        a.Display=display;
        a.RAM=ram;
        a.Battery=battery;
        history('/')
    }
    useEffect(()=>{
     setID(localStorage.getItem('id'))
     setName(localStorage.getItem('Name'))
     setPrice(localStorage.getItem('Price'))
     setCamera(localStorage.getItem('Camera'))
     setDisplay(localStorage.getItem('Display'))
     setRam(localStorage.getItem('Ram'))
     setBattery(localStorage.getItem('Battery'))
    
    },[])

    return (
        <div className="min-h-screen bg-slate-900 pt-3">
        <form action="">
            <div className="flex flex-col bg-slate-200 w-1/2 mx-auto mt-5 p-5">
            <input type="text" class="input input-bordered input-primary mb-2" value={name} placeholder='Enter Product Name'  required onChange={(e)=>setName(e.target.value)}/>
            <input type="text" class="input input-bordered input-primary mb-2" value={price}  placeholder='Enter Product Price'  required onChange={(e)=>setPrice(e.target.value)}/>
            <input type="text" class="input input-bordered input-primary mb-2" value={camera}  placeholder='Enter Product Camera'  required onChange={(e)=>setCamera(e.target.value)}/>
            <input type="text" class="input input-bordered input-primary mb-2" value={display}  placeholder='Enter Product display'  required onChange={(e)=>setDisplay(e.target.value)}/>
            <input type="text" class="input input-bordered input-primary mb-2" value={ram}  placeholder='Enter Product display'  required onChange={(e)=>setRam(e.target.value)}/>
            <input type="text" class="input input-bordered input-primary mb-2" value={battery}  placeholder='Enter Product display'  required onChange={(e)=>setBattery(e.target.value)}/>
            <button class="btn btn-primary" onClick={(e)=>handleSubmit(e)} type='submit'>Update Product</button>
            </div>
        </form>
    </div>
    );
};

export default Edit;