import React from "react";
import Input from "../../ui/input/Input";
import Dropdown from "../../ui/dropdown/Dropdown";
import Button from "../../ui/button/Button";


function User_delivery() {


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
                    <div className='order_h'>Контактные данные</div>
                    <div>
                        <div>
                            <div>Страна</div>
                            <Dropdown/>
                            <div>Регион / Область</div>
                            <Dropdown/>
                            <Input/>
                        </div>
                        <div>
                            <Input/>
                            <Input/>
                            <Input/>
                        </div>
                    </div>
                </div>
            </div>
            <div><Button classname={"Button"} text={'Сохранить изменения'}/></div>
        </div>
    )
}
export default User_delivery;