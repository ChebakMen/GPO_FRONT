import '../../styles/Graphics.css';
import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Slider from '@mui/material/Slider';
import { axisClasses } from '@mui/x-charts';

type KeypointData = {
  [key: string]: {
    keypoint: string;
    position: {
      x: number;
      y: number;
    };
  }[];
}[];

type KeypointCoordinate = {
  frame: string;
  x: number;
  y: number;
};

type KeypointCoordinates = KeypointCoordinate[];

const processKeypointData = (data: KeypointData, keypoint: string): KeypointCoordinates => {
  const keypointCoordinates: KeypointCoordinates = [];

  data.forEach((frameData) => {
    const frame = Object.keys(frameData)[0];

    frameData[frame].forEach((item) => {
      if (item.keypoint === keypoint) {
        keypointCoordinates.push({
          frame: frame,
          x: item.position.x,
          y: item.position.y,
        });
      }
    });
  });

  return keypointCoordinates;
};

interface GraphicsProps {
  keypoints: KeypointData;
}

const Graphics: React.FC<GraphicsProps> = ({ keypoints }) => {
  const [data, setData] = useState<KeypointData | null>(null);
  const [coordinates, setCoordinates] = useState<KeypointCoordinates>([]);
  const [value, setValue] = React.useState<number[]>([0, 25]);

  useEffect(() => {
    setData(keypoints);
  }, [keypoints]);

  const handleFrameClick = (keypoint: string) => {
    if (data) {
      const keypointCoordinates = processKeypointData(data, keypoint);
      setCoordinates(keypointCoordinates);
    }
  };

  const minDistance = 10;

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 240 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };

  return (
    <div className="graphics">
      <div className="graphics__container">
        <div className="graphics__humanbox">
          <h2 className="graphics__title">Выберите часть тела</h2>
          <div className="graphics__human">
            <input
              type="radio"
              className="graphics__radio graphics__radio__nose"
              id="keypoint-1"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_1')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__shoulder-l"
              id="keypoint-2"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_2')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__shoulder-r"
              id="keypoint-3"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_3')}
            />

            <input
              type="radio"
              className="graphics__radio graphics__radio__elbow-l"
              id="keypoint-4"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_4')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__elbow-r"
              id="keypoint-5"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_5')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__brushes-l"
              id="keypoint-6"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_6')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__brushes-r"
              id="keypoint-7"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_7')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__eye-l"
              id="keypoint-8"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_8')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__eye-r"
              id="keypoint-9"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_9')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__ear-l"
              id="keypoint-10"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_10')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__ear-r"
              id="keypoint-11"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_11')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__hip-l"
              id="keypoint-12"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_12')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__hip-r"
              id="keypoint-13"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_13')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__knee-l"
              id="keypoint-14"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_14')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__knee-r"
              id="keypoint-15"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_15')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__foot-l"
              id="keypoint-16"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_16')}
            />
            <input
              type="radio"
              className="graphics__radio graphics__radio__foot-r"
              id="keypoint-17"
              name="keypoints"
              onClick={() => handleFrameClick('keypoint_17')}
            />
          </div>
        </div>

        <div className="graphics__graphic">
          <h2 className="graphics__title--mt15 graphics__title">График</h2>

          <LineChart
            xAxis={[
              {
                label: 'Координаты точек',
                data: coordinates.map((point, index) => index + 1) || [],
                min: value[0],
                max: value[1],
              },
            ]}
            yAxis={[
              {
                label: 'Ось X',
              },
            ]}
            series={[
              {
                data: coordinates.map((point) => point.x) || [],
                color: 'black',
              },
            ]}
            margin={{ left: 55, right: 30, top: 50, bottom: 50 }}
            width={550}
            height={450}
            grid={{ vertical: true, horizontal: true }}
            sx={{
              [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-15px, 0)',
              },
            }}
          />
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={240}
            sx={{ ml: 3, mt: 2, color: 'black', width: 500 }}
          />

          <p className="graphics__graphic__info"></p>
        </div>
      </div>
    </div>
  );
};

export default Graphics;

// {parsedData && parsedData.length > 0 && (
//   <LineChart
//     xAxis={[
//       {
//         label: "Ось Y",
//         data: parsedData[0].yData || [],
//       },
//     ]}
//     yAxis={[
//       {
//         label: "Ось X",
//       },
//     ]}
//     series={[
//       {
//         data: parsedData[0].xData || [],
//         color: "black",
//       },
//     ]}
//     margin={{ left: 55, right: 30, top: 50, bottom: 50 }}
//     width={550}
//     height={450}
//     grid={{ vertical: true, horizontal: true }}
//     sx={{
//       [`.${axisClasses.left} .${axisClasses.label}`]: {
//         transform: "translate(-10px, 0)",
//       },
//     }}
//   />
// )}
