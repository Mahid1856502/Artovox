import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';


function Duration() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    };
  
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const columns = [
      {
        title: "No.",
        children: [
          {
            title: "",
            dataIndex: "no",
            key: "no",
          },
        ],
      },
  
      {
        title: "PID",
        children: [
          {
            title: "Text",
            dataIndex: "pid",
            key: "pid",
          },
        ],
      },
      {
        title: "Status/Type",
        children: [
          {
            title: "Selection",
            dataIndex: "status",
            key: "status",
          },
        ],
      },
      {
        title: "Open Ended",
        children: [
          {
            title: "Months",
            dataIndex: "openEnded",
            key: "openEnded",
          },
        ],
      },
      {
        title: "Re-Letting",
  
        children: [
          {
            title: "Months",
            dataIndex: "reLetting",
            key: "reLetting",
          },
        ],
      },
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        openEnded: "60",
        reLetting: "60",
      },
    ];
  
  return (
    
    <div className="mt-3 two-header">
        <DataTable
          columns={columns}
          dataSource={dataSource}
          pagination="true"
          className="antd-table-striped"
          rowSelection={rowSelection}
        />
      </div>
  )
}

export default Duration