import React, { useState } from 'react'
import './Products.css';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function Products() {
  const [input,setInput]=useState("");
  const items=[
    {
    name:"Sunglasses",
    imgUrl:"https://m.media-amazon.com/images/I/61yp-saqYKL._AC_UL480_FMwebp_QL65_.jpg",
    rating:4.3,
    price:1000,
  },
  {
    name:"Cap",
    imgUrl:"https://m.media-amazon.com/images/I/713IiBRv7tL._AC_UL480_FMwebp_QL65_.jpg",
    rating:4.2,
    price:450,
  },
  {
    name:"Watch",
    imgUrl:"https://m.media-amazon.com/images/I/817iC5Eq49L._UX679_.jpg",
    rating:4.2,
    price:550,
  },
    {
    name:"Top",
    imgUrl:"https://m.media-amazon.com/images/I/71XoAmkMBPL._AC_UL480_FMwebp_QL65_.jpg",
    rating:4.2,
    price:450,
  },
    {
    name:"Track Pants",
    imgUrl:"https://m.media-amazon.com/images/I/71KgPBz8sBS._AC_UL480_FMwebp_QL65_.jpg",
    rating:4.3,
    price:465,
  },
  {
    name:"Shoes",
    imgUrl:"https://m.media-amazon.com/images/I/51tLAZy45ZL._AC_UL480_FMwebp_QL65_.jpg",
    rating:4.3,
    price:965,
  },
    {
    name:"Sandal Block Heel",
    imgUrl:"https://m.media-amazon.com/images/I/61hRRG9N9sL._AC_UL480_FMwebp_QL65_.jpg",
    rating:4.3,
    price:865,
  },
    {
    name:"Dress",
    imgUrl:"https://m.media-amazon.com/images/I/815nD5rD+uL._AC_UL480_FMwebp_QL65_.jpg",
    rating:4.2,
    price:665,
  },
];
  return (
    <div className='products'>
       
        <div className="input-group mb-3 w-50 m-auto mt-3">
          <input type="text" className="form-control fs-2"
           placeholder="Enter your Category " value={input} onChange={(event)=>setInput(event.target.value)}
           />
          <button className="btn btn-warning fs-5" type="button" id="button-addon2">Search</button>
        </div>

        <div className='product-container'>
              {items.filter((category)=>category.name.includes(input)).map((category)=>(
              <Card className='shopping' >
            <div>
        <CardImg  className="mt-3 p-3"top width="200px" height="200px"
          src={category.imgUrl} alt="Card image cap" />
            <CardBody>
              <CardTitle className='fs-2'>{category.name}</CardTitle>
              <CardSubtitle className='fs-4'>{category.rating}</CardSubtitle>
              <CardSubtitle className='fs-4'>₹{category.price}</CardSubtitle>
              <Button className='btn btn-success btn-lg'> Add to Cart</Button>
            </CardBody>
          </div>
          </Card>
           ))}
      </div>
    
    </div>
  )
}

export default Products