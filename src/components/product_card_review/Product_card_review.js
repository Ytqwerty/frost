import {useEffect, useState} from "react";
import axios from "axios";
import Modal_sign from "../../ui/modal_sign/Modal_sign";

function Product_card_review(props) {
    const [productReview, setProductReview] = useState([])

    const [modalactive, setModalactive] = useState(false)

    useEffect(function () {
        axios.get('http://frost.runtime.kz/reviews', {
            params: {
                productId: props.id
            }
        }).then(function (response) {
            const data = response.data
            setProductReview(data)
        })
    }, [props.id])
    return (
        <div className="Review">
            <Modal_sign open={modalactive} setOpen={setModalactive}/>
            <div className="product_card_review">Отзывы</div>
            <div className="product_card_site">
                <div>Чтобы оставить отзыв</div>
                <div className='product_card_site_button' onClick={() => setModalactive(true)}>войдите на сайт</div>
            </div>
            {productReview.length === 0 ? (<div className='notReview'>Отзывов нет. Вы можете оставить отзыв.</div>) :
                (productReview.map(function (item, index) {
                    return (
                        <div key={index} className="product_card_name">
                            <div>{item.user.firstName} {item.user.lastName}</div>
                            <div>{item.review}</div>
                        </div>
                    )
                }))}
        </div>
    )
}

export default Product_card_review;