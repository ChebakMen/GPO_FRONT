import '../../styles/header.css';

import {ReactComponent as Logo} from "../../images/Logo.svg"
import {Button} from "@nextui-org/button";

interface ScrollButtonProps {
    scrollTo: () => void; // Функция для прокрутки
}

  

export default function Header(){
    return(
        <header className="page-header">
            <div className="page-header__container container">
                <div className='page-header__wrapper'>
                    <div className="page-header__logo">
                        <Logo />
                    </div>  
                    <Button color="default" className='page-header__btn' variant="ghost">
                        Отзывы
                    </Button> 
                    <Button color="default" className='page-header__btn page-header__btn--b' variant="ghost">
                        Начать
                    </Button> 
                </div>
                
                
                <Button color="default" className='page-header__btn page-header__btn--log' variant="ghost">
                    Войти
                </Button> 
            </div>
        </header>
    )
}