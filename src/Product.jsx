import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Product.css'


function Product(props) {
  return (
    
    
   <tr className="tr">
    <td> {props.name} </td>
    <td>{props.price}</td>
    <td>{props.left}</td>
    <td><img src={props.image} alt="" /></td>
   </tr>
  
  );
}

export default Product;
