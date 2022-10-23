import { Button, Checkbox, Col, Divider, Dropdown, Input, Menu, Row } from "antd";
import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import IMAGES from "../../../assets/images";
import DataTable from "../../../components/Theme/DataTable";
import SearchForm from "./component/SearchForm";
import AddUserModal from "./component/AddUserModal";
import EditUserModal from "./component/EditUserModal";
import DeleteUserModal from "./component/DeleteUserModal";
import PATH from "../../../utils/path";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);

  const navigate = useNavigate();
  const { Search } = Input;
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeAddUserModal = () => {
    setAddUserModal(false);
  };
  const closeEditUserModal = () => {
    setEditUserModal(false);
  };
  const closeDeleteUserModal = () => {
    setDeleteUserModal(false);
  };
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
          title: "Text",
          dataIndex: "no",
          key: "no",
        },
      ],
    },

    {
      title: "UID",
      children: [
        {
          title: "Text",
          dataIndex: "uid",
          key: "uid",
        },
      ],
    },
    {
      title: "Date",
      children: [
        {
          title: "DD.MM.YYYY",
          dataIndex: "date",
          key: "date",
        },
      ],
    },
    {
      title: "First Name",
      children: [
        {
          title: "Text",
          dataIndex: "firstName",
          key: "firstName",
          render: text => (
            <div
              role="presentation"
              className="cursor-pointer"
              onClick={() => navigate(PATH.CORPORATE_AND_INDIVIDUAL_USER_DETAIL)}>
              <p className="text-dark m-0">{text}</p>
            </div>
          )
        },
      ],
    },
    {
      title: "Last Name",

      children: [
        {
          title: "Text",
          dataIndex: "lastName",
          key: "lastName",
        },
      ],
    },
    {
      title: "Email",

      children: [
        {
          title: "Text",
          dataIndex: "email",
          key: "email",
        },
      ],
    },
    {
      title: "Role",

      children: [
        {
          title: "Selection",
          dataIndex: "role",
          key: "role",
        },
      ],
    },
    {
      title: "Location",

      children: [
        {
          title: "Selection",
          dataIndex: "location",
          key: "location",
        },
      ],
    },
  ];

  const dataSource = [
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
    {
      no: "1",
      uid: "041",
      date: "1/1/2022",
      firstName: "Appostel",
      lastName: "Gruppe",
      email: "Jesse Carter@abc.com",
      role: "Admin",
      location: "45 Elen Street , NY",
    },
  ];
  const hideTableColumns = (
    <Menu
      items={[
        {
          key: "1",
          type: "group",
          label: (
            <div>
              <h4 style={{ color: "#000" }}>Hide table columns</h4>
            </div>
          ),
        },
        {
          key: "2",
          label: <Checkbox>Project ID</Checkbox>,
        },
        {
          key: "3",
          label: <Checkbox>Project Name</Checkbox>,
        },
        {
          key: "4",
          label: <Checkbox>Client Name</Checkbox>,
        },
        {
          key: "5",
          label: <Checkbox>Project Country</Checkbox>,
        },
        {
          key: "6",
          label: <Checkbox>Project State</Checkbox>,
        },
        {
          key: "7",
          label: <Checkbox>Project Address</Checkbox>,
        },
        {
          key: "8",
          label: (
            <div>
              <hr style={{ border: "1px solid #F2F3F5" }} />
              <Button className="reset-dropdown-btn">Reset</Button>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <div className="user-management">
      <Row
        gutter={24}
        className="d-flex justify-content-between align-items-center button-search"
      >
        <Col xs={5}>
          <div>
            <Button
              type="default"
              className="add-project-btn d-flex justify-content-between align-items-center new-user"
              onClick={() => setAddUserModal(true)}
            >
              <span className="project-btn-span">
                <AiOutlinePlus size={30} />
              </span>
              <h5 className="mb-0 ml-3">New User</h5>
            </Button>
          </div>
        </Col>
        <Col xs={7}>
          <div className="d-flex searchbar-project">
            <span className="searchbar-icon">
              <FiSearch size={20} />
            </span>
            <Search
              className="mr-2"
              placeholder="Search a project"
              onClick={() => setIsModalOpen(true)}
            />
            <Dropdown overlay={hideTableColumns} trigger={["click"]}>
              <span className="filter-icon-span">
                <img src={IMAGES.TABLE_ICON} alt="Table Icon" />
              </span>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <div className="mt-3 two-header">
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
                onClick={() => setDeleteUserModal(true)}
              >
                <MdDelete /> <h5 className="mb-0 ml-1 mt-1 text-danger">Delete</h5>
              </Button>
              <Divider type="vertical" />
              <Button
                className="btn-action d-flex justify-content-center align-items-center"
                onClick={() => setEditUserModal(true)}
              >
                <MdModeEdit className="mt-1" />
                <h5 className="mb-0 ml-1 mt-1">Edit</h5>
              </Button>
              <Divider type="vertical" />
              <Button className="btn-action d-flex justify-content-center align-items-center">
                <BsFileEarmarkExcelFill className="mt-1" />
                <h5 className="mb-0 ml-1 mt-1">Asign Task</h5>{" "}
              </Button>
            </div>

            <Button className="btn-cancel">
              <h5 >Cancel</h5>
            </Button>
          </div>
        </Col>
      </Row>


      <SearchForm visible={isModalOpen} handleCancel={closeModal} />
      <AddUserModal visible={addUserModal} handleCancel={closeAddUserModal} />
      <EditUserModal
        visible={editUserModal}
        handleCancel={closeEditUserModal}
      />
      <DeleteUserModal
        visible={deleteUserModal}
        handleCancel={closeDeleteUserModal}
      />
    </div>
  );
}
