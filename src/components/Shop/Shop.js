import React,{useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Shop.css';
import Product from '../product/Product'


const Shop = () => {
    const [post, setPost]= useState([]);
   useEffect(() =>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data =>setPost(data))
       
       
   },[]);
   
    return (
        <div className='product-container'>
            <div className='body-container'>
                <h1>This is shop component</h1>
                {
                    post.map(pd=><Product pd = {pd.name}></Product>)
                }
            </div>
            
            <div className='card-container'>
                <h1>Add Card</h1>
                
            </div>


        </div>
    );
};

export default Shop;