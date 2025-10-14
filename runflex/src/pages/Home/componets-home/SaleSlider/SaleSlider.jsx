import Slider from "react-slick";
import SaleData from "./SaleData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SaleSlider.scss'
import { CiClock2 } from "react-icons/ci";

function PromotionalProduct(){
    const setting = {
        dost: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slildesToScrool: 4,
        autoplay: false,
        autoplaySpeed: true,
        arraws: false,
    }

    return(
        <div className="sale-container">
            <div className="sale-header">
                <span><CiClock2/></span>
                <p>Siêu Khuyến Mãi</p>
            </div>
            <Slider {...setting}>
                {SaleData.map((item, index) => (
                    <div className="sale-card" key = {index}>
                        <div className="discount-badge">{item.discount}</div>
                        <div className="sale-img-wrap">
                            <img src= {item.img} alt= {item.name} className="sale-img" />
                        </div>
                        <div className="sale-info">
                            <p className="sale-name">{item.name}</p>
                            <p className="sale-price">{item.newPrice}</p>
                            <p className="old-price">{item.oldPrice}</p>
                            {item.tag && <span className="sale-tag">{item.tag}</span>}
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="more">
                <button>Xem tất cả</button>
            </div>
        </div>


        
    )

}
export default PromotionalProduct;