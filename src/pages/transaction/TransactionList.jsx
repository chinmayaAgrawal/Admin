import "./transactionList.css";
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



import { userTransactions } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TransactionList() {
  const [data, setData] = useState(userTransactions);
  
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
    
    }
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "tid", headerName: "TransID", width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.tid}
          </div>
          );
      },
     },
      {
        field: "user",
        headerName: "User",
        width: 120,
        renderCell: (params) => {
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          );
        },
      },
      { field: "email", headerName: "Email", width: 150,
      renderCell: (params) => {
        return (
          <div >
            {params.row.email}
          </div>
        );
      },
      },
      {
        field: "amount",
        headerName: "Amount",
        width: 130,
        renderCell: (params) => {      
          return (
            <>
                {params.row.amount}
            </>
          );       
    },
    },
      {
        field: "time",
        headerName: "Time",
        width: 110,
        renderCell: (params) => {
          return (
            <>
              <div>
                {params.row.time}
              </div>
             
            </>
          );
        },
        
      },
      {
        field: "date",
        headerName: "Date",
        width: 110,
        renderCell: (params) => {
          return (
            <>
              <div>
                {params.row.date}
              </div>
            </>
          );
        },
        
      },
      {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => {
          if(params.row.status==="approved"){
          return (
            <>
              <div>
                <DoneAll style= {{color :"green" } } />
                <button className="approved">{params.row.status}</button>
              </div>
             
            </>
          );
          }
          else if(params.row.status==="pending"){
            return (
              <>
                <div>
                  <ErrorOutlineIcon style= {{color :"orange" } } />
                  <button className="pending" >{params.row.status}</button>
                </div>
               
              </>
            );
          }
          else if(params.row.status=="declined"){
            return (
              <>
                <div>
                  <HighlightOff style= {{color :"red" } } />
                  <button className="declined">{params.row.status}</button>
                </div>
               
              </>
            );
          }

        },
        
      },
      {
        field: "action",
        headerName: "Action",
        width: 120,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
  
    return (
      <div className="userList">
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
<div className="userListUser">       
              {params.map((item,i)=>{
                return <div>
               { (typeof(item.activity)=='object') ?
                  <div>
                        {   item.activity.map((sub,j)=>{
                            return   <div> {sub.tid}</div>
                              })}
                  </div>
                  :
                  null
              }
              </div>      
            }
          )
      }
          </div>
        */