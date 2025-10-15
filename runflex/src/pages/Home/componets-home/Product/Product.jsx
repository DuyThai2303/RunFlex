import React, { useState } from 'react';
import DataProduct from '../../componets-home/Product/DataProduct';
import { BsCart3 } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import './Product.scss';

function Product() {
  const [selectedBrand, setSelectedBrand] = useState('Nike');

  const brands = ['Nike', 'Adidas', 'MLB', 'Puma', 'Fila', 'Giày khác'];

  const filteredProducts = DataProduct.filter(
    (item) =>
      item.brand &&
      item.brand.trim().toLowerCase() === selectedBrand.toLowerCase()
  );

  return (
    <div className="product-container">
      <h2>Giày sneaker</h2>
      <div className="list-brand">
        {brands.map((brand, index) => (
          <button
            key={index}
            className={selectedBrand === brand ? 'active' : ''}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="list-product">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div className="card-product" key={index}>
              <img className="img-product" src={item.img} alt={item.name} />
              <div className = "action">
                <div className = "cart">
                  <BsCart3 />
                </div>
                <div className = "heart">
                  <FiHeart />
                </div>
              </div>
              <div className = "line"></div>
              <h2 className="name-product">{item.name}</h2>
              <span className="price-product">
                {Number(item.newPrice.replace(/[^\d]/g, ''), 10).toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                })}
                <button>Còn hàng</button>
              </span>
            </div>
          ))
        ) : (
          <p className="no-product">Không có sản phẩm nào thuộc thương hiệu này.</p>
        )}
      </div>
      <button className='more'>Xem thêm <span><FaAnglesRight /></span></button>
    </div>
  );
}

export default Product;
