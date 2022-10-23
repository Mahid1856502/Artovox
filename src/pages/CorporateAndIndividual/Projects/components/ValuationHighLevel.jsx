import {Col, Row } from "antd";
import AreaAndIncome from "./ValuationHighLevel/AreaAndIncome";
import AssetValue from "./ValuationHighLevel/AssetValue";
import CostsAndVoidPeriods from "./ValuationHighLevel/CostsAndVoidPeriods";
import ExitValue from "./ValuationHighLevel/ExitValue";
import Financing from "./ValuationHighLevel/Financing";
import FirstCalculationTable from "./ValuationHighLevel/FirstCalculationTable";
import HoldingPeriodAndExitCalculation from "./ValuationHighLevel/HoldingPeriodAndExitCalculation";
import InflationAndERVGrowth from "./ValuationHighLevel/InflationAndERVGrowth";
import OfficeBuilding from "./ValuationHighLevel/OfficeBuilding";

function ValuationHighLevel() {
  return (
    <div className="calculationComponent">

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
        <Col span={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <AreaAndIncome />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <CostsAndVoidPeriods />
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
    </div>
  );
}

export default ValuationHighLevel;
