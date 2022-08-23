import "./analytics.css";

import AnalyticsTop from './AnalyticsTop';
import AnalyticsLower from './AnalyticsLower';
import AnalyticsMiddle from './AnalyticsMiddle';
import AnalyticsLower2 from "./AnalyticsLower2";
import AnalyticsMiddle2 from "./AnalyticsMiddle2";
import React from 'react';


 export default function AnalyticsMain(){
         return(
             <div className="main">
            <div className="analytics">
               <AnalyticsTop />
            </div>
            <div className="analytics">
                <AnalyticsMiddle />
            </div>
            <div className="analytics">
                <AnalyticsMiddle2 />
            </div>
            <div className="analytics">
                <AnalyticsLower/>
            </div>
            <div className="analytics">
                <AnalyticsLower2/>
            </div>
            </div>
         );
    }
