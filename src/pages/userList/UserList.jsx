import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,HighlightOff,DoneAll} from "@material-ui/icons";
import { dataRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
//import PropTypes from "prop-types";

export default function UserList() {
  const [data, setData] = useState(dataRows);
  const [pageSize, setPageSize] = useState(10);

  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          {params.id}
        </div>
      );
    },
  },
    {
      field: "user",
      headerName: "Question",
      width: 500,
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
      width: 500,
      renderCell: (params) => {
        return (
          <>
            <div  className="userListUser">
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
          <div  className="userListUser">
              <button class="inactive" >inactive</button>
          </div>
        );       
      }
      else{
        return(
          <div className="userListUser">
              <button class="active" >active</button>
          </div>
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
          <div class="userListDelete2">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
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
        rowHeight={200}
        //pageSize={8}
        checkboxSelection 
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...data}
      />
    </div>
  );
}
/** align-items: center; */