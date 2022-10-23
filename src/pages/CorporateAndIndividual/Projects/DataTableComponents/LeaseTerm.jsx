import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function LeaseTerm() {
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
        title: "Start",
        children: [
          {
            title: "DD.MM.YYYY",
            dataIndex: "startDdMmYyyy",
            key: "ddMmYyyy",
          },
        ],
      },
      {
        title: "End",
  
        children: [
          {
            title: "DD.MM.YYYY",
            dataIndex: "endDdMmYyyy",
            key: "endDdMmYyyy",
          },
        ],
      },
      {
        title: "Option 1",

        children: [
          {
            title: "DD.MM.YYYY",
            dataIndex: "option1",
            key: "option1",
          },
        ],
      },
      {
        title: "Option 2",
  
        children: [
          {
            title: "DD.MM.YYYY",
            dataIndex: "option2",
            key: "option2",
          },
        ],
      },
      {
        title: "Option 3",
  
        children: [
          {
            title: "DD.MM.YYYY",
            dataIndex: "option3",
            key: "option3",
          },
        ],
      }
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "8/1/2013",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "5/1/2007",
        endDdMmYyyy: "4/30/2031",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "1/1/1992",
        endDdMmYyyy: "4/30/2031",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "5/1/2007",
        endDdMmYyyy: "4/30/2031",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "10/1/2011",
        endDdMmYyyy: "4/30/2031",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "10/1/2011",
        endDdMmYyyy: "26.26",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "5/15/2013",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "9/1/2011",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "9/1/2011",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "5/1/2014",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "7/1/2013",
        endDdMmYyyy: "6/30/2025",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "7/1/2013",
        endDdMmYyyy: "6/30/2025",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "6/1/2010",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: "3/15/2015",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: " ",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        startDdMmYyyy: " ",
        endDdMmYyyy: " ",
        option1: " ",
        option2: " ",
        option3: " ",
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

export default LeaseTerm