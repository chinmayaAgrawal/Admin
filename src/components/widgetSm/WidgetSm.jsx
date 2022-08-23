import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://ej2.syncfusion.com/demos/src/grid/images/1.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">User 1</span>
            <span className="widgetSmUserTitle">Software Develpoment Engineer 2</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ej2.syncfusion.com/demos/src/grid/images/5.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">User 2</span>
            <span className="widgetSmUserTitle">Software Development Engineer 3</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ej2.syncfusion.com/demos/src/grid/images/6.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">User 3</span>
            <span className="widgetSmUserTitle">Software Development Engineer 1</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ej2.syncfusion.com/demos/src/grid/images/7.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">User 4</span>
            <span className="widgetSmUserTitle">Software Development Engineer 3</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://ej2.syncfusion.com/demos/src/grid/images/8.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">User 5</span>
            <span className="widgetSmUserTitle">Software Development Engineer 2</span>
          </div>
          <button className="widgetSmButton">
            
            <Visibility className="widgetSmIcon" />
            Display
            
          </button>
        </li>
      </ul>
    </div>
  );
}
