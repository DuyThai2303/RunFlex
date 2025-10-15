import Banner from "./componets-home/Banner/Banner";
import SaleSlider from "./componets-home/SaleSlider/SaleSlider";
import Product from "./componets-home/Product/Product";
import Promo from "./componets-home/PromoBanner/Promo";
import './Home.scss'


function Home(){
    return(
        <div className="container">
            <Banner/>
            <SaleSlider/>
            <Product/>
            <Promo/>
        </div>
        
    )
}
export default Home;