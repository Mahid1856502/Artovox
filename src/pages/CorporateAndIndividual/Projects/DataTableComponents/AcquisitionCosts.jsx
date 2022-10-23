import { Card, Checkbox, Col, Row } from "antd";
import IncDecCounter from "./IncDecCounter";

function AcquisitionCosts() {
  return (
    <div>
      <Card bordered={false}>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="text-black">Acquisition Costs</h3>
            </div>
            <div>
              <Checkbox style={{ color: "#6F7173" }}>
                ADJUST AUTOMATICALLY
              </Checkbox>
            </div>
          </div>
          <hr className="mt-0 border-top-0 border-2" />
        </div>
        <Row gutter={24} className="pt-2 d-flex justify-content-between">
          <Col xs={8} className="align-items-center my-2">
            <h4>Transfer Tax</h4>
          </Col>
          <Col xs={8}>
            <IncDecCounter />
          </Col>
          <Col
            xs={8}
            className="d-flex align-items-center my-2 justify-content-end"
          >
            <h4>1,404,000 €</h4>
          </Col>
        </Row>
        <Row gutter={24} className="pt-2 d-flex justify-content-between">
          <Col xs={8} className="align-items-center my-2">
            <h4>Agent Costs</h4>
          </Col>
          <Col xs={8}>
            <IncDecCounter />
          </Col>
          <Col
            xs={8}
            className="d-flex align-items-center my-2 justify-content-end"
          >
            <h4>234,000 €</h4>
          </Col>
        </Row>
        <Row gutter={24} className="pt-2 d-flex justify-content-between">
          <Col xs={8} className="align-items-center my-2">
            <h4>Notary Costs</h4>
          </Col>
          <Col xs={8}>
            <IncDecCounter />
          </Col>
          <Col
            xs={8}
            className="d-flex align-items-center my-2 justify-content-end"
          >
            <h4>117,000 €</h4>
          </Col>
        </Row>
        <Row gutter={24} className="pt-2 d-flex justify-content-between">
          <Col xs={8} className="align-items-center my-2">
            <h4>Total acuisition Costs</h4>
          </Col>
          <Col
            xs={8}
            className="d-flex align-items-center my-2 justify-content-center"
          >
            <h4>7.50 %</h4>
          </Col>
          <Col
            xs={8}
            className="d-flex align-items-center my-2 justify-content-end"
          >
            <h4>1,755,000 €</h4>
          </Col>
        </Row>
        <Row
          gutter={24}
          className="pt-2 d-flex justify-content-between"
          style={{ "background-color": "#F2F4F7" }}
        >
          <Col xs={8} className="align-items-center my-2">
            <h4>Gross Asset Value</h4>
          </Col>
          <Col
            xs={8}
            className="d-flex align-items-center my-2  justify-content-center"
          >
            <h4>5,600 €/sqm</h4>
          </Col>
          <Col
            xs={8}
            className="d-flex align-items-center my-2 justify-content-end"
          >
            <h4>25,155,000 €</h4>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default AcquisitionCosts;
