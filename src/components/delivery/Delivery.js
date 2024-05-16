import './Delivery.css'
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import {useEffect, useState} from "react";
import axios from "axios";


function Delivery(props) {

    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [apartment, setApartment] = useState('')
    const [button, setButton] = useState(false)
    const [error, setError] = useState('')

    function handleConfirmClick() {
        if (area === '' || city === '' || street === '' || house === '' || apartment === '') {
            setError('Заполните это поле')
        } else {
            setError('')
            orders()
        }
    }

    function orders() {
        axios.post('https://frost.runtime.kz/api/orders', {
            phone: props.phone,
            area: area,
            city: city,
            street: street,
            house: house,
            apartment: apartment,
        }).then(function (res) {
            setArea('');
            setCity('');
            setStreet('');
            setHouse('');
            setApartment('');
            props.setNumber(res.data)
        })
        props.activeCompletion()
    }

    return (
        <div className='basket_container'>
            <div className='basket_title inp'>
                <div className='contact_details'>Доставка</div>
                <div className='contact_input'>
                    <div className='contact_left'>
                        <div>Область</div>
                        <Input value={area} onChange={(e) => setArea(e.target.value)}/>
                        <div className='red_error'>{area === '' ? error : null}</div>
                        <div>Город или поселок</div>
                        <Input value={city} onChange={(e) => setCity(e.target.value)}/>
                        <div className='red_error'>{city=== '' ? error : null}</div>
                    </div>
                    <div className='contact_right'>
                        <div>Улица</div>
                        <Input value={street} onChange={(e) => setStreet(e.target.value)}/>
                        <div className='red_error'>{street=== '' ? error : null}</div>
                        <div className='dom'>
                            <div className='Home'>
                                <div>Дом</div>
                                <Input value={house} onChange={(e) => setHouse(e.target.value)}/>
                                <div className='red_error'>{house=== '' ? error : null}</div>
                            </div>
                            <div>
                                <div>Квартира</div>
                                <Input value={apartment} onChange={(e) => setApartment(e.target.value)}/>
                                <div className='red_error'>{apartment === '' ? error : null}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='basket_button'>
                <Button classname='Button' text='Оформить заказ' onClick={handleConfirmClick}/>
            </div>
        </div>
    )
}


export default Delivery;