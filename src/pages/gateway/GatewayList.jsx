import "./gatewayList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,HighlightOff,DoneAll } from "@material-ui/icons";
import Battery90Icon from "@material-ui/icons/Battery90";
import Battery60Icon from "@material-ui/icons/Battery60";
import Battery30Icon from "@material-ui/icons/Battery30";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import SignalCellularOffIcon from '@material-ui/icons/SignalCellularOff';
import SignalCellularConnectedNoInternet0BarIcon from '@material-ui/icons/SignalCellularConnectedNoInternet0Bar';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import LoopIcon from '@material-ui/icons/Loop';
import BluetoothConnectedIcon from '@material-ui/icons/BluetoothConnected';
import WifiIcon from '@material-ui/icons/Wifi';
import BuildIcon from '@material-ui/icons/Build';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';



import { gateWayRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GatewayList() {
  const [data, setData] = useState(gateWayRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
     
    function changeMode (params) {
     /* if(params.row.mode==="1" ){
         setData(params.row.mode)="0"
      }
      else{
        setData(params.row.mode)="1"
      }*/
    };
  

  const columns = [
    { field: "id", headerName: "ID", width: 90,

    renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.id}
          </div>
        );
      },
    },
    {
      field: "gateway",
      headerName: "Gateway",
      width: 180,
      renderCell: (params) => {
        if(params.row.state>1 && params.row.state<5){
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
        }
        if(params.row.state>=5){
            return (
                <div className="productListItem">
                  <img className="productListImg" src={params.row.img} alt="" />
                  {params.row.name}
                  <ImportantDevicesIcon style={{color:"red"}}/>
                </div>
              );
        }
        if(params.row.state>=5){
            return (
                <div className="productListItem">
                  <img className="productListImg" src={params.row.img} alt="" />
                  {params.row.name}
                  <ImportantDevicesIcon style={{color:"red"}}/>
                </div>
              );
        }
        
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        if (params.row.status === "inactive"){
        return (
          <>
              <HighlightOff style= {{color :"red" } } />
              
              <button class="inactive" >{params.row.status}</button>
          </>
        );       
      }
      else{
        return(
          <>
              <DoneAll style= {{color :"green" } } />
              
              <button class="active" >{params.row.status}</button>
          </>
        );
      }
  },
    },
    {
      field: "power",
      headerName: "Power Status ",
      width: 160,
        renderCell: (params) => {
          if (params.row.power <= 100 && params.row.power > 75){
            return (
              <>
                  <Battery90Icon style={{color:"green"}} fontSize="large"  className="battery"/>
                     <button class="full" >{params.row.power}</button>
              </>
            );       
          }
          else if ( params.row.power <= 75 && params.row.power > 35){
            return(
              <>  
                  <Battery60Icon style={{color:"orange"}} fontSize="large" className="battery"/>
                      <button class="medium" >{params.row.power}</button>
                 
              </>
            );
          }
          else if ( params.row.power <= 35 && params.row.power > 3){
            return(
              <>      
                  <Battery30Icon style={{color:"red"}} fontSize="large"  className="battery"/>
                     <button class="low" >{params.row.power}</button>
              </>
            );
          }
          else if ( params.row.power <= 3 && params.row.power >= 1){
            return(
              <>      
                  <BatteryAlertIcon style={{color:"red", border:"red"}} fontSize="large"  className="" />
                     <button class="veryLow" >{params.row.power}</button>
                  
              </>
            );
          }
        }
      },
      {
        field: "connectivity",
        headerName: "Network",
        width: 150,
        renderCell: (params) => {
          if (params.row.connectivity === "online" ){
            return (
              <>
                  <SignalCellularAltIcon style={{color:"green"}} fontSize="large"  className="network"/>
                     <button class="full" >{params.row.connectivity}</button>
    
              </>
            );       
          }
          else if ( params.row.connectivity === "offline" ){
            return(
              <>  
                  <SignalCellularOffIcon style={{color:"orange"}} fontSize="large" className="network"/>
                      <button class="medium" >{params.row.connectivity}</button>
                
              </>
            );
          }
          else if ( params.row.connectivity ==="disconnected" ){
            return(
              <>  
                  <SignalCellularConnectedNoInternet0BarIcon style={{color:"red"}} fontSize="large" className="network"/>
                      <button class="medium" >{params.row.connectivity}</button>
                  
              </>
            );
          }
        },
      },
      {
        field: "configuration",
        headerName: "Configure",
        width: 140,
        renderCell: (params) => {
          return(
          <>
          <span>
          <SettingsIcon fontSize="small" style={{color:"#7686A1"}} className="configHardware"/>
          </span>
          <CodeIcon fontSize="small" style={{color:"#7686A1"}} className="configSoftware"/>
          </>
          );
        }
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        if(params.row.mode === 1){
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            <SettingsPowerIcon style={{color:"green"}} 
            onClick={() => changeMode(params.row.mode)} className="mode"/> 
          </>
        );
      }else if(params.row.mode === 0){
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />  
            <SettingsPowerIcon style={{color:"red"}} 
            onClick={() => changeMode(params.row.mode)} className="mode"/> 
          </>
        );

      }
    },
  },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
/*
function changeMode(){
              return(
              <SettingsPowerIcon style={{color:"green"}} 
            onClick={() => changeMode(params.row.mode)} className="mode"/>
            <HighlightOff style= {{color :"red" } } />
              
              <button class="inactive" >{params.row.status}</button>  
              );

              */