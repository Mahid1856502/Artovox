import { Card, Col, Input, Row } from "antd";

function AssumptionsParameter() {
  return (
    <div className="assumptionsParameter">
      <Card bordered={false}>
        <div>
          <div>
            <h3 className="text-black">Assumptions / Parameter</h3>
          </div>
          <hr className="border-top-0 border-2 mt-0" />
        </div>
        <Row gutter={24} className="align-items-center mt-4 mb-2 ">
          <Col xs={9} className="d-flex align-items-center">
            <span> </span>
          </Col>
          <Col xs={3}>
            <span className="input-headings d-flex justify-content-center">
              Office
            </span>
          </Col>
          <Col xs={3}>
            <span className="input-headings d-flex justify-content-center">
              Retail
            </span>
          </Col>
          <Col xs={3}>
            <span className="input-headings d-flex justify-content-center">
              Residential
            </span>
          </Col>
          <Col xs={3}>
            <span className="input-headings d-flex justify-content-center">
              Parking
            </span>
          </Col>
          <Col xs={3}>
            <span className="input-headings d-flex justify-content-center">
              Storage
            </span>
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Market Rent/ €sq m or unit/month</h4>
          </Col>
          <Col xs={3}>
            <Input className="assumptions-input-filed" />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Initial Renewal Probability in %</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Cotiunuing Renewal Probability</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Lease Duration - open end contracts</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Lease Duration - open end contract</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mt-4 mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4 className="font-weight-bold">Reletting Costs</h4>
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Viod period - initial in month</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Void period - continuing in month</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Vacancy Costs €/sq m/year</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Initial Tenant Improvements (TI&apos;s) €/sq m/year</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Continuing Tenant Improvements (TI&apos;s) €/sq m/year</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Agent Costs in month</h4>
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
          <Col xs={3}>
            <Input />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mt-4 mb-2 ">
          <Col xs={9} className="d-flex align-items-center">
            <h4 className="font-weight-bold">Non Recoverable Costs</h4>
          </Col>
          <Col
            xs={3}
            className="d-flex justify-content-between align-items-center text-dark"
          >
            <span>Term</span>
            <span className="pr-2">Reletting</span>
          </Col>
          <Col
            xs={3}
            className="d-flex justify-content-between align-items-center text-dark"
          >
            <span>Term</span>
            <span className="pr-2">Reletting</span>
          </Col>
          <Col
            xs={3}
            className="d-flex justify-content-between align-items-center text-dark"
          >
            <span>Term</span>
            <span className="pr-2">Reletting</span>
          </Col>
          <Col
            xs={3}
            className="d-flex justify-content-between align-items-center text-dark"
          >
            <span>Term</span>
            <span className="pr-2">Reletting</span>
          </Col>
          <Col
            xs={3}
            className="d-flex justify-content-between align-items-center text-dark"
          >
            <span>Term</span>
            <span className="pr-2">Reletting</span>
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Maintenance €/sq m or unit m/year</h4>
          </Col>
          <Col xs={3} className="d-flex">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Managment % of Market Rent</h4>
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
        </Row>
        <Row gutter={24} className="align-items-center mb-2">
          <Col xs={9} className="d-flex align-items-center">
            <h4>Other Costs % of Markets Rent</h4>
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
          <Col xs={3} className="d-flex ">
            <Input className="term-input" />
            <Input className="reletting-input" />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default AssumptionsParameter;
