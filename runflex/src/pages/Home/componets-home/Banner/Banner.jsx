import React from "react";
import Slider from "react-slick";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contents = [
  {
    img: "https://www.jordan1.vn/wp-content/uploads/2025/07/DSC_4821-banner_3c50119d-40b7-44-scaled.jpg",
    logo: "https://i.pinimg.com/736x/54/2c/68/542c68c7aef630bb18caeaec635aa7a3.jpg",
    title: "Xem tại đây",
  },
  {
    img: "https://cdn.prod.website-files.com/61d31707a0ea5cbf0c1ab8fb/66222999de2a1942faba6498_BLS-Adidas-Banner.jpg",
    logo: "https://i.pinimg.com/736x/e3/a7/8e/e3a78e11e01e659c56a4d277778908ce.jpg",
    title: "Xem tại đây",
  },
];

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
        {contents.map((item, index) => (
          <div key={index} className="banner-slide">
            <img
              src={item.img}
              alt={`banner-${index}`}
              className="banner-img"
            />
            <div className="banner-overlay">
              <img src={item.logo} alt="logo" className="banner-logo" />
              <button className="banner-btn">{item.title}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
