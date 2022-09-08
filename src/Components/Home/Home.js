import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Products from '../Product';
const Home = () => {
    let deleteProduct=useNavigate();
    const handleEdit=(id,name,price,camera,display,ram,battery)=>{
        localStorage.setItem('id',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Price',price);
        localStorage.setItem('Camera',camera);
        localStorage.setItem('Display',display);
        localStorage.setItem('Ram',ram);
        localStorage.setItem('Battery',battery);

    }
    const handleDelete=(id)=>{
       var index=Products.map(function(e){
        return e.id
       }).indexOf(id);
       Products.splice(index,1);
       deleteProduct('/')
    }
    return (
        <div class="overflow-x-auto min-h-screen bg-slate-900">
        <table class="table table-zebra w-3/4 mx-auto mt-4">
            
            <thead>
            <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Camera</th>
                <th>Display</th>
                <th>Ram</th>
                <th>Battery</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
             {
                  Products && Products.length>0 
                              ? 
                              Products.map((product)=>{
                                  return(
                                      <tr key={product.id}>
                                          <td>
                                              {product.id}
                                          </td>
                                          <td>
                                              {product.Name}
                                          </td>
                                          <td>
                                              {product.Price}
                                          </td>
                                          <td>
                                              {product.Camera}
                                          </td>
                                          <td>
                                              {product.Display}
                                          </td>
                                          <td>
                                              {product.RAM}
                                          </td>
                                          <td>
                                              {product.Battery}
                                          </td>
                                          <td>
                                              <Link to={'/edit'}>
                                              <button onClick={()=>handleEdit(product.id,product.Name,product.Price,product.Camera,product.Display,product.RAM,product.Battery)}><FiEdit className="text-primary text-2xl"/></button>
                                              </Link>
                                           
                                              &nbsp;
                                              <button onClick={()=>handleDelete(product.id)}><RiDeleteBin6Line className="text-red-600 text-2xl"/></button>
                                          </td>
                                      </tr>
                                  )
                              })
                              :"No data Available"
                          }

           
        
            </tbody>
            <br />
          
        </table>
           <Link to="/create">
                <button className="bg-primary text-white p-3 mx-auto w-3/4">Create Data</button>
            </Link> 
        </div>
       
    );
};

export default Home;