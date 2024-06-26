import '../../styles/About.css';
import {FC} from 'react'

const About:FC = () => {
    return(
        <div className="about-us">
        <div className="about-us__block">
          <h1 className="about-us__block-title">О проекте</h1>
          <p className="about-us__block-text">
            Путем анализа движений на основе видеозаписей, система способствует
            точной оценке физической активности пациентов, обеспечивая
            индивидуализированный подход к разработке программ реабилитации. Это
            позволяет медицинским специалистам более эффективно отслеживать и
            управлять процессом восстановления, повышая качество заботы и
            сокращая период реабилитации для пациентов с заболеваниями
            опорно-двигательного аппарата.
          </p>
        </div>
      </div>

    )
}
export default About;