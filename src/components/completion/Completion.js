import './Completion.css'
import check from "./img/check.svg";


function Completion() {


    return (
        <div className='basket_container'>
            <div className='basket_title'>
                <div className='contact_details'>Заказ успешно создан</div>
                <div className='Order'>
                    <img src={check} alt="check" className='completion_check'/>
                    <div className='order'>Заказ №100001 был создан. Вы можете просмотреть список всех ваших заказов в
                        личном кабинете.
                    </div>
                    <div className='kab'>Перейти в личный кабинет</div>
                </div>
            </div>
        </div>
    )
}


export default Completion;