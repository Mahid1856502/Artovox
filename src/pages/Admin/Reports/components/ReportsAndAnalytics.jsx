import { Card, Col, Row } from "antd";
import ReactApexChart from "react-apexcharts";

function ReportsAndAnalytics() {
  const options = {
    series: [
      {
        name: "Active Users",
        data: [0, 1500, 2500, 1500, 1000, 2200],
      },
      {
        name: "Inactive Users",
        data: [0, 300, 100, 480, 700, 200],
      },
      {
        name: "Daily Subscribers",
        data: [0, 500, 1000, 800, 400, 500],
      },
      {
        name: "Least Asset Users",
        data: [0, 1000, 600, 700, 2000, 1400],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar:false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'top',
      },
      
      markers: {
        size: 0,
        colors: undefined,
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          "01 - 05 Sep",
          "05 - 10 Sep",
          "10 - 15 Sep",
          "15 - 20 Sep",
          "20 - 25 Sep",
          "25 - 30 Sep",
        ],
      },
     
      grid: {
        borderColor: "#f1f1f1",
      },
    },
  };

  return (
    <div>
      <Card bordered={false}>
        <Row>
          <Col>
            <h3>Reports & Analytics</h3>
          </Col>
        </Row>

        <hr />
        <div id="chart" className="mt-4 mb-0">
          <ReactApexChart
            options={options.options}
            series={options.series}
            type="line"
            height={350}
          />
        </div>
      </Card>
    </div>
  );
}

export default ReportsAndAnalytics;
