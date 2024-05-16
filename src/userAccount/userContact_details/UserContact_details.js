import React from "react";
import {useAuth} from "../../contexts/AuthContext";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";


function UserContact_details() {

    const {user} = useAuth();

    return (
        <div className='basket_container'>
            <div className='personal_account'>Личный кабинет</div>
            <div className='order_title'>
                <div className='order_left'>
                    <div>Мои заказы</div>
                    <div>Контактные данные</div>
                    <div>Доставка</div>
                </div>
                <div className='order_right'>
                    <div>Контактные данные</div>
                    <div>
                        <div>
                            <Input value={user.lastName}/>
                            <Input value={user.firstName}/>
                            <Input/>
                        </div>
                        <div>
                            <Input/>
                            <Input/>
                            <div>Изменить пароль</div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Button classname={"Button"} text={'Сохранить изменения'} /></div>
        </div>
    )
}
export default UserContact_details;