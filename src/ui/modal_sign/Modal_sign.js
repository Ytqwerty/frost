import Button from "../button/Button";
import "../modal_registration/Modal_registration.css";
import {useEffect, useState} from "react";
import {useAuth} from "../../contexts/AuthContext";

// `/api/auth/token` (POST)
// * `username`
// * `password`

// Если сервер отвечает 200, значит запрос выполнен успешно (токен в результате).
// Если сервер отвечает 400, значит введены некорректные данные для авторизации.

function Modal_sign(props) {

    const {user, login, logout} = useAuth();

    const [username, setUserName] = useState('');

    const [password, setPassword] = useState('');

    const [loading,setLoading] = useState(false)

    const [error,setError] = useState(null)

    useEffect(function() {
        if (user) {
            props.setOpen(false)
        }
    },[user])
    useEffect (function() {
        if (props.open===false) {
            setUserName('');
            setPassword('')
        }
    },[props.open])


    function sign_in() {
        // login('abc', 'abcv')
        setError('')
        setLoading(true);
        login(username,password,setLoading,setError);
        // axios.post('https://frost.runtime.kz/api/auth/token', {
        //     username: userName,
        //     password: password,
        // }).then(function (res) {
        //         if (userName !== '' && password !== '') {
        //             props.setOpen(false)
        //             setError('')
        //         }
        //     }
        // ).catch(function (error) {
        //     let response = error.response;
        //     if (response.status === 400) {
        //         setError('ERROR')
        //     }
        // })
    }
    return (
        <div className={props.open ? 'active_modal' : 'modal'} onClick={function () {
            props.setOpen(false)
        }}>
            <div className='modal_content' onClick={function (event) {
                event.stopPropagation()
            }}>
                <div className='modal_sign'>Вход в учётную запись</div>
                    <input value = {username} disabled={loading} placeholder='Адрес электронной почты' className='address'   onChange={function (event) {
                        setUserName(event.target.value)
                    }}/>
                    <input value = {password} disabled={loading} placeholder='Пароль' className='password' onChange={function (event) {
                    setPassword(event.target.value)
                }}/>
                <div className='modal_error'>{error}</div>
                <Button classname = {loading ? 'loader' : 'Button'} text={loading? null : 'Войти'} onClick={sign_in}/>
                <div className='sign_in'>Создать новую учётную запись
                </div>
            </div>
        </div>
    )
}

export default Modal_sign;

