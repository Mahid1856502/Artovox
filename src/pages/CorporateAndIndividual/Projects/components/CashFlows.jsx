import { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Dropdown,
  Menu,
  Row,
  Switch,
  Input,
} from "antd";
import { TbAdjustmentsHorizontal, TbTableExport } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import IMAGES from "../../../../assets/images";
import SearchForm from "../../UserManagement/component/SearchForm";

function CashFlows() {
  // Hide Table Column Dropdown
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { Search } = Input;
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
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="cashFlowsComponent">
      <Row
        gutter={24}
        className="d-flex justify-content-between align-items-center button-search"
      >
        <Col xs={5}>
          <div className="cashflows-first-btns">
            <span>
              <Button
                key="submit"
                type="default"
                className="cashflows-monthly-btn"
              >
                Monthly
              </Button>
            </span>
            <span>
              <Button
                key="submit"
                type="default"
                className="cashflows-yearly-btn ml-1"
              >
                Yearly
              </Button>
            </span>
            <span>
              <Switch className=" ml-3 my-auto" />
            </span>
            <span className="ml-2 my-auto show-tenants"> Show Tenants</span>
          </div>
        </Col>

        <Col>
          <div className="cashFlows d-flex searchbar-project justify-content-end">
            {/* <div className="d-flex">
              <Button
                type="default"
                className="cashflows-export-btn d-flex ">
                  <TbTableExport size={25} className="casflows-export-icon"/>       
                <h5 className="mb-0 ml-2 mt-1">Export Report</h5>
              </Button>
            </div> */}
            
            {/* <span className="filter-icon-span cashflows-filter-icon ml-2">
              <TbAdjustmentsHorizontal size={23} className="my-2 mx-2"/>
            </span> */}
            <Col>
              <div className="d-flex searchbar-project">
                <span className="searchbar-icon">
                  <FiSearch size={20} />
                </span>

                <Search
                  placeholder="Search a project"
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </Col>
            <span className="filter-icon-span cashflows-filter-icon mr-3">
              <TbTableExport size={23} className="my-2 mx-2" />
              <TbAdjustmentsHorizontal size={23} className="my-2" />
            </span>
            <SearchForm visible={isModalOpen} handleCancel={closeModal} />
            <Dropdown overlay={hideTableColumns} trigger={["click"]}>
              <span className="filter-icon-span cashflows-filter-icon">
                <img src={IMAGES.TABLE_ICON} alt="Table Icon" />
              </span>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CashFlows;
