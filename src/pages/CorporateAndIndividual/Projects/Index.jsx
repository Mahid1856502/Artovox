import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Input, Dropdown, Menu, Checkbox, Row, Col } from "antd";
import { FaShareSquare } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsEyeFill, BsThreeDotsVertical } from "react-icons/bs";
import { MdArchive, MdModeEdit, MdShare } from "react-icons/md";
import SearchForm from "./components/SearchForm";
import DataTable from "../../../components/Theme/DataTable";
import IMAGES from "../../../assets/images";
import AddNewProjectModal from "./components/AddNewProjectModal";
import PATH from "../../../utils/path";
import EditProjectModal from "./components/EditProjectModal";

const { Search } = Input;

function Index() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addNewProjectModal, setAddNewProjectModal] = useState(false);
  const [editProjectModal, setEditProjectModal] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeAddNewProjectModal = () => {
    setAddNewProjectModal(false);
  };
  const closeEditProjectModal = () => {
    setEditProjectModal(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Hide Table Column Dropdown
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

  // profile Dropdown
  const profileDropdown = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div
              className="d-flex justify-content-left align-items-center table-dropdown"
              role="button"
              tabIndex="0"
              onClick={() =>
                navigate(PATH.CORPORATE_AND_INDIVIDUAL_PROJECT_DETAILS)
              }
              onKeyDown={() =>
                navigate(PATH.CORPORATE_AND_INDIVIDUAL_PROJECT_DETAILS)
              }
            >
              <BsEyeFill />
              <h5 className="mb-0 ml-3">View Project</h5>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div
              className="d-flex justify-content-left align-items-center table-dropdown"
              role="button"
              tabIndex="0"
              onClick={() => setEditProjectModal(true)}
              onKeyDown={() => setEditProjectModal(true)}
            >
              <MdModeEdit />
              <h5 className="mb-0 ml-3">Edit project</h5>
            </div>
          ),
        },
        {
          key: "3",
          label: (
            <div className="d-flex justify-content-left align-items-center table-dropdown">
              <MdArchive />
              <h5 className="mb-0 ml-3">Archive Project</h5>
            </div>
          ),
        },
        {
          key: "4",
          label: (
            <div className="d-flex justify-content-left align-items-center table-dropdown">
              <MdShare />
              <h5 className="mb-0 ml-3">Share Project</h5>
            </div>
          ),
        },
        {
          key: "5",
          label: (
            <div className="d-flex justify-content-left align-items-center table-dropdown">
              <FaShareSquare />
              <h5 className="mb-0 ml-3">Export Project</h5>
            </div>
          ),
        },
      ]}
    />
  );
  const columns = [
    {
      title: "Project ID",
      dataIndex: "projectId",
      key: "projectId",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Project Country",
      dataIndex: "projectCountry",
      key: "projectCountry",
    },
    {
      title: "Project State",
      dataIndex: "projectState",
      key: "projectState",
    },
    {
      title: "Project Address",
      dataIndex: "projectAddress",
      key: "projectAddress",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div>
          <Dropdown overlay={profileDropdown} trigger={["click"]}>
            <BsThreeDotsVertical />
          </Dropdown>
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
    {
      projectId: "01",
      projectName: "Apparment Flare",
      clientName: "Mr Robert Fox",
      projectCountry: "USA",
      projectState: "Texas",
      projectAddress: "2464 Royal Ln. Mesa, New...",
    },
  ];

  return (
    <div>
      <Row
        gutter={24}
        className="d-flex justify-content-between align-items-center button-search"
      >
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
              <h5 className="mb-0 ml-3">Add New Project</h5>
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
      <AddNewProjectModal
        visible={addNewProjectModal}
        handleCancel={closeAddNewProjectModal}
      />
      <EditProjectModal
        visible={editProjectModal}
        handleCancel={closeEditProjectModal}
      />
    </div>
  );
}
export default Index;
