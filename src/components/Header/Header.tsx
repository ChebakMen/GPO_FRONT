import '../../styles/header.css';
import {ReactComponent as Logo} from "../../images/Logo.svg"

export default function Header(){
    return(
        <header className="page-header">
            <div className="page-header__container container">
                <div className="page-header__logo">
                    <Logo />
                </div>   
            </div>
        </header>
    )
}