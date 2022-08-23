import "./topFeaturedInfo.css";
//import Meter from "../meter/Meter";
import Gauge from "../gauge/Gauge";
import Gauge2 from "../gauge/Gauge2";
import HomeAnalytics1 from "../../pages/analytics/HomeAnalytics1";
import HomeAnalytics2 from "../../pages/analytics/HomeAnalytics2";
import HomeAnalytics3 from "../../pages/analytics/HomeAnalytics3";
import HomeAnalytics5 from "../../pages/analytics/HomeAnalytics5";
import HomeAnalytics6 from "../../pages/analytics/HomeAnalytics6";
import HomeAnalytics4 from "../../pages/analytics/HomeAnalytics4";
import HomeAnalytics7 from "../../pages/analytics/HomeAnalytics7";
import HomeAnalytics8 from "../../pages/analytics/HomeAnalytics8";

import HomeAnalytics1c from "../../pages/analytics/HomeAnalytics1c";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
 
export default function TopFeaturedInfo() {
  return (
            <div className="topFeatured">
                <div className="topFeaturedItemLeft">
                    <div className="topFeaturedContainerLeft">
                        <div className="occupancyLeft">
                            <span className="featuredOccupancy"></span>
                            <HomeAnalytics1 />
                        </div>
                        <div  className="occupancy">
                             <HomeAnalytics1c />
                        </div>
                    </div>
                    
                        <HomeAnalytics8/>

                </div>
                <div className="topFeaturedItemRight">
                    <div className="topFeaturedContainer">
                        <div  className="occupancyLeft">
                             <div>
                             <HomeAnalytics6 />
                             </div>
                        </div>
                    </div>
                
                    <div className="topFeaturedContainer">
                        <div  className="occupancy">
                             <div>
                             <HomeAnalytics5 />
                             </div>
                        </div>
                        <span className="featuredOccupancyRate"></span>
                    </div>
               
            </div>
        </div>

  );
}