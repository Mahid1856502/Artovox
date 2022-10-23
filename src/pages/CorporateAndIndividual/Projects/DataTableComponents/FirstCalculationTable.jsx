import { Card, Col, Row, Table } from "antd";
import PropTypes from "prop-types";

function FirstCalculationTable(props) {
  const columns = [
    {
      title: "ASSET ID",
      dataIndex: "assetID",
      align: "center",
    },
    {
      title: "ID#2",
      dataIndex: "iD",
      align: "center",
    },
    {
      title: "CLUSTER",
      dataIndex: "cluster",
      align: "center",
    },
    {
      title: "ANALYSIS DATA",
      dataIndex: "analysisData",
      align: "center",
    },
    {
      title: "LAST CHANGE",
      dataIndex: "lastChange",
      align: "center",
    },
    {
      title: "USER",
      dataIndex: "user",
      align: "center",
    },
  ];
  const data = [
    {
      key: "1",
      assetID: "01",
      iD: "101050",
      cluster: "----",
      analysisData: "01/01/2022",
      lastChange: "01/01/2022",
      user: "JB",
    },
  ];

  const secondColumns = [
    {
      title: "Yield Profile",
      dataIndex: "yieldProfile",
      key: "yieldProfile",
      align: "center",
    },
    {
      title: "NIY",
      dataIndex: "nIY",
      key: "nIY",
      align: "center",
    },
    {
      title: "GIY",
      dataIndex: "gIY",
      key: "gIY",
      align: "center",
    },
    {
      title: "Multiple",
      dataIndex: "multiple",
      key: "multiple",
      align: "center",
    },
  ];

  const secondDataSource = [
    {
      yieldProfile: "Current Rent",
      nIY: "5.00%",
      gIY: "5.00%",
      multiple: "22.0",
    },
    {
      yieldProfile: "Potential Rent",
      nIY: "5.00%",
      gIY: "5.00%",
      multiple: "22.0",
    },
    {
      yieldProfile: "Market Rent",
      nIY: "5.00%",
      gIY: "5.00%",
      multiple: "22.0",
    },
  ];
  const { striped } = props;

  return (
    <div className="firstCalculationTable">
      <Card bordered={false}>
        <Row gutter={24}>
          <Col span={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              className="first-calculation-table"
            />
            </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Table
              rowClassName={(record, index) =>
                striped !== false && index % 2 === 0
                  ? "ant-table-row-light"
                  : "ant-table-row-level"
              }
              columns={secondColumns}
              dataSource={secondDataSource}
              bordered
              pagination={false}
              className="calculation-table"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default FirstCalculationTable;

FirstCalculationTable.propTypes = {
  striped: PropTypes.node.isRequired,
};
