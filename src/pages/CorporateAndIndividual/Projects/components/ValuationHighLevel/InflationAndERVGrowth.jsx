import { Card, Checkbox, Table } from "antd";
import PropTypes from "prop-types";

function InflationAndERVGrowth(props) {
  const columns = [
    {
      title: "2021",
      dataIndex: "twentyOne",
      key: "twentyOne",
      align: "center",
    },
    {
      title: "2022",
      dataIndex: "twentyTwo",
      key: "twentyTwo",
      align: "center",
    },
    {
      title: "2023",
      dataIndex: "twentyThree",
      key: "twentyThree",
      align: "center",
    },
    {
      title: "2024",
      dataIndex: "twentyFour",
      key: "twentyFour",
      align: "center",
    },
    {
      title: "2025",
      dataIndex: "twentyFive",
      key: "twentyFive",
      align: "center",
    },
    {
      title: "Ff.>>",
      dataIndex: "ff",
      key: "ff",
      align: "center",
    },
  ];

  const dataSource = [
    {
      twentyOne: "6.50 %",
      twentyTwo: "6.50 %",
      twentyThree: "6.50 %",
      twentyFour: "6.50 %",
      twentyFive: "6.50 %",
      ff: "6.50 %",
    },
  ];

  const secondColumns = [
    {
      title: "2021",
      dataIndex: "twentyOne",
      key: "twentyOne",
      align: "center",
    },
    {
      title: "2022",
      dataIndex: "twentyTwo",
      key: "twentyTwo",
      align: "center",
    },
    {
      title: "2023",
      dataIndex: "twentyThree",
      key: "twentyThree",
      align: "center",
    },
    {
      title: "2024",
      dataIndex: "twentyFour",
      key: "twentyFour",
      align: "center",
    },
    {
      title: "2025",
      dataIndex: "twentyFive",
      key: "twentyFive",
      align: "center",
    },
    {
      title: "Ff.>>",
      dataIndex: "ff",
      key: "ff",
      align: "center",
    },
  ];

  const secondDataSource = [
    {
      twentyOne: "6.50 %",
      twentyTwo: "6.50 %",
      twentyThree: "6.50 %",
      twentyFour: "6.50 %",
      twentyFive: "6.50 %",
      ff: "6.50 %",
    },
  ];
  const { striped } = props;

  return (
    <div>
      <Card bordered={false}>
        <div>
          <h3 className="text-color">Inflation</h3>
          <hr className="mt-0 border-top-0 border-2"/>
        </div>
        <div>
          <Table
            rowClassName={(record, index) =>
              striped !== false && index % 2 === 0
                ? "ant-table-row-light"
                : "ant-table-row-level"
            }
            columns={columns}
            dataSource={dataSource}
            bordered
            pagination={false}
            className="calculation-table"
          />
        </div>
        <div>
          <div className="pt-2 d-flex justify-content-between">
            <div>
              <h3 className="text-black">ERV Growth</h3>
            </div>
            <div>
              <Checkbox style={{ color: "#6F7173" }}>
                SYNC WITH INFLATION
              </Checkbox>
            </div>
          </div>
          <hr className="mt-0 border-top-0 border-2"/>
        </div>
        <div>
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

export default InflationAndERVGrowth;
InflationAndERVGrowth.propTypes = {
  striped: PropTypes.node.isRequired,
};
