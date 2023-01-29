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

  useEffect(()=>{
    const throttleProgressBar=throttle(() => {
      document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
    },250)
    throttleProgressBar();
  },[]);

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



  const handleClick=(e)=>{
    let handle
    if(e.target.matches(".handle")){
      handle=e.target
    }
    else{
        handle=e.target.closest(".handle")
    }
    if(handle != null) onHandleClick(handle)
    
  }

  
  // window.addEventListener("resize",throttleProgressBar)

  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  
  function calculateProgressBar(progressBar){
    progressBar.innerHTML=""
   
    const slider= progressBar.closest(".gallery-row").querySelector(".gallery-items")
    const itemCount=slider.children.length
    const itemsPerScreen=parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))
    let sliderIndex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    const progressBarItemCount= Math.ceil(itemCount/itemsPerScreen)

    if(sliderIndex >= progressBarItemCount){
      slider.style.setProperty("--slider-index",progressBarItemCount - 1 )
      sliderIndex = progressBarItemCount - 1 
    }
    for(let i=0;i<progressBarItemCount;i++){
      const barItem=document.createElement("div")

      barItem.classList.add("progress-item")
      if(i === sliderIndex){
        barItem.classList.add("active")
      }
      progressBar.append(barItem)
    }
  }


  function onHandleClick(handle){
    const progressBar=handle.closest(".gallery-row").querySelector(".progress-bar")
    const slider=handle.closest(".gallery-imgcontainer").querySelector(".gallery-items")
    const sliderIndex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))

    const progressBarItemCount=progressBar.children.length
    if(handle.classList.contains("left-handle")){
      if(sliderIndex - 1 < 0){
        slider.style.setProperty("--slider-index",progressBarItemCount - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[progressBarItemCount - 1].classList.add("active")
      }else{
        slider.style.setProperty("--slider-index",sliderIndex-1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex - 1].classList.add("active")
      }
    }

    if(handle.classList.contains("right-handle")){
      if(sliderIndex + 1>= progressBarItemCount){
        slider.style.setProperty("--slider-index",0)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[0].classList.add("active")
      }else{
      slider.style.setProperty("--slider-index",sliderIndex+1)
      progressBar.children[sliderIndex].classList.remove("active")
      progressBar.children[sliderIndex + 1].classList.add("active")
      }
    }
  }

  function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }

 
  return (
    
      <div className="Gallery">
      <div className="gallery-recent">
        Recent Highlights
       </div>
       <div className="gallery-row">
       <div className="gallery-imgcontainer">
       <button onClick={handleClick} className="handle left-handle"><i class="fa-sharp fa-solid fa-chevron-left fa-2x"></i></button>
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
         <button  onClick={handleClick} className="handle right-handle"><i class="fa-sharp fa-solid fa-chevron-right fa-2x"></i></button>
    
    </div>
    
      <div className="progress-bar">
      </div>
    </div>

    
            
          <div className="gallery-header">Heading</div>
      <div className="gallery-container">

        <div className="gallery-heading">
          
          <SideHeading
            side_heading="Year-wise Gallery"
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
            showPlayButton={false}
            lazyLoad={true}
            autoPlay={'true'}
          />
        </div>
      </div>
      </div>
   
  );
}
