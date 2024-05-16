import Button from "../button/Button";
import './Modal_registration.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../../contexts/AuthContext";


function Modal_registration(props) {

    const {user, login, logout} = useAuth();

    const [information, setInformation] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const [error, setError] = useState([]);
    const [errorPassword, setErrorPassword] = useState('');

    const[loading,setLoading] = useState(false)
    useEffect(function(){
        if(props.open===false){
            setError([])
            setInformation({
                firstName: '',
                lastName: '',
                email:'',
                password:'',
                confirm_password: '',
            })
        }
    },[props.open])

    function userReg() {
        if (information.password === information.confirm_password) {
            axios.post('https://frost.runtime.kz/api/registration', {
                first_name: information.firstName,
                last_name: information.lastName,
                email: information.email,
                password: information.password,
            }).then(function () {
                if (information.firstName !== '' && information.lastName !== '' && information.password !== ''
                    && information.email !== '') {
                    setError([])
                    // login(information.email,information.password)
                    setErrorPassword('')
                    setInformation({
                            firstName:'',
                            lastName: '',
                            email: '',
                            password: '',
                            confirm_password: '',
                        }
                    )
                    login(information.email,information.password,setLoading)
                    props.setOpen(false)
                }
            }).catch(function (error) {
                let response = error.response;
                if (response.status === 400) {
                    setError(response.data.errors)
                }
            })
        } else {
            setErrorPassword('Пароли не совпадают')
        }
    }


    function OnChange_firstName(event) {
        setInformation((prev) => ({...prev, firstName: event.target.value}));
    }

    function OnChange_lastName(event) {
        setInformation((prev) => ({...prev, lastName: event.target.value}));
    }

    function OnChange_password(event) {
        setInformation((prev) => ({...prev, password: event.target.value}));
    }

    function OnChange_email(event) {
        setInformation((prev) => ({...prev, email: event.target.value}));
    }

    function OnChange_confirm_password(event) {
        setInformation((prev) => ({...prev, confirm_password: event.target.value}))
    }

    if (!props.open) {
        return null
    }

    return (
        <div className={props.open ? 'active_modal' : 'modal'} onClick={function () {
            props.setOpen(false)
        }}>
            <div className="modal_content" onClick={function (event) {
                event.stopPropagation();
            }}>
                <div className='creation'>Создание учётной записи</div>
                <div className='full_name'>
                    <div className='second_name'>
                        <input placeholder='Имя' name='firstName' value={information.firstName}
                               onChange={OnChange_firstName} className='input'/>
                        <div className='modal_error'>{error.first_name}</div>
                    </div>
                    <div className='second_name'>
                        <input placeholder='Фамилия' name='lastName' value={information.lastName}
                               onChange={OnChange_lastName}/>
                        <div className='modal_error'>{error.last_name}</div>
                    </div>
                </div>
                <input placeholder='Адрес электронной почты' name='email' value={information.email}
                       onChange={OnChange_email}/>
                <div className='modal_error'>{error.email}</div>
                <input placeholder='Пароль' name='password' value={information.password} onChange={OnChange_password}/>
                <input placeholder='Повторите пароль' className='m46' name='confirm_password'
                       value={information.confirm_password} onChange={OnChange_confirm_password}/>
                <div className='modal_error'>{errorPassword === '' ? error.password : errorPassword}</div>
                <Button classname = {'Button'} text='Зарегистрироваться' onClick={userReg}/>
                <div className='sign_in'>Войти в существующую учётную запись</div>
            </div>
        </div>

    )
}

export default Modal_registration;
