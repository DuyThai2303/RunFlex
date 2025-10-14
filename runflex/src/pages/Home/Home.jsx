import Banner from "./componets-home/Banner/Banner";
import SaleSlider from "./componets-home/SaleSlider/SaleSlider";
import Product from "./componets-home/Product/Product";
import './Home.scss'

function Home(){
    return(
        <div className="container">
            <Banner/>
            <SaleSlider/>
            <Product/>
        </div>
        
    )
}
export default Home;