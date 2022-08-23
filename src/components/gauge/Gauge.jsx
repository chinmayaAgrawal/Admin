import "./gauge.css";
import {useRef} from "react";

export default function Gauge(){
    const calc = useRef(null);
    const numb = calc.numb;
    let counter = 0;
    setInterval(()=>{
      if(counter == 100){
        clearInterval();
      }else{
         counter=80;
        counter+=1;
        //numb.textContent = counter + "%";
      }
    }, 80);
    return(
         <div class="circular">
            <div class="inner"></div>
            <div class="outer"></div>
            <div class="numb">
               { counter}
            </div>
            <div class="circle">
               <div class="dot">
                  <span></span>
               </div>
               <div class="bar left">
                  <div class="progress"></div>
               </div>
               <div class="bar right">
                  <div class="progress"></div>
               </div>
            </div>
         </div>
          
    );
        }