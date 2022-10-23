import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function VoidPeriod() {
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
        title: "Initial",
        children: [
          {
            title: "Months",
            dataIndex: "initial",
            key: "initial",
          },
        ],
      },
      {
        title: "Continuing",
  
        children: [
          {
            title: "Months",
            dataIndex: "continuing",
            key: "continuing",
          },
        ],
      }
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "3",
        continuing: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "12",
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

export default VoidPeriod