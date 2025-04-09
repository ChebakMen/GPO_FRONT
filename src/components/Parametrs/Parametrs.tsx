import '../../styles/Parametrs.css';
import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Slider from '@mui/material/Slider';
import { axisClasses } from '@mui/x-charts';
import { Button } from '@nextui-org/button';

type KeypointData = {
  params_1: ParamsData;
  params_2: ParamsData;
};

type ParamsData = {
  leg_length_difference: number;
  shoulder_height_difference: number;
  pelvis_tilt: number;
  knee_valgus_varus: number[];
  step_width: number;
  step_asymmetry: number;
  pelvis_rotation: number;
  shoulder_rotation: number;
  center_of_gravity_deviation: number;
  arm_movement_symmetry: number;
  step_count: number;
};

type KeypointCoordinate = {
  frame: string;
  value: number;
};

type KeypointCoordinates = KeypointCoordinate[];

const fetchDataAndProcess = async () => {
  try {
    const response = await fetch('https://run.mocky.io/v3/c3c6e839-fd88-4fae-9753-7aaa28ebd0b9');

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data: KeypointData = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return null;
  }
};

const processKeypointData = (
  data: KeypointData,
  paramKey: keyof ParamsData,
): KeypointCoordinates => {
  const keypointCoordinates: KeypointCoordinates = [];

  Object.entries(data).forEach(([key, params]) => {
    const value = params[paramKey];
    if (typeof value === 'number') {
      keypointCoordinates.push({
        frame: key,
        value: value,
      });
    } else if (Array.isArray(value)) {
      keypointCoordinates.push({
        frame: key,
        value: value[0],
      });
    }
  });

  return keypointCoordinates;
};

export const Parametrs = () => {
  const [data, setData] = useState<KeypointData | null>(null);
  const [coordinates, setCoordinates] = useState<KeypointCoordinates>([]);
  const [value, setValue] = React.useState<number[]>([0, 25]);

  useEffect(() => {
    fetchDataAndProcess().then((result) => setData(result));
    console.log(data);
  }, []);

  const handleFrameClick = (paramKey: keyof ParamsData) => {
    if (data) {
      const keypointCoordinates = processKeypointData(data, paramKey);
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
    <div className="parametrs">
      <div className="parametrs__container">
        <div className="parametrs__btn-list">
          <h2 className="parametrs__title">Выберите параметр</h2>
          <div className="parametrs__btns">
            <Button
              className="parametrs__btn"
              id="param-1"
              name="params"
              onClick={() => handleFrameClick('leg_length_difference')}>
              leg_length_difference
            </Button>

            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('shoulder_height_difference')}>
              shoulder_height_difference
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('pelvis_tilt')}>
              pelvis_tilt
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('knee_valgus_varus')}>
              knee_valgus_varus
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('step_width')}>
              step_width
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('step_asymmetry')}>
              step_asymmetry
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('pelvis_rotation')}>
              pelvis_rotation
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('shoulder_rotation')}>
              shoulder_rotation
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('center_of_gravity_deviation')}>
              center_of_gravity_deviation
            </Button>
            <Button
              className="parametrs__btn"
              id="param-2"
              name="params"
              onClick={() => handleFrameClick('arm_movement_symmetry')}>
              arm_movement_symmetry
            </Button>
          </div>
        </div>

        <div className="graphics__graphic">
          <h2 className="graphics__title--mt15 graphics__title">График</h2>

          <LineChart
            xAxis={[
              {
                label: 'Шаги',
                data: coordinates.map((point, index) => index + 1) || [],
                min: value[0],
                max: value[1],
              },
            ]}
            yAxis={[
              {
                label: 'Значение',
              },
            ]}
            series={[
              {
                data: coordinates.map((point) => point.value) || [],
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
