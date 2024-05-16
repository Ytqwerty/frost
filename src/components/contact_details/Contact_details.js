import './Contact_details.css'
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

function Contact_details(props) {

    const {user} = useAuth();

    const [lastName, setLastName] = useState(user.lastName);
    const [firstName, setFirstName] = useState(user.firstName);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(user.email);
    const [error, setError] = useState('')

    const[patronymic,setPatronymic] = useState('')
    function handleConfirmClick() {
        if (lastName === '' || firstName === '' || props.phone === '' || email === '') {
            setError('Заполните это поле')
        } else {
            setError('');
            props.activeDelivery()
        }
    }

    return (
        <div className='basket_container'>
            <div className='basket_title inp'>
                <div className='contact_details'>Контактные данные</div>
                <div className='contact_input'>
                    <div className='contact_left'>
                        <div>Фамилия</div>
                        <Input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        <div className='red_error'>{lastName === '' ? error : null}</div>
                        <div>Имя</div>
                        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        <div className='red_error'>{firstName === '' ? error : null}</div>
                        <div>Отчество</div>
                        <Input value={patronymic} onChange={(e) => setPatronymic(e.target.value)}/>
                        <div className='red_error'>{patronymic === '' ? error : null}</div>
                        <div>Телефон</div>
                        <Input value={props.phone} onChange={(e) => props.setPhone(e.target.value)}/>
                        <div className='red_error'>{props.phone === '' ? error : null}</div>
                    </div>
                    <div className='contact_right'>
                        <div>E-mail</div>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <div className='red_error'>{email === '' ? error : null}</div>
                        <div>Пароль</div>
                        <Input disabled/>
                        <div>Повторите пароль</div>
                        <Input disabled/>
                    </div>
                </div>
            </div>
            <div className='basket_button'>
                <Button classname='Button' text='Подтвердить' onClick={handleConfirmClick}/>
            </div>
        </div>
    );
}

export default Contact_details;