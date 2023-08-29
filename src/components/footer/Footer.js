import './Footer.css'
import insta_logo from "./img/Insta.svg";
import mail_logo from "./img/Mail.svg"
import phone_logo from "./img/Phone.svg"

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer_insta'>
                    <img src={insta_logo} alt='insta'/>
                    <div className='footer_insta-name'>frostauto</div>
                </div>
                <div className='footer_mail'>
                    <img src={mail_logo} alt='mail'/>
                    <div className='footer_mail-name'>frostauto@gmail.com</div>
                </div>
                <div className='footer_city-phone'>
                    <img src={phone_logo} alt='phone'/>
                    <div className='footer_phone-city'>
                        <div className='footer_city'>г. Нур-Султан</div>
                        <div className='footer_phone'>+7 777 777 77 77</div>
                    </div>
                </div>
                <div className='footer_city-phone'>
                    <img src={phone_logo} alt='phone'/>
                    <div className='footer_phone-city'>
                        <div className='footer_city'>г. Алматы</div>
                        <div className='footer_phone'>+7 777 777 77 77</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;