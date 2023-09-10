import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const { data } = useFetch(`/api/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);


  return (
    <div className="datatable">
      {list && ( // Render DataGrid only if list is defined
        <DataGrid
          className="datagrid"
          rows={list}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      )}
    </div>
  );
};

export default Datatable;
