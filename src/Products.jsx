import React from "react";
import Product from "./Product.jsx";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      left: 31,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      left: 11,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      left: 7,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      left: 24,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
    {
      id: 7,
      name: "Белый холодильник",
      price: 43100,
      left: 18,
      image: "http://intocode.ru/d/react-project-1/images/7.jpg",
    },
    {
      id: 8,
      name: "Колонка",
      price: 3000,
      left: 1,
      image: "http://intocode.ru/d/react-project-1/images/8.jpg",
    },
    {
      id: 9,
      name: "Наушники",
      price: 1500,
      left: 5,
      image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    },
  ];

  return (
    <>
        <table className="table">
          <thead className="head">
            <tr className="head__tr">
              <th>Названия</th>
              <th>Цена</th>
              <th>Остаток</th>
              <th>Изображение</th>
              </tr>
          </thead>
          <tbody>
            
          {products.map((product) => {
            return <Product name = {product.name} price={product.price} left={product.left} image={product.image} />
        })}
          </tbody>
        </table>
    </>


  )
};

export default Products
