import "./analytics.css";
import Analytics1 from './Analytics1';
import Analytics2 from './Analytics2';
import Analytics3 from './Analytics3';
import React from 'react';


 export default function AnalyticsTop(){
         return(
            <div className="analytics">
            <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
             
                  <div id="charts">
                    <Analytics1/>
                  </div>
                  <div id="charts">
                      <Analytics2/>
                  </div>
      
                
              </div>
            </div>
            </div>
         );
    }
