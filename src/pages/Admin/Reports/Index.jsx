import { Card, Col, Row } from "antd";
import { HiOutlineArrowUp, HiOutlineArrowDown } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import ReportsAndAnalytics from "./components/ReportsAndAnalytics";
import Users from "./components/Users";

function Index() {
  return (
    <div className="reports">
      <h3>September 2022</h3>
      <div className="site-card-border-less-wrapper">
        <Row gutter={24}>
          <Col span={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <Card bordered={false}>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle rounded-circle-spacing arrow-up-icon-bg"
                >
                  <HiOutlineArrowUp
                    size={30}
                    className="arrow-up-icon"
                  />
                </div>
                <div className="ml-3">
                  <p className="m-0">Active Users</p>
                  <h2>500</h2>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <Card bordered={false}>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle rounded-circle-spacing arrow-down-icon-bg"
                >
                  <HiOutlineArrowDown
                    size={30}
                    className="arrow-down-icon"
                  />
                </div>
                <div className="ml-3">
                  <p className="m-0">Inactive Users</p>
                  <h2>210</h2>
                </div>
              </div>
            </Card>
          </Col>

          <Col span={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <Card bordered={false}>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle rounded-circle-spacing plus-icon-bg"
                >
                  <AiOutlinePlus
                    size={30}
                    className="plus-icon"
                  />
                </div>
                <div className="ml-3">
                  <p className="m-0">Daily Subscribers</p>
                  <h2>100</h2>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <Card bordered={false}>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle rounded-circle-spacing trending-icon-bg"
                >
                  <BiTrendingUp
                    size={30}
                    className="trending-icon"
                  />
                </div>
                <div className="ml-3">
                  <p className="m-0">Most least Assets</p>
                  <h2>41</h2>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="site-card-border-less-wrapper">
        <Row gutter={24}>
          <Col span={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <ReportsAndAnalytics />
          </Col>
          <Col span={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Users />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
