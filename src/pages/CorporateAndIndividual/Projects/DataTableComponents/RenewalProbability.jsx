import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function RenewalProbability() {
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
        title: "Option 1",
        children: [
          {
            title: "%",
            dataIndex: "option1",
            key: "option1",
          },
        ],
      },
      {
        title: "Option 2",
  
        children: [
          {
            title: "%",
            dataIndex: "option2",
            key: "option2",
          },
        ],
      },
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        option1: "50%",
        option2: "50%",
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

export default RenewalProbability