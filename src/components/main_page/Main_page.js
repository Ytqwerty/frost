import Footer from "../footer/Footer";
import Header from "../header/Header";
import Header_compressor from "../header_compressor/Header_compressor";
import Product_list from "../product_list/Product_list";


function Main_page() {


    return (
        <div className="Main_page">
            <Header/>
            <Header_compressor/>
            <Product_list/>
            <Footer/>
        </div>
    )
}


export default Main_page;