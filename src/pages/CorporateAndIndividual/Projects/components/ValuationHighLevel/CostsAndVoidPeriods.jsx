import { Card, Cascader, Checkbox, Col, Row } from "antd";
import IncDecCounter from "../../DataTableComponents/IncDecCounter";

function CostsAndVoidPeriods() {
  const options = [
    {
      value: "demo",
      label: "Net initial yield (Potential)",
    },
    {
      value: "demo2",
      label: "Jiangsu",
    },
  ];

  return (
    <div className="assumptionsParameter">
      <Card bordered={false}>
        <div>
          <div>
            <h3 className="text-black">Costs & Void Periods</h3>
          </div>
          <hr className="border-top-0 border-2 mt-0" />
        </div>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={6} className="d-flex align-items-center pt-5">
            <h4>Non Recoverable Costs (ongoing)</h4>
          </Col>
          <Col xs={9} className="d-flex">
            <div>
              <h4 className="d-flex justify-content-center">Initial/Term</h4>
              <div className="d-flex align-items-center">
                <div>
                  <Cascader options={options} placeholder="EUR / Sqm" />
                </div>
                <div className="d-flex align-items-center ml-2">
                  <div>
                    <IncDecCounter />
                  </div>
                  <div>
                    <h4 className="mb-0 ml-2">%</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={9} className="d-flex align-items-center">
            <div>
              <div className="d-flex justify-conetnt-start align-items-baseline">
                <Checkbox className="sync-text-color">SYNC</Checkbox>
                <h4 className="pl-5">Continuing Market</h4>
              </div>
              <div className="d-flex align-items-center ">
                <div>
                  <Cascader options={options} placeholder="EUR / Sqm" />
                </div>
                <div className="d-flex align-items-center ml-2">
                  <div>
                    <IncDecCounter />
                  </div>
                  <div>
                    <h4 className="mb-0 ml-2">%</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={6} className="d-flex align-items-center pt-1">
            <h4>Reletting Costs After Lease Expiry</h4>
          </Col>
          <Col xs={9} className="d-flex">
            <div className="col-xs-4 d-flex align-items-center">
              <div>
                <Cascader options={options} placeholder="EUR / Sqm" />
              </div>
              <div className="d-flex align-items-center ml-2">
                <div>
                  <IncDecCounter />
                </div>
                <div>
                  <h4 className="mb-0 ml-2">EUR/sqm</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={9} className="d-flex">
            <div className="col-xs-4 d-flex align-items-center">
              <div>
                <Cascader options={options} placeholder="EUR / Sqm" />
              </div>
              <div className="d-flex align-items-center ml-2">
                <div>
                  <IncDecCounter />
                </div>
                <div>
                  <h4 className="mb-0 ml-2">EUR/sqm</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={6} className="d-flex align-items-center pt-1">
            <h4>Void Periods After Lease Expiry</h4>
          </Col>
          <Col xs={9} className="d-flex">
            <div className=" col-xs-4 d-flex align-items-center">
              <div>
                <Cascader options={options} placeholder="EUR / Sqm" />
              </div>
              <div className="d-flex align-items-center ml-2">
                <div>
                  <IncDecCounter />
                </div>
                <div>
                  <h4 className="mb-0 ml-2">Months</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={9} className="d-flex">
            <div className=" col-xs-4 d-flex align-items-center">
              <div>
                <Cascader options={options} placeholder="EUR / Sqm" />
              </div>
              <div className="d-flex align-items-center ml-2">
                <div>
                  <IncDecCounter />
                </div>
                <div>
                  <h4 className="mb-0 ml-2">Months</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CostsAndVoidPeriods;
