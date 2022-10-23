import { Card, Select } from "antd";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import PATH from "../../../../utils/path";

const { Option } = Select;

export default function ReportsChart() {

    const data = {

        series: [{
            name: 'Least Asset Users',
            data: [440, 550, 570, 560, 610, 580, 63, 60, 66, 99, 78, 60]
        }, {
            name: 'Active Users',
            data: [760, 850, 1010, 980, 870, 1005, 980, 1140, 940, 560, 990, 945]
        }, {
            name: 'Daily Subscribers',
            data: [960, 903, 1020, 930, 870, 1005, 910, 1140, 940, 560, 1000, 850]
        },
        {
            name: 'Inactive User',
            data: [1000, 1041, 1900, 260, 450, 480, 1052, 513, 1041, 1059, 999, 999]
        }],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 300
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'right',
                offsetX: -20,
                offsetY: 100
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
        },


    };

    return (
        <Card
            bordered={false}
            className="w-100">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="d-inline mb-0">Reports</h3>
                <Link to={PATH}>All Reports</Link>
            </div>
            <hr />
            <div className="chart">
                <ReactApexChart options={data.options} series={data.series} type="bar" height={300} />
                <div className="select">
                    <Select
                        defaultValue="2022"
                        style={{
                            width: 155,
                        }}
                    >
                        <Option value="2021">2022</Option>
                        <Option value="2021">2021</Option>
                        <Option value="2020">2020</Option>
                    </Select>
                </div>
            </div>
        </Card>

    )
}
