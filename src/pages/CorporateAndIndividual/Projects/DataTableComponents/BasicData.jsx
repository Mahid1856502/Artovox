import { useState } from "react";
import DataTable from '../../../../components/Theme/DataTable';

function BasicData() {

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
        title: "Tenant Name",
        children: [
          {
            title: "Text",
            dataIndex: "tenantName",
            key: "tenantName",
          },
        ],
      },
      {
        title: "Description#1",
  
        children: [
          {
            title: "Text",
            dataIndex: "description1",
            key: "description1",
          },
        ],
      },
      {
        title: "Description#2",
  
        children: [
          {
            title: "Text",
            dataIndex: "description2",
            key: "description2",
          },
        ],
      },
      {
        title: "Location/Floor",
  
        children: [
          {
            title: "Text",
            dataIndex: "location",
            key: "location",
          },
        ],
      },
      {
        title: "Use Group",
  
        children: [
          {
            title: "Selection",
            dataIndex: "useGroup",
            key: "useGroup",
          },
        ],
      },
      {
        title: "Use",
  
        children: [
          {
            title: "Selection",
            dataIndex: "use",
            key: "use",
          },
        ],
      },
      {
        title: "Area/Unit",
  
        children: [
          {
            title: "Sqm/Unit",
            dataIndex: "area",
            key: "area",
          },
        ],
      },
    ];
    const dataSource = [
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Abu Dhabi Tourism Authority",
        description1: "3060101777",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Office",
        area: "110.00",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Albrecht GmbH",
        description1: "3056006849",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Office",
        area: "319.20",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Albrecht GmbH",
        description1: "3056006849",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Parking Internal",
        area: "1.00",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Albrecht GmbH",
        description1: "3056006849",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Retail",
        area: "71.72",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "J Choo Germany GmbH",
        description1: "3060101544",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Retail",
        area: "86.86",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "J Choo Germany GmbH",
        description1: "3060101545",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Storage",
        area: "69.09",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "MLV Medizinische Logistik u.Verwaltungsgesellschaft mbH",
        description1: "3060101764",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Parking Internal",
        area: "1.00",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "MLV Medizinische Logistik u.Verwaltungsgesellschaft mbH",
        description1: "3060101463",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Office",
        area: "214.44",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "MLV Medizinische Logistik u.Verwaltungsgesellschaft mbH",
        description1: "3060101464",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Office",
        area: "214.44",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "One & Only Resorts GmbH",
        description1: "3060101808",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Office",
        area: "104.44",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Paule Ka SAS GmbH",
        description1: "3060101749",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Retail",
        area: "172.72",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Paule Ka SAS GmbH",
        description1: "3060101749",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Storage",
        area: "72.29",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Trading Technologies GmbH",
        description1: "3060101206",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Office",
        area: "110.98",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Verena Falk + Thomas Kastner",
        description1: "3060101868",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Residential",
        area: "104.78",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Vacancy",
        description1: " ",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Parking Internal",
        area: "4.00",
      },
      {
        no: "1",
        pid: "01",
        status: "LET",
        tenantName: "Vacancy",
        description1: " ",
        description2: " ",
        location: " ",
        useGroup: " ",
        use: "Storage",
        area: "15.12",
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

export default BasicData