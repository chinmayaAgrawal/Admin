import "./analytics.css";

import HomeAnalytics4 from './HomeAnalytics4';
import HomeAnalytics7 from './HomeAnalytics7';
import React from 'react';


 export default function AnalyticsLower2(){
         return(
            <div className="analytics">
            <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">            
                  <div id="charts3">
                    <HomeAnalytics7/>
                  </div>
                  <div id="charts4">
                      <HomeAnalytics4/>
                  </div>
              </div>
            </div>
            </div>
         );
    }
