import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function Presettings() {
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
        title: "Cluster",
        children: [
          {
            title: "Selection",
            dataIndex: "cluster",
            key: "cluster",
          },
        ],
      },
      {
        title: "Sub-Cluster",
  
        children: [
          {
            title: "Selection",
            dataIndex: "subCluster",
            key: "subCluster",
          },
        ],
      },
      
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: " ",
        subCluster: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        cluster: "8/1/2013",
        subCluster: " ",
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

export default Presettings