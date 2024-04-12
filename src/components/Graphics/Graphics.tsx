import '../../styles/Graphics.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';

const parseData = (data: IJsonData): LineChartData[] => {
    const parsedData: LineChartData[] = [];
  
    Object.entries(data).forEach(([key, value]) => {
      const xValues = value.map((point) => point[0]);
      const yValues = value.map((point) => point[1]);
  
      parsedData.push({
        xData: xValues,
        yData: yValues,
      });
    });
  
    return parsedData;
  };
  
  type IJsonData = {
    [key: string]: [number, number][];
  };
  
  type LineChartData = {
    xData: number[];
    yData: number[];
  };

const Graphics: React.FC = () => {
    const [data, setData] = useState<IJsonData | null>(null);
    const [parsedData, setParsedData] = useState<LineChartData[]>([
      {
        xData: [10,10],
        yData: [10,20],
      },
    ]);

    const handleClick = async (key: string) => {
        try {
          const response = await axios.get<IJsonData>(
            'https://run.mocky.io/v3/0c14c8b8-c098-419b-9010-e3a2d8e263e6'
            // "https://run.mocky.io/v3/d83c8e49-ee7f-48ec-9e43-30f6df7c76bb"
          );
          setData(response.data);
          console.log(response.data);

          if (response.data[key]) {
            const filteredData = { [key]: response.data[key] };
            setParsedData(parseData(filteredData));
          } else {
            setParsedData([
              {
                xData: [0],
                yData: [0],
              },
            ]);
          }
        } catch (error) {
          console.error(error);
        }
    };
    return(
        <div className="graphics">
            <div className="graphics__container">
                <div className="graphics__humanbox">
                    <h2 className="graphics__title">Выберите часть тела</h2>
                    <div className="graphics__human">
                        <input type="radio" className='graphics__radio graphics__radio__nose' id="keypoint-1" name="keypoints" onClick={() => handleClick('nose')}/>
                        <input type="radio" className='graphics__radio graphics__radio__shoulder-l' id="keypoint-2" name="keypoints" onClick={() => handleClick('shoulder-l')} />
                        <input type="radio" className='graphics__radio graphics__radio__shoulder-r' id="keypoint-3" name="keypoints" onClick={() => handleClick('shoulder-r')} />
                        <input type="radio" className='graphics__radio graphics__radio__elbow-l' id="keypoint-4" name="keypoints" onClick={() => handleClick('elbow-l')} />
                        <input type="radio" className='graphics__radio graphics__radio__elbow-r' id="keypoint-5" name="keypoints" onClick={() => handleClick('elbow-r')} />
                        <input type="radio" className='graphics__radio graphics__radio__brushes-l' id="keypoint-6" name="keypoints" onClick={() => handleClick('brushes-l')}/>
                        <input type="radio" className='graphics__radio graphics__radio__brushes-r' id="keypoint-7" name="keypoints" onClick={() => handleClick('brushes-r')} />
                        <input type="radio" className='graphics__radio graphics__radio__eye-l' id="keypoint-8" name="keypoints" onClick={() => handleClick('eye-l')}/>
                        <input type="radio" className='graphics__radio graphics__radio__eye-r' id="keypoint-9" name="keypoints" onClick={() => handleClick('eye-r')} />
                        <input type="radio" className='graphics__radio graphics__radio__ear-l' id="keypoint-10" name="keypoints" onClick={() => handleClick('ear-l')}/>
                        <input type="radio" className='graphics__radio graphics__radio__ear-r' id="keypoint-11" name="keypoints" onClick={() => handleClick('ear-r')} />
                        <input type="radio" className='graphics__radio graphics__radio__hip-l' id="keypoint-12" name="keypoints" onClick={() => handleClick('hip-l')} />
                        <input type="radio" className='graphics__radio graphics__radio__hip-r' id="keypoint-13" name="keypoints" onClick={() => handleClick('hip-r')} />
                        <input type="radio" className='graphics__radio graphics__radio__knee-l' id="keypoint-14" name="keypoints" onClick={() => handleClick('knee-l')} />
                        <input type="radio" className='graphics__radio graphics__radio__knee-r' id="keypoint-15" name="keypoints" onClick={() => handleClick('knee-r')}/>
                        <input type="radio" className='graphics__radio graphics__radio__foot-l' id="keypoint-16" name="keypoints" onClick={() => handleClick('foot-l')} />
                        <input type="radio" className='graphics__radio graphics__radio__foot-r' id="keypoint-17" name="keypoints" onClick={() => handleClick('foot-r')} /> 
                    </div>
                    
                     
                </div>
                
                <div className="graphics__graphic">
                    <h2 className="graphics__title--mt15 graphics__title">График</h2>
                    {parsedData && parsedData.length > 0 && (
                            <LineChart
                                xAxis={[
                                    {
                                        data: parsedData[0].yData || [],
                                    },
                                ]}
                                series={[
                                    {
                                        data: parsedData[0].xData || [],
                                        color: 'black',
                                    },
                                ]}
                                margin={{ left: 30, right: 30, top: 50, bottom: 30 }}
                                width={550}
                                height={450}
                                grid={{ vertical: true, horizontal: true }}
                            />
                    )}
                </div>
            </div>
        </div>
    )
}  

export default Graphics



// <div className="graphics">
{/* <div className="graphics__container">
<div className="graphics__humanbox">
    <h2 className="graphics__title">Выберите часть тела</h2>
    <Human width='150px' className='graphics__svg' />
</div>
<div className="graphics__graphic">
    <h2 className="graphics__title">График</h2>
    <LineChart 
        
        xAxis={[{ data: [1, 2, 3, 5, 8, 10]}]}
        series={[
            {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            color: 'black'
            },
        ]}
        margin={{ left: 30, right: 30, top: 50, bottom: 30 }}
        width={550}
        height={450}
        grid={{ vertical: true, horizontal: true }}  
    />
</div>
</div>
</div> */}





