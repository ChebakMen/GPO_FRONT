import '../../styles/Functional.css';
import React, { useState, useRef } from 'react';
import InputFile from '../InputFile/InputFile';
import Graphics from '../Graphics/Graphics';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import { Parametrs } from '../Parametrs/Parametrs';

type KeypointData = {
  [key: string]: {
    keypoint: string;
    position: {
      x: number;
      y: number;
    };
  }[];
}[];

export const Functional = () => {
  const [fileLoaded, setFileLoaded] = useState(false);
  const [keypoints, setKeypoints] = useState<KeypointData>([]);

  // Функция для обработки загруженного файла
  const handleFileLoaded = (newKeypoints: KeypointData) => {
    setFileLoaded(true);
    console.log('newKeypoints', newKeypoints);
    setKeypoints(newKeypoints); // Обновляем keypoints
  };

  return (
    <div className="functional">
      <h1 className="functional-title">Протестируй прямо сейчас</h1>
      <h3 className="functional-text">
        Загрузите ваш видеофайл, подождите несколько минут и наблюдайте результат
      </h3>
      {!fileLoaded && <InputFile onFileLoaded={handleFileLoaded} />}
      {fileLoaded && (
        <div className="">
          <Tabs aria-label="Options">
            <Tab key="graphics" title="Графики">
              <Graphics keypoints={keypoints} />
            </Tab>
            <Tab key="parametrs" title="Параметры">
              <Parametrs />
            </Tab>
          </Tabs>
        </div>
      )}
    </div>
  );
};
