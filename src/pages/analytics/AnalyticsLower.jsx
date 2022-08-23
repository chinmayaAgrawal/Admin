import "./analytics.css";

import Analytics4 from './Analytics4';
import Analytics3 from './Analytics3';
import React from 'react';


 export default function AnalyticsLower(){
         return(
            <div className="analytics">
            <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
             
                  <div id="charts3">
                    <Analytics3/>
                  </div>
                  <div id="charts4">
                      <Analytics4/>
                  </div>
      
                
              </div>
            </div>
            </div>
         );
    }
