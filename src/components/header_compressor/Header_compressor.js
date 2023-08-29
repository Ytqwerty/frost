import './Header_compressor.css';
import Compressor from "./img/Compressor.svg";


function Header_compressor() {


    return (
        <div className='Header_compressor'>
            <div className='Header_compressor_container'>
                <div className='compressor_description'>
                    <div>Компрессоры для</div>
                    <div className='compressor_car'>
                        <div>— легковых автомобилей</div>
                        <div>— грузовых автомобилей</div>
                        <div>— спецтехники</div>
                        <div>— комбайнов</div>
                    </div>
                    <div className='header_compressor_logo'><img src={Compressor}/></div>
                </div>
            </div>
        </div>
    )
}


export default Header_compressor;