import Button from "../button/Button";
import "../modal/Modal.css";

function Modal_sign(props) {
    if (!props.open) {
        return null
    }
    return (
        <div className={props.open ? 'active_modal' : 'modal'} onClick={function () {
            props.setOpen(false)
        }}>
            <div className='modal_content' onClick={function (event) {
                event.stopPropagation()
            }}>
                <div className='modal_sign'>Вход в учётную запись</div>
                <input placeholder='Адрес электронной почты' className='address'/>
                <input placeholder='Пароль' className='password'/>
                <div className='forgot_password'></div>
                <Button text='Войти'/>
                <div className='sign_in'>Создать новую учётную запись
                </div>
            </div>
        </div>
    )
}

export default Modal_sign;

