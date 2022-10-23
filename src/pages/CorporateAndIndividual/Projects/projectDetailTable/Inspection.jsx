import { Button, Col, Divider, Row } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import { MdDelete, MdModeEdit } from "react-icons/md";
import DataTable from "../../../../components/Theme/DataTable";

export default function Inspection(props) {
    const { showDrawer } = props;
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
      onCell: (data) => ({className: data.type === 1 ? "red-border" : "blue-border"}),
      dataIndex: "no",
      key: "no",
    },

    {
      title: "Asset ID",
      dataIndex: "assetID",
      key: "assetID",
    },
    {
      title: "Analysis Date",
      dataIndex: "analysisDate",
      key: "analysisDate",
    },
    {
      title: "Asset Name",
      dataIndex: "assetName",
      key: "assetName",
      render: (text) => (
        <div  role="button"
        tabIndex="0"
        onClick={showDrawer}
        onKeyDown={showDrawer}
        className="cursor-pointer">
          <p className="mb-1 text-black">{text}</p>
        </div>
      ),
    },
    {
      title: "Asset Type",
      dataIndex: "assetType",
      key: "assetType",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "street",
    },
    {
      title: "House No",
      dataIndex: "houseNo",
      key: "houseNo",
    },
    {
      title: "Asset Value",
      dataIndex: "assetValue",
      key: "assetValue",
    },
  ];

  const dataSource = [
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:1,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:2,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:1,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:2,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:1,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:2,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:1,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:2,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:1,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:2,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:1,
    },
    {
      no: "01",
      assetID: "012",
      analysisDate: "02/03/2022",
      assetName: "Blue Sky",
      assetType: "Redsidentail",
      city: "Berlin",
      street: "Kolonie Parkkol",
      houseNo: "44.",
      assetValue: "454354",
      type:2,
    },
  ];
  return (
    <div>
      <div className="mt-3">
        <DataTable
          columns={columns}
          dataSource={dataSource}
          pagination="true"
          className="antd-table-striped"
          rowSelection={rowSelection}
        />
      </div>
      <div className="table-count">
        <h5 className="table-count-content">Showing 1 to 9 of 120 entries</h5>
      </div>
      <Row gutter={24}>
        <Col xs={8}>
          <div className="table-footer-btn d-flex align-items-center">
            <div className="align-items-center bg-white d-flex justify-content-between rounded-sm btn-action-div">
              <Button
                className="btn-action d-flex justify-content-center align-items-center text-danger"
                // onClick={() => setDeleteUserModal(true)}
              >
                <MdDelete />{" "}
                <h5 className="mb-0 ml-1 mt-1 text-danger">Delete</h5>
              </Button>
              <Divider type="vertical" />
              <Button
                className="btn-action d-flex justify-content-center align-items-cente"
                // onClick={() => setEditUserModal(true)}
              >
                <MdModeEdit className="mt-1" />
                <h5 className="mb-0 ml-1 mt-1">Edit</h5>
              </Button>
              <Divider type="vertical" />
              <Button className="btn-action d-flex justify-content-center align-items-cente">
                <BsFileEarmarkExcelFill className="mt-1" />
                <h5 className="mb-0 ml-1 mt-1">Asign Task</h5>{" "}
              </Button>
            </div>

            <Button className="btn-cancel">
              <h5>Cancel</h5>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
Inspection.propTypes = {
    showDrawer: PropTypes.node.isRequired,
  };