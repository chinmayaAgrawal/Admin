import "./meter.css";

import { useRef } from "react";




export default function Meter(){
    const point= useRef(null);
    
    const meterElement = point.meter;
 

  function setMeterValue(meterV, value) {
  if (value < 0 || value > 1) {
    return;
  }
  if(meterV.point.meter){
    meterV.point.meter{ style= {transform: rotate(value/2)};
  }
  }
  if(meterV.point.meter){
    meterV.point.meter.cover={value:Math.round(value*100)}

    
  }
  /*
   meterV.fillElement.style.transform = `rotate(${value / 2}turn)`;
    meterV.meterElement.cover.textContent = `${Math.round(value * 100)}%`;
    */
}
setMeterValue(meterElement, 0.3);
    return(
        <>
        <div ref={point} className="meter">
           <div className="body">
              <div className="fill">{95}</div>
              <div className="cover"></div>
           </div>
        </div>
        </>

    );
}
/*
const gaugeElement = document.querySelector(".gauge");
const gaugeElement = point.gauge;


function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}

setGaugeValue(gaugeElement, 0.3);

useEffect(() => {
    document.querySelector(`#slide-${activeSlide}`).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
  }, [activeSlide]);


const activeSlideRef = useRef(null);

    useEffect(() => {
        if (activeSlideRef.current) {
            activeSlideRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest'
            });
        }
    }, [activeSlide]);
*/