import React from "react";
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState,useEffect } from "react";

import {gallery2022,gallery2019,gallery2021} from "./GalleryimgData"
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallerygrid.css"

import YearButton from '../YearButton/YearButton'


export default function Gallerygrid() {

  const [eventYear,setEventYear] = useState('2022-23');
  const [galleryData,setGalleryData] = useState(gallery2022);

  useEffect(()=>{
    if(eventYear==='2022'){
        setGalleryData(gallery2022);
    } else if(eventYear==='2021') {
        setGalleryData(gallery2021);
    } else if(eventYear==='2019') {
        setGalleryData(gallery2019);
    }
},[eventYear]);

  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowLeft size={30} color="#000" />
      </button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowRight size={30} color="#000" />
      </button>
    );
  }

  return (
    <div className="App">
      <div className="year-buttons">
        <YearButton text='2022' SetEventYear={setEventYear}/>
        <YearButton text='2021' SetEventYear={setEventYear}/>
        <YearButton text='2019' SetEventYear={setEventYear}/>
      </div>
      <ImageGallery
        items={galleryData}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
      />
    </div>
  );
}
