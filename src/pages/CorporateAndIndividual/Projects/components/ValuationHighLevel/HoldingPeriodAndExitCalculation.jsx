import { Card, Cascader, Checkbox, Col, Input, Row } from "antd";
import IncDecCounter from "../../DataTableComponents/IncDecCounter";

function HoldingPeriodAndExitCalculation() {
  const options = [
    {
      value: "demo",
      label: "Potential",
    },
    {
      value: "demo2",
      label: "Jiangsu",
    },
  ];

  return (
    <div className="holdingPeriod">
      <Card bordered={false}>
        <div>
          <div>
            <h3 className="text-black">
              Holding Period & Exit Calculation
            </h3>
          </div>
          <hr className="border-top-0 border-2 mt-0" />
        </div>
        <Row gutter={24}>
          <Col xs={8}>
            <h4>Year</h4>
            <IncDecCounter />
          </Col>
          <Col xs={8}>
            <h4>Base Rent</h4>
            <Cascader options={options} placeholder="Potential Rent" />
          </Col>
          <Col xs={8}>
            <h4>Non Rec. Costs</h4>
            <div className="d-flex align-items-center">
              <div>
                <Input
                  className="bp-input"
                />
              </div>
              <div className="d-flex align-items-center ml-2">
                <Checkbox>INDIVIDUAL</Checkbox>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default HoldingPeriodAndExitCalculation;
