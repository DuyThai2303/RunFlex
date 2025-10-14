import React, { useState } from 'react';
import DataProduct from '../../componets-home/Product/DataProduct';
import './Product.scss';

function Product() {
  const [selectedBrand, setSelectedBrand] = useState('Nike');

  const brands = [ 'Nike', 'Adidas', 'MLB', 'Puma', 'Fila', 'Giày khác'];

  const filteredProducts =
    selectedBrand === 'Nike'
      ? DataProduct
      : DataProduct.filter((item) => item.brand === selectedBrand);

  return (
    <div className="product-container">
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
        {filteredProducts.map((item, index) => (
          <div className="card-product" key={index}>
            <img className="img-product" src={item.img} alt={item.name} />
            <h2 className="name-product">{item.name}</h2>
            <span className="price-product">{item.newPrice}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
