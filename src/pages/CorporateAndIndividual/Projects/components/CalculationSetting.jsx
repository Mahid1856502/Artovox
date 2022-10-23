import { Col, Row, Tabs } from "antd";
import AcquisitionCostsCalculationSettings from "./AcquisitionCostsCalculationSettings";

import ConsumerPriceCalculationSettings from "./ConsumerPriceCalculationSettings";
import DefinitionCalculationSettings from "./DefintionCalculationSettings";
import GeneralCalculationSettings from "./GeneralCalculationSettings";

import MarketCalculationSettings from "./MarketCalculationSettings";





function CalculationSetting() {
  // const [mode, setMode] = useState("top");

  // const handleModeChange = (e) => {
  //   setMode(e.target.value);
  // };

  return (
    <div className="calculation-setting">
      <Row gutter={24}>
        <Col xs={24}>
          <div>

            <Tabs
              tabPosition="left"
              defaultActiveKey="1"

            >
              <Tabs.TabPane tab="General" key="1">

                <GeneralCalculationSettings />
              </Tabs.TabPane>

              <Tabs.TabPane tab="Definitions" key="2">
                <DefinitionCalculationSettings />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Calculations" key="3">
                <p>calculation</p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Market Value" key="4">
                <MarketCalculationSettings />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Acquisition Costs" key="5">
                <AcquisitionCostsCalculationSettings />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Price Index #1" key="6">
                <ConsumerPriceCalculationSettings />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Price Index #2" key="7">
                <CalculationSetting />
              </Tabs.TabPane>

            </Tabs >
          </div >
        </Col >


      </Row >
    </div >
  )
}

export default CalculationSetting
