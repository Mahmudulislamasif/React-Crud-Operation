import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid"
import Products from '../Product';
const Add = () => {
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [camera, setCamera]=useState('');
    const [display, setDisplay]=useState('');
    const [ram, setRam]=useState('');
    const [battery,setBattery]=useState('');
    let historyAdd=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids=uuid()
        let uniqueId=ids.slice(0,8);
        let a=name,
        b=price,
        c=camera,
        d=display,
        f=ram,
        g=battery;
        Products.push({id:uniqueId, Name:a, Price:b,Camera:c,Display:d,RAM:f,Battery:g})
        historyAdd('/')

    }
    return (
        <div className="min-h-screen bg-slate-900 pt-3">
            <form action="">
                <div className="flex flex-col bg-slate-200 w-1/2 mx-auto mt-5 p-5">
                <input type="text" class="input input-bordered input-primary mb-2" placeholder='Enter Product Name'  required onChange={(e)=>setName(e.target.value)}/>
                <input type="text" class="input input-bordered input-primary mb-2" placeholder='Enter Product Price'  required onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" class="input input-bordered input-primary mb-2" placeholder='Enter Product Camera'  required onChange={(e)=>setCamera(e.target.value)}/>
                <input type="text" class="input input-bordered input-primary mb-2" placeholder='Enter Product display'  required onChange={(e)=>setDisplay(e.target.value)}/>
                <input type="text" class="input input-bordered input-primary mb-2" placeholder='Enter Product display'  required onChange={(e)=>setRam(e.target.value)}/>
                <input type="text" class="input input-bordered input-primary mb-2" placeholder='Enter Product display'  required onChange={(e)=>setBattery(e.target.value)}/>
                <button class="btn btn-primary" onClick={(e)=>handleSubmit(e)} type='submit'>Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default Add;