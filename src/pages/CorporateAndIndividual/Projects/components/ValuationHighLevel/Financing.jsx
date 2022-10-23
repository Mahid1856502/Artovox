import { Card, Cascader, Col, Row, Table } from "antd";
import IncDecCounter from "../../DataTableComponents/IncDecCounter";

function Financing() {
  const options = [
    {
      value: "demo",
      label: "Net initial yield (Potential)",
    },
    {
      value: "demo2",
      label: "demo",
    },
  ];

  const secondColumns = [
    {
      title: " ",
      dataIndex: "assetID",
    },
    {
      title: " ",
      dataIndex: "iD",
    },
    {
      title: "",
      dataIndex: "cluster",
    },
    {
      title: " ",
      dataIndex: "analysisData",
    },
  ];
  const secondDataSource = [
    {
      key: "1",
      assetID: "Unleveraged IRR",
      iD: "5.50 %",
      cluster: "WACC",
      analysisData: "5.50 %",
    },
    {
      key: "1",
      assetID: "leveraged IRR",
      iD: "12.50 %",
      cluster: "Equity Multiple",
      analysisData: "3.50 %",
    },
    {
      key: "1",
      assetID: "Cash on Cash (year 1)",
      iD: "3.50 %",
      cluster: "Cash profit (Unleveraged)",
      analysisData: "3.50 %",
    },
    {
      key: "1",
      assetID: "Cash on Cash (average)",
      iD: "5.50 %",
      cluster: "Cash Profit (leverage)",
      analysisData: "5.50 %",
    },
  ];

  return (
    <div className="financingComponent">
      <Card bordered={false}>
        <div>
          <h3 className="text-black">Financing</h3>
          <hr className="border-top-0 border-2" />
        </div>
        <Row gutter={24} className="pt-1">
          <Col span={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <h4>Type</h4>
            <Cascader
              options={options}
              placeholder="Net initial yield (Potential)"
              className="calculation-cascader mb-2"
            />
          </Col>
          <Col span={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <h4>Amount</h4>
            <Cascader
              placeholder="6,500,000 €"
              className="calculation-cascader mb-2"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} xl={12} lg={12} md={12} xs={24} sm={24}>
            <Row gutter={12} className="align-items-center mb-3 mr-2">
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">LTV %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">Interest Rate %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">Amortization %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">Set-up Fee %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
          </Col>
          <Col span={12} xl={12} lg={12} md={12} xs={24} sm={24}>
            <Row gutter={12} className="align-items-center mb-3 mr-2">
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">LTV %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">Interest Rate %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">Amortization %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">Set-up Fee %</h5>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
          </Col>
          {/* <Col span={12} xl={12} lg={12} md={24} xs={24} sm={24}>
            <Row gutter={12} className="align-items-center mb-3 mr-2">
              <Col xl={12} lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">LTC %</h5>
              </Col>
              <Col xl={12} lg={12} md={12} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col lg={12} md={24} xs={24} sm={24}>
                <h5 className="mb-0">Credit Period (y)</h5>
              </Col>
              <Col lg={12} md={24} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col lg={12} md={12} xs={24} sm={24}>
                <h5 className="mb-0">Grace Period (m)</h5>
              </Col>
              <Col lg={12} md={12} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
            <Row gutter={12} className="align-items-center mb-2 mr-2">
              <Col lg={12} md={12} xs={24} sm={24}>
                <h5 className="mb-0">Prepayment Fee %</h5>
              </Col>
              <Col lg={12} md={12} xs={24} sm={24}>
                <IncDecCounter />
              </Col>
            </Row>
          </Col> */}
        </Row>
        <Table
          className="second-table mt-3"
          columns={secondColumns}
          dataSource={secondDataSource}
          bordered={false}
          pagination={false}
        />
      </Card>
    </div>
  );
}

export default Financing;
