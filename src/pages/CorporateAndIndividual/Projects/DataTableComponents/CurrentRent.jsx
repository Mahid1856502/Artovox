import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function CurrentRent() {
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
        title: "Per Sq M",
        children: [
          {
            title: "Eur",
            dataIndex: "perSqM",
            key: "perSqM",
          },
        ],
      },
      {
        title: "Per Month",
  
        children: [
          {
            title: "Eur",
            dataIndex: "perMonth",
            key: "perMonth",
          },
        ],
      },
      {
        title: "Per Year",

        children: [
          {
            title: "Eur",
            dataIndex: "perYear",
            key: "perYear",
          },
        ],
      },
      {
        title: "VAT",
  
        children: [
          {
            title: "%",
            dataIndex: "vat",
            key: "vat",
          },
        ],
      }
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "26.26",
        perMonth: "2,888.21",
        perYear: "34,658.52",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "28.17",
        perMonth: "8,992.33",
        perYear: "107,907.96",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "84.61",
        perMonth: "84.61",
        perYear: "1,015.32",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "80.85",
        perMonth: "5,798.54",
        perYear: "69,582.48",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "161.37",
        perMonth: "14,016.31",
        perYear: "168,195.72",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "3.23",
        perMonth: "223.18",
        perYear: "2,678.16",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "100.84",
        perMonth: "100.84",
        perYear: "1,210.08",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "19.46",
        perMonth: "4,173.00",
        perYear: "50,076.00",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "19.46",
        perMonth: "4,173.00",
        perYear: "50,076.00",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "24.54",
        perMonth: "2,563.42",
        perYear: "30,761.04",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "130.00",
        perMonth: "22,453.60",
        perYear: "269,443.20",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "8.71",
        perMonth: "629.77",
        perYear: "7,557.24",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "24.25",
        perMonth: "2,691.69",
        perYear: "32,300.28",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "9.50",
        perMonth: "995.00",
        perYear: "11,940.00",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "0.00",
        perMonth: " ",
        perYear: "0.00",
        vat: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        perSqM: "0.00",
        perMonth: " ",
        perYear: "0.00",
        vat: " ",
      }
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

export default CurrentRent