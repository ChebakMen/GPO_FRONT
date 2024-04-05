import '../../styles/Graphics.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Chart} from 'chart.js';
import { LineChart } from '@mui/x-charts/LineChart';


export default function Graphics () {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
    const [chartData, setChartData] = useState<number[]>([]);
   
    const handleCheckboxChange = (checkboxValue: string) => {
        // Обработка изменений чекбоксов
        setSelectedCheckboxes(prevState => {
            if (prevState.includes(checkboxValue)) {
                return prevState.filter(item => item !== checkboxValue);
            } else {
                return [...prevState, checkboxValue];
            }
        });
    };

    useEffect(() => {
        // Функция для отправки запроса на сервер и обновления данных для графика
        const fetchData = async () => {
          try {
            const response = await axios.post('https://65f5739c41d90c1c5e0987c9.mockapi.io/grafic', { selectedCheckboxes });
            setChartData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, [selectedCheckboxes]);

    
    // useEffect(() => {
    // // Инициализация графика
    //     const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    //     new Chart(ctx, {
    //         type: 'line',
    //         data: {
    //             labels: chartData.map((_, index) => `Point ${index}`),
    //             datasets: [{
    //                 label: 'Your Data',
    //                 data: chartData,
    //                 borderColor: 'blue',
    //                 borderWidth: 1
    //             }]
    //         }
    //     });
    // }, [chartData]);

    return(
        <div className="graphics">
            <div className="graphics__container">
                <div className="graphics__humanbox">
                    <h2 className="graphics__title">Выберите часть тела</h2>
                    <div className="graphics__human">
                        <input type="radio" className='graphics__radio graphics__radio__nose' id="keypoint-1" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__shoulder-l' id="keypoint-2" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__shoulder-r' id="keypoint-3" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__elbow-l' id="keypoint-4" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__elbow-r' id="keypoint-5" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__brushes-l' id="keypoint-6" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__brushes-r' id="keypoint-7" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__eye-l' id="keypoint-8" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__eye-r' id="keypoint-9" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__ear-l' id="keypoint-10" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__ear-r' id="keypoint-11" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__hip-l' id="keypoint-12" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__hip-r' id="keypoint-13" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__knee-l' id="keypoint-14" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__knee-r' id="keypoint-15" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__foot-l' id="keypoint-16" name="keypoints" />
                        <input type="radio" className='graphics__radio graphics__radio__foot-r' id="keypoint-17" name="keypoints" />
                    </div>
                    
                    {/* <input type="checkbox" value="checkbox1" onChange={() => handleCheckboxChange('checkbox1')} />
                    <input type="checkbox" value="checkbox2" onChange={() => handleCheckboxChange('checkbox2')} /> */}
                    
                    {/* <canvas id="myChart" /> */}

                    

                </div>
                
                <div className="graphics__graphic">
                    <h2 className="graphics__title--mt15 graphics__title">График</h2>
                    <LineChart 
                        
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10]}]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            color: 'black'
                            },
                            {
                                data: [3, 4.5, 4, 2.5, 5.5, 8],
                                color: 'orange'
                            },
                        ]}
                        margin={{ left: 30, right: 30, top: 50, bottom: 30 }}
                        width={550}
                        height={450}
                        grid={{ vertical: true, horizontal: true }}  
                    />
                </div>
            </div>
        </div>
    )
    

}  




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





