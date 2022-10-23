import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function NonRecoverableCostsTerm() {
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
        title: "Maintenance",
        children: [
          {
            title: "Eur / Sq M",
            dataIndex: "eurSqM",
            key: "eurSqM",
          },
        ],
      },
      {
        title: "Management",
  
        children: [
          {
            title: "%",
            dataIndex: "management",
            key: "management",
          },
        ],
      },
      {
        title: "Other Costs",
  
        children: [
          {
            title: "%",
            dataIndex: "otherCosts",
            key: "otherCosts",
          },
        ],
      },
      
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "0.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "4.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "0.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "4.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "8.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "0.0",
        management: "0.5%",
        otherCosts: "0.5%",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        eurSqM: "4.0",
        management: "0.5%",
        otherCosts: "0.5%",
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

export default NonRecoverableCostsTerm