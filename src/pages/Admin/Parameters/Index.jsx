import { useState } from "react";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { Button, Input, Row, Col } from "antd";
import { FiSearch } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import SearchForm from "./components/SearchForm";
import DataTable from "../../../components/Theme/DataTable";
import ParameterModal from "./components/ParameterModal";
import DeleteConfirmation from "./components/DeleteConfirmation";

const { Search } = Input;

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addNewProjectModal, setAddNewProjectModal] = useState(false);
  const [editParameterModal, setEditParameterModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const closeEditParameterModal = () => {
    setEditParameterModal(false);
  };

  const closeAddNewProjectModal = () => {
    setAddNewProjectModal(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Parameter",
      dataIndex: "parameter",
      key: "parameter",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Created Date",
      dataIndex: "createddate",
      key: "createddate",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div>
          <AiFillDelete className="mr-2 cursor-pointer action-btn rounded-sm p-1" size={26} onClick={() => { setDeleteModal(true) }} />
          <MdEdit className="cursor-pointer action-btn rounded-sm p-1" size={26} onClick={() => { setEditParameterModal(true) }} />
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      id: 0,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 1,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 2,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 3,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 4,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 5,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 6,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 7,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 8,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 9,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 10,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
    {
      id: 11,
      parameter: "Parameter1",
      type: "Text",
      unit: "sqm",
      value: "19.2",
      createddate: "02/02/2022",
    },
  ];
  return (
    <div className="admin-parameter-wrapper">
      <Row gutter={24} className="d-flex justify-content-between align-items-center button-search">
        <Col xs={5}>
          <div>
            <Button
              type="default"
              className="add-project-btn d-flex justify-content-between align-items-center new-user"
              onClick={() => setAddNewProjectModal(true)}
            >
              <span className="project-btn-span">
                <AiOutlinePlus size={30} />
              </span>
              <h5 className="mb-0 ml-3">Add New</h5>
            </Button>
          </div>
        </Col>
        <Col xs={7}>
          <div className="d-flex searchbar-project">
            <span className="searchbar-icon"><FiSearch size={20} /></span>
            <Search
              className="mr-2"
              placeholder="Search a parameter"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </Col>
      </Row>
      {/* Data Table */}
      <div className="mt-3">
        <DataTable
          columns={columns}
          dataSource={dataSource}
          pagination="true"
          className="antd-table-striped"
        />
      </div>
      <SearchForm visible={isModalOpen} handleCancel={closeModal} />
      <ParameterModal modalHeading="Add New Parameter" visible={addNewProjectModal} handleCancel={closeAddNewProjectModal} />
      <ParameterModal modalHeading="Edit Parameter" visible={editParameterModal} handleCancel={closeEditParameterModal} />
      <DeleteConfirmation visible={deleteModal} handleCancel={closeDeleteModal} />
    </div>
  );
}
