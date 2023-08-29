import './Contact_details.css'
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";

function Contact_details() {



    return (
        <div className='basket_container'>
            <div className='basket_title inp'>
                <div className='contact_details'>Контактные данные</div>
                <div className='contact_input'>
                    <div className='contact_left'>
                        <div>Фамилия</div>
                        <Input/>
                        <div>Имя</div>
                        <Input/>
                        <div>Отчество</div>
                        <Input/>
                        <div>Телефон</div>
                        <Input placeholder='+7 (___) ___ __ __'/>
                    </div>
                    <div className='contact_right'>
                        <div>E-mail</div>
                        <Input/>
                        <div>Пароль</div>
                        <Input/>
                        <div>Повторите пароль</div>
                        <Input/>
                    </div>
                </div>
            </div>
            <div className='basket_button'><Button text='Подтвердить'/></div>
        </div>
    )

}


export default Contact_details;