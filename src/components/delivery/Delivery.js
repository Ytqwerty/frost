import './Delivery.css'
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";


function Delivery() {


    return (
        <div className='basket_container'>
            <div className='basket_title inp'>
                <div className='contact_details'>Доставка</div>
                <div className='contact_input'>
                    <div className='contact_left'>
                        <div>Область</div>
                        <Input placeholder='Акмолинская область'/>
                        <div>Город или поселок</div>
                        <Input/>
                    </div>
                    <div className='contact_right'>
                        <div>Улица</div>
                        <Input/>
                        <div className='dom'>
                            <div className='Home'>
                                <div>Дом</div>
                                <Input/>
                            </div>
                            <div>
                                <div>Квартира</div>
                                <Input/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='basket_button'><Button text='Оформить заказ'/></div>
        </div>
    )
}


export default Delivery;