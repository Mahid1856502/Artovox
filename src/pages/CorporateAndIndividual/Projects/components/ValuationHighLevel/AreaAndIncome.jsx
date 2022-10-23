import { Card, Cascader, Col, Input, InputNumber, Row, Slider } from "antd";
import { useState } from "react";
import IncDecCounter from "../../DataTableComponents/IncDecCounter";

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

function IntegerStep() {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <Row>
      <Col span={24}>
        <Slider
          min={1}
          max={80}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col>
        <InputNumber
          min={1}
          max={80}
          className="mx-2"
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
}

function AreaAndIncome() {
  return (
    <div className="areaAndIncome">
      <Card bordered={false}>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="text-black" >Area & Income</h3>
            </div>
          </div>
          <hr className="mt-0 border-top-0 border-2" />
        </div>

        <div className="row pt-2 d-flex justify-content-between">
          <div className="col-xs-4">
            <IntegerStep />
          </div>
          <div className="col-xs-4">
            <h4>Current Rent</h4>
            <div className="d-flex align-items-center">
              <div>
                <Cascader options={options} placeholder="EUR / Sqm" />
              </div>
              <div className="pl-2">
                <Input className="empty-input" />
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <h4>EUR / sqm</h4>
            <div className="d-flex align-items-center justify-content-end">
              <p className="mb-0 pl-2">18.00</p>
            </div>
          </div>
          <div className="col-xs-4">
            <h4>EUR p.a.</h4>
            <div className="d-flex align-items-center justify-content-end">
              <p className="mb-0 pl-2">1,157,328</p>
            </div>
          </div>
          <div className="col-xs-4">
            <h4>Wait Y</h4>
            <div>
              <IncDecCounter />
            </div>
          </div>
          <div className="col-xs-4">
            <h4>Current Rent Indexation</h4>
            <div className="d-flex align-items-center">
              <div>
                <Cascader
                  options={options}
                  placeholder="Yearly 100%"
                  className="current-rent-indexation-cascader"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-4 d-flex justify-content-between">
          <div className="col-xs-4">
            <h4>Market Rent</h4>
            <div className="d-flex align-items-center">
              <div>
                <Cascader options={options} placeholder="EUR / Sqm" />
              </div>
              <div className="pl-2">
                <Input className="empty-input" />
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <h4>EUR / sqm</h4>
            <div className="d-flex align-items-center justify-content-end">
              <p className="mb-0 pl-2">18.00</p>
            </div>
          </div>
          <div className="col-xs-4">
            <h4>EUR p.a.</h4>
            <div className="d-flex align-items-center justify-content-end">
              <p className="mb-0 pl-2">1,157,328</p>
            </div>
          </div>
          <div className="col-xs-4">
            <h4>Market lease (Y)</h4>
            <div>
              <IncDecCounter />
            </div>
          </div>
          <div className="col-xs-4 pr-6">
            <h4>Renewal Probability</h4>
            <div className="d-flex align-items-center">
              <div>
                <IncDecCounter />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AreaAndIncome;
