import React from "react";
import Slider from "react-slick";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiSquareChevRight } from "react-icons/ci";
import Data from "./BannerData";


function Banner() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false, 
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {Data.map((item, index) => (
          <div key={index} className="banner-slide">
            <img
              src={item.img}
              alt={`banner-${index}`}
              className="banner-img"
            />
            <div className="banner-overlay">
              <img src={item.logo} alt="logo" className="banner-logo" />
              <h2 className="blanchs">{item.blanchs}</h2>

              <h3 className="blanch-product"></h3>  
              
              <div className="banner-products">
                {item.products.slice(0, 5).map((product, pIndex) => (
                  <div className="product-item" key = {pIndex}>
                    <img src={product.img} alt= {product.name} className="product-img" />
                    <p className="product-name">{product.name}</p>
                  </div>


                ))}

                <div className="more"><CiSquareChevRight/></div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
