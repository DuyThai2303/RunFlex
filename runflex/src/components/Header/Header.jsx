import React from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

function Header() {
  return (
    <header className="header-container">
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Giày Khá..." />
          <button>
            <IoIosSearch />
          </button>
        </div>


        <div className="header-actions">
          <div className="action-item">
            <FaSearchLocation />
            <span>Hệ thống<br />cửa hàng <FaAngleDown/></span>
          </div>
          <div className="action-item">
            <FaRegUser />
            <span>Đăng nhập<br />Đăng ký <FaAngleDown/></span>
          </div>
          <div className="action-item">
            <BsCart2 />
            <span>Giỏ hàng</span>
          </div>
        </div>
      </div>


      <nav className="nav-bar">
        <ul>
          <li>Trang chủ</li>
          <li>Giày Nike <span><FaAngleDown /></span></li>
          <li>Giày Adidas <span><FaAngleDown /></span></li>
          <li>Giày Puma<span><FaAngleDown /></span></li>
          <li>Giày Khác <span><FaAngleDown /></span></li>
          <li>Quần Áo / Phụ Kiện <span><FaAngleDown /></span></li>
          <li>Nước Hoa <span><FaAngleDown /></span></li>
          <li>Hàng Order</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
