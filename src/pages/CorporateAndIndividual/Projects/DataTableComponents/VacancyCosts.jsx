import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function VacancyCosts() {
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
        title: " ",
        children: [
          {
            title: "Eur / Sq M / Year",
            dataIndex: "vacancyCosts",
            key: "vacancyCosts",
          },
        ],
      }
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "0.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "9.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "0.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "9.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "18.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        vacancyCosts: "0.0",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        initial: "12",
        continuing: "9.0",
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

export default VacancyCosts