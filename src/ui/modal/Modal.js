import Button from "../button/Button";
import './Modal.css'

function Modal(props) {
    if (!props.open) {
        return null
    }

    return (
        <div className={props.open ? 'active_modal' : 'modal'} onClick={function () {
            props.setOpen(false)
        }}>
            <div className="modal_content" onClick={function (event) {
                event.stopPropagation()
            }}>
                <div className='creation'>Создание учётной записи</div>
                <div className='fullname'>
                    <input placeholder='Имя'/>
                    <input placeholder='Фамилия'/>
                </div>
                <input placeholder='Адрес электронной почты'/>
                <input placeholder='Пароль'/>
                <input placeholder='Повторите пароль' className='m46'/>
                <Button text='Зарегистрироваться'/>
                <div className='sign_in'>Войти в существующую учётную запись
                </div>
            </div>
        </div>

    )
}

export default Modal;
