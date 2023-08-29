import Button from "../button/Button";


function Recovery(props) {

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
                <div className='recovery'>Восстановление пароля</div>
                <div className='sign_in'>Для получения нового пароля необходимо вписать в поле ниже адрес электронной
                    почты, указанный при регистрации
                </div>
                <input className='recovery_address' placeholder='Адрес электронной почты'/>
                <Button text='Отправить подтверждение'/>
                <div className='sign_in'>Создать новую учётную запись
                </div>
            </div>
        </div>
    )
}

export default Recovery;