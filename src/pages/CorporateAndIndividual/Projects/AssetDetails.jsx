import { Tabs } from "antd";
import AssetDashboard from "./components/AssetDashboard";
import Calculation from "./components/Calculation";
import CalculationSetting from "./components/CalculationSetting";
import CashFlows from "./components/CashFlows";
import IncomeAndCost from "./components/IncomeAndCost";
import RentRoll from "./components/RentRoll";
import ValuationHighLevel from "./components/ValuationHighLevel";

function AssetDetails() {
  return (
    <div className="assetDetails">
      <div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Asset Dashboard" key="1">
            {/* <Tabs.TabPane tab={<Link to={PATH.ASSET_DASHBOARD}>Asset Dashboard</Link>} key="1"> */}
            <AssetDashboard />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Calculation" key="2">
            <Calculation />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Income &amp; Cost" key="3">
            <IncomeAndCost />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Rent Roll" key="4">
            <RentRoll />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Cashflows" key="5">
            <CashFlows />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Calculation Setting" key="6">
            <CalculationSetting />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Valuation High Level" key="7">
            <ValuationHighLevel />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default AssetDetails;
