import {
  Button,
  Checkbox,
  Col,
  Divider,
  Drawer,
  Dropdown,
  Input,
  Menu,
  Row,
  Tabs,
  Tag,
} from "antd";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdArchive,
  MdModeEdit,
  MdOutlineKeyboardArrowRight,
  MdShare,
} from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import IMAGES from "../../../assets/images";
import PATH from "../../../utils/path";
import SearchForm from "../UserManagement/component/SearchForm";
import CreateNewAsset from "./components/CreateNewAsset";
import BasicData from "./projectDetailTable/BasicData";
import Esg from "./projectDetailTable/Esg";
import Inspection from "./projectDetailTable/Inspection";
import InvestmentStrategy from "./projectDetailTable/InvestmentStrategy";
import Other from "./projectDetailTable/Other";
import PropertyAddress from "./projectDetailTable/PropertyAddress";
import PropertyAttributes from "./projectDetailTable/PropertyAttributes";
import Site from "./projectDetailTable/Site";

export default function ProjectDetails() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createNewAsset, setCreateNewAsset] = useState(false);
  const [open, setOpen] = useState(false);
  const { Search } = Input;
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const CreateNewAssetcloseModal = () => {
    setCreateNewAsset(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
  const addNewDropdown = (
    <Menu
      className="p-0 pt-2"
      items={[
        {
          key: "1",
          label: (
            <div
              className="d-flex justify-content-left align-items-center"
              role="button"
              tabIndex="0"
              onClick={() => setCreateNewAsset(true)}
              onKeyDown={() => setCreateNewAsset(true)}
            >
              <AiOutlinePlus className="mb-2 mx-auto" />
              <h5 className="DropdownItems">Add Manually</h5>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="d-flex justify-content-left align-items-center">
              <RiFileExcel2Line className="mb-2 mx-auto" />
              <h5 className="DropdownItems">Excel Upload</h5>
            </div>
          ),
        },
      ]}
    />
  );
  return (
    <div className={`project-details ${open === true ? "openSideBar" : ""}`}>
      <Row
        gutter={24}
        className="d-flex justify-content-between align-items-center button-search"
      >
        <Col xs={12}>
          <div className="d-flex justify-content-left align-items-center">
            <div>
              <Dropdown
                overlay={addNewDropdown}
                trigger={["click"]}
                direction="vertical"
              >
                <Button
                  type="default"
                  className="add-project-btn d-flex justify-content-between align-items-center"
                >
                  <h5 className="mb-0 ml-0">Add New</h5>
                  <span className="project-btn-span asset-details add-new-btn">
                    <IoIosArrowDown size={30} />
                  </span>
                </Button>
              </Dropdown>
            </div>
            <div className="table-footer-btn d-flex align-items-center ml-2">
              <div className="align-items-center bg-white d-flex justify-content-between rounded-sm btn-action-div">
                <Button className="btn-action d-flex justify-content-center align-items-center">
                  <h5 className="mb-0 ml-1">All</h5>
                </Button>
                <Divider type="vertical" />
                <Button className="btn-action d-flex justify-content-center align-items-center portofolio-btn">
                  <BsFillCircleFill size={10} fill="#DB5461" />
                  <h5 className="mb-0 ml-1">Potfolio’s</h5>
                </Button>
                <Divider type="vertical" />
                <Button className="btn-action d-flex justify-content-center align-items-center asset-btn">
                  <BsFillCircleFill size={10} fill="#2978A0" />
                  <h5 className="mb-0 ml-1">Assets</h5>
                </Button>
              </div>
            </div>
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

      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        visible={open}
        className="custom-drawer"
        width={300}
      >
        <div className="custom-drawer-content">
          <div className="text-center">
            <img src={IMAGES.DRAWER_ICON} alt="" />
          </div>
          <div>
            <h2 className="text-black font-weight-bold text-center pt-2 mb-1">
              Apparment Flare
            </h2>
            <span
              className="drawer-close-btn"
              role="button"
              tabIndex="0"
              onClick={onClose}
              onKeyDown={onClose}
            >
              <MdOutlineKeyboardArrowRight size={25} fill="#fff" />
            </span>
          </div>

          <Row gutter={12} className="d-flex justify-content-center">
            <Col xs={4}>
              <span className="drawer-action-icons cursor-pointer">
                <MdArchive size={20} fill="#6F7173" />
              </span>
            </Col>
            <Col xs={4}>
              <span className="drawer-action-icons cursor-pointer">
                <MdModeEdit size={20} fill="#6F7173" />
              </span>
            </Col>
            <Col xs={4}>
              <span className="drawer-action-icons cursor-pointer">
                <MdShare size={20} fill="#6F7173" />
              </span>
            </Col>
            <Col xs={4}>
              <span className="drawer-action-icons cursor-pointer">
                <FaShareSquare size={20} fill="#6F7173" />
              </span>
            </Col>
          </Row>
          <Row gutter={24} className="pt-3 pb-4 cards-row">
            <Col xs={12} className="pr-0">
              <Tag color="#DB5461" className="pt-2 pb-1 mr-0 drawer-card w-100 cursor-pointer"  role="button"
              tabIndex="0"
              onClick={() => navigate(PATH.CORPORATE_AND_INDIVIDUAL_ASSET_DETAILS)}
              onKeyDown={() => navigate(PATH.CORPORATE_AND_INDIVIDUAL_ASSET_DETAILS)}>
                <p className="text-white mb-0">Portfolio’s</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      src={IMAGES.PORTFOLIO_ICON}
                      alt=""
                      className="portfolio-img"
                    />
                  </div>
                  <div>
                    <h1 className="text-white mb-0">35</h1>
                  </div>
                </div>
              </Tag>
            </Col>
            <Col xs={12} className="pr-0">
              <Tag color="#2978A0" className="pt-2 pb-1 mr-0 drawer-card w-100 cursor-pointer" role="button"
              tabIndex="0"
              onClick={() => navigate(PATH.CORPORATE_AND_INDIVIDUAL_ASSET_DETAILS)}
              onKeyDown={() => navigate(PATH.CORPORATE_AND_INDIVIDUAL_ASSET_DETAILS)}>
                <p className="text-white mb-0">Assets</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      src={IMAGES.ASSETS_ICON}
                      alt=""
                      className="portfolio-img"
                    />
                  </div>
                  <div>
                    <h1 className="text-white mb-0">35</h1>
                  </div>
                </div>
              </Tag>
            </Col>
          </Row>
          <div>
            <div>
              <h5 className="mb-0 text-black">Project ID</h5>
              <p className="mb-0 text-gray pt-2">0122416</p>
            </div>
            <hr className="my-2" />
            <div>
              <h5 className="mb-0 text-black">Project manager</h5>
              <p className="mb-0 text-gray pt-2">Leslie Alexander</p>
            </div>
            <hr className="my-2" />
            <div>
              <h5 className="mb-0 text-black">Client Name</h5>
              <p className="mb-0 text-gray pt-2">Guy Hawkins</p>
            </div>
            <hr className="my-2" />
            <div>
              <h5 className="mb-0 text-black">Project type</h5>
              <p className="mb-0 text-gray pt-2">Capital</p>
            </div>
            <hr className="my-2" />
            <div>
              <h5 className="mb-0 text-black">Project Status</h5>
              <p className="mb-0 text-gray pt-2">Intermidate</p>
            </div>
          </div>
        </div>
      </Drawer>
      <div className="rentRoll">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Basic Data" key="1" className="" size={20}>
            <BasicData showDrawer={showDrawer} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Property Address" key="2">
            <PropertyAddress showDrawer={showDrawer} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Property Attributes" key="3">
            <PropertyAttributes showDrawer={showDrawer} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Investment Strategy" key="4">
            <InvestmentStrategy showDrawer={showDrawer} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Site" key="5">
            <Site showDrawer={showDrawer} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Inspection" key="6">
            <Inspection showDrawer={showDrawer} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="ESG" key="7">
            <Esg showDrawer={showDrawer} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Other" key="8">
            <Other showDrawer={showDrawer} />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <SearchForm visible={isModalOpen} handleCancel={closeModal} />
      <CreateNewAsset
        visible={createNewAsset}
        handleCancel={CreateNewAssetcloseModal}
      />
    </div>
  );
}
