import { Button, Col, Row } from "antd";
import AcquisitionCosts from "../DataTableComponents/AcquisitionCosts";
import AcquisitionCostsExit from "../DataTableComponents/AcquisitionCostsExit";
import AssetValue from "../DataTableComponents/AssetValue";
import AssumptionsParameter from "../DataTableComponents/AssumptionsParameter";
import ExitValue from "../DataTableComponents/ExitValue";
import Financing from "../DataTableComponents/Financing";
import FirstCalculationTable from "../DataTableComponents/FirstCalculationTable";
import HoldingPeriodAndExitCalculation from "../DataTableComponents/HoldingPeriodAndExitCalculation";
import InflationAndERVGrowth from "../DataTableComponents/InflationAndERVGrowth";
import OfficeBuilding from "../DataTableComponents/OfficeBuilding";

function Calculation() {
  return (
    <div className="calculationComponent">
      <Row
        gutter={24}
        className="d-flex justify-content-between align-items-center button-search"
      >
        <Col span={24} xs={24}>
          <div className="d-flex">
            <span>
              <Button key="submit" type="default" className="btn-primary">
                  Valuation Expert
              </Button>
            </span>
            <span>
              <Button key="submit" type="default" className="btn-sure ml-1">
                Valuation High Level
              </Button>
            </span>
          </div>
        </Col>
      </Row>
      <Row gutter={24} className="mt-4">
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <FirstCalculationTable />
        </Col>
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <OfficeBuilding />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <AssetValue />
        </Col>
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <ExitValue />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <AcquisitionCosts />
        </Col>
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <AcquisitionCostsExit />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <InflationAndERVGrowth />
          <HoldingPeriodAndExitCalculation />
        </Col>
        <Col span={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <Financing />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <AssumptionsParameter />
        </Col>
      </Row>
    </div>
  );
}

export default Calculation;
