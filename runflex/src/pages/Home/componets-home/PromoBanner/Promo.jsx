import React from "react";
import Slider from "react-slick";
import "./Promo.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAnglesRight } from "react-icons/fa6";


const PromoProduct = [
  {
    name: "Nike Invincible 3 Cushioning changes your run",
    img: "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/10/giay-the-thao-nam-nike-invincible-3-fn1187-001-mau-den-size-39-671b3a1b236d1-25102024132635.jpg",
    type: "Giày nam năng động",
    intro:
      "Sneaker đã trở thành một biểu tượng của xã hội, là một sản phẩm của thời đại với những thiết kế cổ điển và những điều đó đều nằm trong những đôi giày Sneaker Japan Shoes. Không lỗi thời với thời gian, mang dấu ấn cá tính khác biệt và tạo mọi sự lôi cuốn từ chính đôi giày Sneaker. Tự tạo cuộc chơi, tự tạo phong cách, đó là Japan Shoes.",
  },
  
  
];

function Promo() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="promo-container">
      <div className="promo-left">
        <Slider {...settings}>
          {PromoProduct.map((item, index) => (
            <div className="cart" key={index}>
              <h2 className="name-product">{item.name}</h2>
              <img src={item.img} alt={item.name} className="img-product" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="promo-right">
        <Slider {...settings}>
          {PromoProduct.map((item, index) => (
            <div key={index} className="wrap">
              <h2 className="type-product">{item.type}</h2>
              <p className="intro-product">{item.intro}</p>
              <span className = "more">Xem thêm <span><FaAnglesRight/></span></span>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
}

export default Promo;
