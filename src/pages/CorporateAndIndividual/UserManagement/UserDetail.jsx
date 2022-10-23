import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Input, Dropdown, Menu, Checkbox, Row, Col, Avatar, Badge } from "antd";
import { FaShareSquare } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsEyeFill, BsFileEarmarkCheckFill, BsThreeDotsVertical } from "react-icons/bs";
import { MdArchive, MdDelete, MdEdit, MdModeEdit, MdShare } from "react-icons/md";
import SearchForm from "./component/SearchForm";
import DataTable from "../../../components/Theme/DataTable";
import IMAGES from "../../../assets/images";
import AddNewProjectModal from "./component/AddUserModal";
import EditProjectModal from "./component/EditUserModal";
import PATH from "../../../utils/path";

const { Search } = Input;

function UserDetail() {
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
                    label: <Checkbox>Project Type</Checkbox>,
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
                        <div className="d-flex justify-content-left align-items-center table-dropdown" role="button"
                            tabIndex="0"
                            onClick={() => navigate(PATH.CORPORATE_AND_INDIVIDUAL_PROJECT_DETAILS)}
                            onKeyDown={() => navigate(PATH.CORPORATE_AND_INDIVIDUAL_PROJECT_DETAILS)}>
                            <BsEyeFill />
                            <h5 className="mb-0 ml-3">View Project</h5>
                        </div>
                    ),
                },
                {
                    key: "2",
                    label: (
                        <div className="d-flex justify-content-left align-items-center table-dropdown" role="button"
                            tabIndex="0"
                            onClick={() => setEditProjectModal(true)}
                            onKeyDown={() => setEditProjectModal(true)}>
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
            title: "Project Manager",
            dataIndex: "projectManager",
            key: "projectManager",
        },
        {
            title: "Client Name",
            dataIndex: "clientName",
            key: "clientName",
        },
        {
            title: "Project Type",
            dataIndex: "projectType",
            key: "projectType",
        },
        {
            title: "Project Status",
            dataIndex: "projectStatus",
            key: "projectStatus",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            render: () => (
                <div>
                    <Dropdown overlay={profileDropdown} trigger={["click"]}>
                        <BsThreeDotsVertical className="cursor-pointer" />
                    </Dropdown>
                </div>
            ),
        },
    ];

    const dataSource = [
        {
            projectId: "01",
            projectManager: "Wade Warren",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectManager: "Wade Warren",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectManager: "Wade Warren",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            projectManager: "Wade Warren",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            projectManager: "Wade Warren",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            projectManager: "Wade Warren",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            projectManager: "Wade Warren",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            projectManager: "Wade Warren",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectManager: "Wade Warren",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectManager: "Wade Warren",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectManager: "Wade Warren",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectManager: "Wade Warren",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectManager: "Wade Warren",
            projectCountry: "USA",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
        {
            projectId: "01",
            projectName: "Apparment Flare",
            clientName: "Mr Robert Fox",
            projectCountry: "USA",
            projectManager: "Wade Warren",
            projectStatus: "beginner",
            projectType: "Indirect",
        },
    ];

    return (
        <div>

            {/* Data Table */}

            <Row gutter={16} className="user-detail-wrapper">
                <Col xs={18}>
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
                                    <h5 className="mb-0 ml-3">Add New Project</h5>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={7}>
                            <div className="d-flex searchbar-project">
                                <span className="searchbar-icon"><FiSearch size={20} /></span>
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
                    <div className="mt-3">
                        <DataTable
                            columns={columns}
                            dataSource={dataSource}
                            pagination="true"
                            className="antd-table-striped"
                        />
                    </div>
                </Col>
                <Col xs={6}>
                    <div className="detail-drawer bg-white rounded-sm p-3 text-center shadow-sm" style={{ position: "fixed", right: "0" }}>
                        <Avatar size={64} src={IMAGES.KID} className="mt-3" style={{ border: "#e6e6e6 3px solid" }} />
                        <h3>Appostel</h3>
                        <Badge
                            count="Individual"
                            style={{
                                backgroundColor: '#6F7173',
                            }}
                        />
                        <div className="d-flex align-items-center justify-content-center mt-4">
                            <MdEdit size={33} className="p-2 bg-light-grey rounded-circle mx-1 cursor-pointer" />
                            <BsFileEarmarkCheckFill size={33} className="p-2 bg-light-grey rounded-circle mx-1 cursor-pointer" />
                            <MdDelete size={33} className="p-2 bg-light-grey rounded-circle mx-1 cursor-pointer" />
                        </div>
                        <Row className="mt-4 d-flex justify-content-center" gutter={10}>
                            <Col>
                                <h5 className="mb-1">
                                    Projects
                                </h5>
                                <h1 className="projects-count rounded-sm d-flex align-items-center justify-content-center text-blue">
                                    10
                                </h1>
                            </Col>
                            <Col>
                                <h5 className="mb-1">
                                    Portfolio
                                </h5>
                                <h1 className="projects-count rounded-sm d-flex align-items-center justify-content-center text-blue">
                                    10
                                </h1>
                            </Col>
                            <Col>
                                <h5 className="mb-1">
                                    Assets
                                </h5>
                                <h1 className="projects-count rounded-sm d-flex align-items-center justify-content-center text-blue">
                                    10
                                </h1>
                            </Col>
                        </Row>
                        <div className="custom-scroll custom-height mt-2" >
                            <li className="mt-4 px-3">
                                <h5 className="m-0 text-left">User ID</h5>
                                <p className="text-left">041</p>
                                <hr />
                            </li>
                            <li className="mt-4 px-3">
                                <h5 className="m-0 text-left">Created Date</h5>
                                <p className="text-left">02/02/2022</p>
                                <hr />
                            </li>
                            <li className="mt-4 px-3">
                                <h5 className="m-0 text-left">Email</h5>
                                <p className="text-left">Jessecarte@abc.com</p>
                                <hr />
                            </li>
                            <li className="mt-4 px-3">
                                <h5 className="m-0 text-left">Location</h5>
                                <p className="text-left">45 Elen street, NY</p>
                                <hr />
                            </li>
                            <li className="mt-4 px-3">
                                <h5 className="m-0 text-left">User ID</h5>
                                <p className="text-left">041</p>
                                <hr />
                            </li>
                            <li className="mt-4 px-3">
                                <h5 className="m-0 text-left">Created Date</h5>
                                <p className="text-left">02/02/2022</p>
                                <hr />
                            </li>
                        </div>
                    </div>
                </Col>
            </Row>

            <SearchForm visible={isModalOpen} handleCancel={closeModal} />
            <AddNewProjectModal visible={addNewProjectModal} handleCancel={closeAddNewProjectModal} />
            <EditProjectModal visible={editProjectModal} handleCancel={closeEditProjectModal} />
        </div>
    );
}
export default UserDetail;
