import '../../styles/About.css';
import {FC} from 'react'
import {ReactComponent as Arrow} from "../../images/ArrowR.svg"
import {Button, ButtonGroup} from "@nextui-org/button";


const About:FC = () => {
    return(
        <div className="about-us">
          <div className='about-us__container'>
            <div className="about-us__block">
              <h1 className="about-us__block-title">О ПРОЕКТЕ</h1>
              <p className="about-us__block-text">
                Путем анализа движений на основе видеозаписей, система способствует
                точной оценке физической активности пациентов, обеспечивая
                индивидуализированный подход к разработке программ реабилитации. 
              </p>
              <p className="about-us__block-text about-us__block-text--last">
                Это
                позволяет медицинским специалистам более эффективно отслеживать и
                управлять процессом восстановления, повышая качество заботы и
                сокращая период реабилитации для пациентов с заболеваниями
                опорно-двигательного аппарата.
              </p>
              <div className='about-us__block__advantages'>
                <div className='about-us__block__card about-us__block__card--1'>
                  Удобство
                </div>
                <div className='about-us__block__card about-us__block__card--2'>
                  Точность
                </div>
                <div className='about-us__block__card about-us__block__card--3'>
                  Здоровье
                </div>
                <Button color="default" className='about-us__block__advantages--btn' variant="ghost">
                  Попробовать
                  <Arrow />
                </Button>
                
              </div>
            </div>
            <div className='about-us__bigLogo'></div>
          </div>
        </div>

    )
}
export default About;