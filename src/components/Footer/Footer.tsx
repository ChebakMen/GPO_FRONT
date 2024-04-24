import '../../styles/Footer.css';
import {ReactComponent as VK_svg} from "../../images/vk.svg"
import {ReactComponent as TG_svg} from "../../images/tg.svg"
import {ReactComponent as Logo} from "../../images/Logo.svg"
import {ReactComponent as Gos_svg} from "../../images/gos.svg"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__contacts">
                    <h2 className="footer__title">Контакты</h2>
                    <div className="footer__mail-and-tel">
                        <a className="footer__connection" href="mailto:pochta@gmail.com">
                            Email: pochta@gmail.com 
                        </a>
                        <a className="footer__connection" href="tel:+7-888-898-88-13">
                            +7 888 898-88-13
                        </a>
                    </div>
                </div>
                <div className="footer__social">
                    <h2 className="footer__title">Мы в соцсетях</h2>
                    <div className="footer__social-items">
                        <a className="footer__social-item" href="#">
                            <VK_svg className='footer__social' width={"40px"}  />
                        </a>
                        <a className="footer__social-item" href="#">
                            <TG_svg className='footer__social' width={"40px"}  />
                        </a>
                        <a className="footer__social-item" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUR0YDQuNC6INC10YHRgtC70Lg%3D" target="_blank">
                            <Gos_svg className='footer__social' width={"35px"} height={"42px"}  />
                        </a>
                    </div>
                    
                </div>

                <a className="footer__logo" href='/'>
                    <Logo width={"150px"} />
                </a>  
            </div>
             
        </footer>
    )
}