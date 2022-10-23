import { useState } from "react";
import DataTable from "../../../../components/Theme/DataTable";

function Indexation() {
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
      title: "Type",
      children: [
        {
          title: "Selection",
          dataIndex: "type",
          key: "type",
        },
      ],
    },
    {
      title: "Index",

      children: [
        {
          title: "Selection",
          dataIndex: "index",
          key: "index",
        },
      ],
    },
    {
      title: "Last",

      children: [
        {
          title: "DD.MM.YYYY",
          dataIndex: "last",
          key: "last",
        },
      ],
    },
    {
      title: "First",

      children: [
        {
          title: "DD.MM.YYYY",
          dataIndex: "first",
          key: "first",
        },
      ],
    },
    {
      title: "Next",

      children: [
        {
          title: "DD.MM.YYYY",
          dataIndex: "next",
          key: "next",
        },
      ],
    },
    {
      title: "Cycle",

      children: [
        {
          title: "Months",
          dataIndex: "cycle",
          key: "cycle",
        },
      ],
    },
    {
      title: "Hurdle",

      children: [
        {
          title: "PTS. / %",
          dataIndex: "hurdle",
          key: "hurdle",
        },
      ],
    },
    {
      title: "Factor",

      children: [
        {
          title: "%",
          dataIndex: "factor",
          key: "factor",
        },
      ],
    },
  ];
  const dataSource = [
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "8/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "5/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "None",
      index: " ",
      last: " ",
      first: " ",
      next: " ",
      cycle: " ",
      hurdle: " ",
      factor: " ",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "5/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "10/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "10/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "None",
      index: " ",
      last: " ",
      first: " ",
      next: " ",
      cycle: " ",
      hurdle: " ",
      factor: " ",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "9/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "9/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "5/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "7/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "7/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "6/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "None",
      index: " ",
      last: " ",
      first: " ",
      next: " ",
      cycle: " ",
      hurdle: " ",
      factor: " ",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "None",
      index: " ",
      last: " ",
      first: " ",
      next: " ",
      cycle: " ",
      hurdle: " ",
      factor: " ",
    },
    {
      no: "1",
      pid: "01",
      status: "LET",
      type: "CPI - Period",
      index: "VPI 15",
      last: " ",
      first: " ",
      next: "1/1/2019",
      cycle: "12",
      hurdle: " ",
      factor: "100%",
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
  );
}

export default Indexation;
