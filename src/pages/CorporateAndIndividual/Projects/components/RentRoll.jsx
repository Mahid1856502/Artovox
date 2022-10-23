import { Button, Checkbox, Col, Dropdown, Menu, Row, Input, Tabs } from "antd";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RiFileExcel2Line } from "react-icons/ri";
import IMAGES from "../../../../assets/images";
import RentRollDataTable from "../DataTableComponents/BasicData";
import CurrentRent from "../DataTableComponents/CurrentRent";
import Duration from "../DataTableComponents/Duration";
import Indexation from "../DataTableComponents/Indexation";
import LeaseTerm from "../DataTableComponents/LeaseTerm";
import MarketRentAndTrueMR from "../DataTableComponents/MarketRentAndTrueMR";
import NonRecoverableCostsReletting from "../DataTableComponents/NonRecoverableCostsReletting";
import NonRecoverableCostsTerm from "../DataTableComponents/NonRecoverableCostsTerm";
import Presettings from "../DataTableComponents/Presettings";
import RelettingCosts from "../DataTableComponents/RelettingCosts";
import RenewalProbability from "../DataTableComponents/RenewalProbability";
import VacancyCosts from "../DataTableComponents/VacancyCosts";
import VoidPeriod from "../DataTableComponents/VoidPeriod";
import SearchForm from "./SearchForm";

function RentRoll() {
  const [current, setCurrent] = useState("mail");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Search } = Input;
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNewDropdown = (
    <Menu
      className="p-0 pt-2"
      items={[
        {
          key: "1",
          label: (
            <div className="d-flex justify-content-left align-items-center">
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

  const onClick = (e) => {
    setCurrent(e.key);
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
          label: <Checkbox>Column 1</Checkbox>,
        },
        {
          key: "3",
          label: <Checkbox>Column 2</Checkbox>,
        },
        {
          key: "4",
          label: <Checkbox>Column 3</Checkbox>,
        },
        {
          key: "5",
          label: <Checkbox>Column 4</Checkbox>,
        },
        {
          key: "6",
          label: <Checkbox>Column 5</Checkbox>,
        },
        {
          key: "7",
          label: <Checkbox>Column 6</Checkbox>,
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
    <div className="rentRoll">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        // items={items}
      />

      <Row
        gutter={24}
        className="d-flex justify-content-between align-items-center button-search"
      >
        <Col xs={5}>
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
                <span className="project-btn-span asset-details-add-new-btn">
                  <IoIosArrowDown size={30} />
                </span>
              </Button>
            </Dropdown>
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
      <div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Basic Data" key="1" className="" size={20}>
            <RentRollDataTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Current Rent" key="2">
            <CurrentRent />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Lease Term" key="3">
            <LeaseTerm />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Duration" key="4">
            <Duration />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Renewal Probability" key="5">
            <RenewalProbability />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Indexation" key="6">
            <Indexation />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Presettings" key="7">
            <Presettings />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Market Rent &amp; True MR" key="8">
            <MarketRentAndTrueMR />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Non Recoverable Costs - Term" key="9">
            <NonRecoverableCostsTerm />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Non Recoverable Costs - Reletting" key="10">
            <NonRecoverableCostsReletting />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Void Period" key="11">
            <VoidPeriod />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Vacancy Costs" key="12">
            <VacancyCosts />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Reletting Costs" key="13">
            <RelettingCosts />
          </Tabs.TabPane>
        </Tabs>
      </div>

      <SearchForm visible={isModalOpen} handleCancel={closeModal} />
    </div>
  );
}

export default RentRoll;
