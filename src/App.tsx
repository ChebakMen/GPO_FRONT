import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import About from './components/About_Us/About';
import InputFile from './components/InputFile/InputFile';
import Footer from './components/Footer/Footer';
import Graphics from './components/Graphics/Graphics';
import Instruction from './components/Instruction/Instruction';
import ExportFile from './components/ExportFile/ExportFile';


export default function App() {

  const [fileLoaded, setFileLoaded] = useState(false);

  // Функция для обработки загруженного файла
  const handleFileLoaded = () => {
    setFileLoaded(true);
  };

  return (
    <>
    <Header />
    <main>
      <About /> 
      <InputFile onFileLoaded={handleFileLoaded} />
      <Instruction />
      {fileLoaded && <Graphics />}
      {fileLoaded && <ExportFile />}
    </main>
    <Footer />
    </>
    
  );
}