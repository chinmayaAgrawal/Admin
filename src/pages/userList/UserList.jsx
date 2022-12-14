import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,HighlightOff,DoneAll} from "@material-ui/icons";
import { dataRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
//import PropTypes from "prop-types";

export default function UserList() {
  const [data, setData] = useState(dataRows);
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Question",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="userListUser">
           
            {params.row.username}
          </div>
        );
      },
    },
    /*{ field: "email", headerName: "Email", width: 200,
    renderCell: (params) => {
      return (
        <div >
          {params.row.email}
        </div>
      );
    },
    },*/
  
    {
      field: "transaction",
      headerName: "Answer",
      width: 400,
      renderCell: (params) => {
        return (
          <>
            <div>
              {params.row.transaction}
            </div>
           
          </>
        );
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
             
              
              <button class="inactive" >inactive</button>
          </>
        );       
      }
      else{
        return(
          <>
              
              
              <button class="active" >active</button>
          </>
        );
      }
  },
  },
    {
      field: "action",
      headerName: "Action",
      width: 150,
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
