import React from "react";
import ImageGallery from "react-image-gallery";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import SideHeading from "../SideHeading/SideHeading";
import { gallery2022, gallery2019, gallery2021 } from "./GalleryimgData"
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallerygrid.css"
import Gallerybgimg from "./Gallerybgimg";

import YearButton from '../YearButton/YearButton'


export default function Gallerygrid() {

  const [eventYear, setEventYear] = useState('2022-23');
  const [galleryData, setGalleryData] = useState(gallery2022);

  useEffect(() => {
    if (eventYear === '2022') {
      setGalleryData(gallery2022);
    } else if (eventYear === '2021') {
      setGalleryData(gallery2021);
    } else if (eventYear === '2019') {
      setGalleryData(gallery2019);
    }
  }, [eventYear]);


  function renderLeftNav(onClick, disabled) {
    return (
      <div
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <i class="fa-sharp fa-solid fa-chevron-left fa-2x"></i>
      </div>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <div
        type="button"
        className="image-gallery-right-nav "
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <i class="fa-sharp fa-solid fa-chevron-right fa-2x"></i>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="Gallery">
      <div className="recent">
        Recent Highlights
       </div>
       <div className="gallery-imgcontainer">
       <button className="handle left-handle"><i class="fa-sharp fa-solid fa-chevron-left fa-2x"></i></button>
    <div className="gallery-items">
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
        <Gallerybgimg />
    </div>
    <button  className="handle right-handle"><i class="fa-sharp fa-solid fa-chevron-right fa-2x"></i></button>
    </div>
      <div className="gallery-container">
        <div className="gallery-heading">
          <div></div>
          <SideHeading
            side_heading="Glimpses of our events from past years"
          />

          <YearButton className='year-buttons' text='2022' SetEventYear={setEventYear} />
          <YearButton className='year-buttons' text='2021' SetEventYear={setEventYear} />
          <YearButton className='year-buttons' text='2019' SetEventYear={setEventYear} />


        </div>

        <div className="Image-gallery">
          <ImageGallery
            items={galleryData}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
          />
        </div>
      </div>
      </div>
    </div>
  );
}
