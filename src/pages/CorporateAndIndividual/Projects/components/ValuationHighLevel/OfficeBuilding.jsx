import { Card, Table } from "antd";
import PropTypes from "prop-types";

function OfficeBuilding(props) {
  const secondColumns = [
    {
      title: "Yield Profile @Sale",
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
    <div>
      <Card bordered={false}>
        <div className="pt-2">
          <h3 className="font-weight-bold">Office/Retail Building</h3>
        </div>
        <div>
          <ul className="pt-0 px-0 office-retail-building">
            <li className="pr-4" style={{ "list-style-type": "none" }}>
              Goethestr.27
            </li>
            <li className="pr-4">60313 Frankfurt</li>
            <li>Germany</li>
          </ul>
        </div>
        <div className="mt-2">
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
        </div>
      </Card>
    </div>
  );
}

export default OfficeBuilding;

OfficeBuilding.propTypes = {
  striped: PropTypes.node.isRequired,
};
