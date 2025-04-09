import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import About from './components/About_Us/About';
import InputFile from './components/InputFile/InputFile';
import Footer from './components/Footer/Footer';
import Graphics from './components/Graphics/Graphics';
import Technologies from './components/Technologies/Technologies';
import ExportFile from './components/ExportFile/ExportFile';

import {NextUIProvider} from "@nextui-org/react";
import Reviews from './components/Rewiews/Reviews';
import { Functional } from './components/Functional/Functional';

export default function App() {

  

  return (
    <>
    <Header />
    <main>
      <NextUIProvider>
        <About /> 
        <Technologies />
        <Functional />
        <Reviews />
      </NextUIProvider>
    </main>
    <Footer />
    </>
    
  );
}