import {useEffect, useState} from "react";
import axios from "axios";
import Modal_sign from "../../ui/modal_sign/Modal_sign";
import {useAuth} from "../../contexts/AuthContext";
import Button from "../../ui/button/Button";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useAuthModal} from "../../contexts/AuthModalContext";

function Product_card_review(props) {

    const [productReview, setProductReview] = useState([])

    const { modal_registration, setModal_registration, modal_sign, setModal_sign } = useAuthModal();


    const {user} = useAuth();

    const [reviewText, setReviewText] = useState('')

    const [review, setReview] = useState(false)

    useEffect(function () {
        axios.get('https://frost.runtime.kz/api/reviews', {
            params: {
                productId: props.id
            }
        }).then(function (response) {
            const data = response.data
            setProductReview(data)
        })
        axios.get('https://frost.runtime.kz/api/reviews/exists', {
            params: {
                productId: props.id
            }
        }).then(function (response) {
            setReview(response.data)
        })
    }, [props.id,productReview])

    function sendReview() {
        if (review === false) {
            axios.post('https://frost.runtime.kz/api/reviews', {
                product_id: props.id,
                review: reviewText,
            }).then(function (response) {
                setReviewText('')
            }).catch(function (error) {
            })
        }
    }
    return (
        <div className="Review">
            <Modal_sign open={modal_sign} setOpen={setModal_sign}/>
            <div className="product_card_review">Отзывы</div>
            {!user ? <div className="product_card_site">
                <div>Чтобы оставить отзыв</div>
                <div className='product_card_site_button' onClick={() => setModal_sign(true)}>войдите на сайт</div>
            </div> : null}
            {user && review === false ? <div className='form_review'>
                <div className='review'>Вы можете оставить свой отзыв, заполнив форму ниже.</div>
                <textarea value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}>''</textarea>
                <Button classname='Button' text='Отправить' onClick={sendReview}/>
            </div> : null}
            {user && review ===true  ? <div className='review'>Вы уже оставили отзыв.</div> : null}
            {productReview.length === 0 && user ? (
                    <div className='not_review'>Отзывов нет. Вы можете оставить отзыв.</div>) :
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