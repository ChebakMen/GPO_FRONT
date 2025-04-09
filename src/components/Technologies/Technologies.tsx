import '../../styles/Technologies.css';
import { ReactComponent as Arrow } from '../../images/ArrowR.svg';
import { Card, Link, CardFooter, Image, Button } from '@nextui-org/react';

export default function Technologies() {
  return (
    <div className="technologies">
      <div className="technologies__container">
        <div className="technologies__bcg-i"></div>
        <div className="technologies__title-block">
          <h2 className="technologies__title technologies__title--h2">ТЕХНОЛОГИИ</h2>
          <h3 className="technologies__title technologies__title--h3">используемые в проекте</h3>
          <div className="technologies__block-img">
            <div className="technologies__title-img--bg1">
              <img
                className="technologies__title-img1"
                src={require('../../images/Yolo.jpg')}
                alt=""
              />
              <div className="technologies__block-signature technologies__block-signature-1">
                <p className="technologies__title-img-signature technologies__title-img-signature--1">
                  YOLO V11
                </p>
                <Button
                  href="https://docs.ultralytics.com/ru"
                  size="sm"
                  as={Link}
                  color="default"
                  variant="ghost"
                  target="_blank"
                  className="technologies__title-img-signature__btn technologies__title-img-signature__btn-1">
                  Перейти
                  <Arrow />
                </Button>
              </div>
            </div>
            <div className="technologies__title-img--bg2">
              <div className="technologies__block-signature technologies__block-signature-2">
                <p className="technologies__title-img-signature technologies__title-img-signature--2">
                  MMPOSE
                </p>
                <Button
                  href="https://github.com/open-mmlab/mmpose"
                  size="sm"
                  as={Link}
                  color="default"
                  target="_blank"
                  variant="ghost"
                  className="technologies__title-img-signature__btn technologies__title-img-signature__btn-2">
                  Перейти
                  <Arrow />
                </Button>
              </div>
              <img
                className="technologies__title-img1"
                src={require('../../images/firstSnim.png')}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="technologies__description-block">
          <h2 className="technologies__description technologies__description--h2">YOLO V11</h2>

          <h3 className="technologies__description technologies__description--h3">
            YOLO (You Only Look Once) – это глубокая сверточная нейронная сеть, которая обеспечивает
            высокую точность обнаружения и классификации объектов на изображениях
          </h3>

          <h2 className="technologies__description technologies__description--h2">MMPOSE</h2>
          <h3 className="technologies__description technologies__description--h3">
            Это инструментарий с открытым исходным кодом для оценки позы, основанный на Pwtorch. Он
            является частью проекта Openlab
          </h3>
        </div>
      </div>
    </div>
  );
}
