import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function RelettingCosts() {
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
        title: "Initial TI's",
        children: [
          {
            title: "Eur / Sq M",
            dataIndex: "initialTI",
            key: "initialTI",
          },
        ],
      },
      {
        title: "Cont. TI's",
  
        children: [
          {
            title: "Eur / Sq M",
            dataIndex: "contTI",
            key: "contTI",
          },
        ],
      },
      {
        title: "Agent Costs",
  
        children: [
          {
            title: "Months",
            dataIndex: "agentCosts",
            key: "agentCosts",
          },
        ],
      }
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "350.0",
        contTI: "350.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "350.0",
        contTI: "350.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "0",
        contTI: "0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "50.0",
        contTI: "50.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "50.0",
        contTI: "50.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "0.0",
        contTI: "0.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "0.0",
        contTI: "0.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "350.0",
        contTI: "350.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "350.0",
        contTI: "350.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "350.0",
        contTI: "350.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "50.0",
        contTI: "50.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "0.0",
        contTI: "0.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "350.0",
        contTI: "350.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "50.0",
        contTI: "50.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "0.0",
        contTI: "0.0",
        agentCosts: "3",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initialTI: "0.0",
        contTI: "0.0",
        agentCosts: "3",
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

export default RelettingCosts