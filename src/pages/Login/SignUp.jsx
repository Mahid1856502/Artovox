import { Form, Input, Button, Row, Col, Typography, Card, Select } from "antd";
import { Link, Outlet } from "react-router-dom";
import { IoMdMail, IoMdKey } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import PATH from "../../utils/path";

function SignUp() {
  return (
    <div className="signupComponent signing-input-fields bg-image d-flex align-items-center pages-component">
      <div className="container">
        <Row gutter={24}>
          <Col
            span={13}
            className="d-flex align-items-center"
            xs={24}
            sm={24}
            md={13}
            lg={13}
            xl={13}
          >
            <div>
              <h1 className="sign-in-right-heading d-flex align-items-center">
                RealState
              </h1>
              <h1 className="sign-in-right-heading">Investment Analysis</h1>
              <p className="sign-in-right-text">
                We are here to take your assests into the market with a
                compatitive deals.
              </p>
            </div>
          </Col>
          <Col
            span={11}
            className="align-self-center"
            xs={24}
            sm={24}
            md={11}
            lg={11}
            xl={11}
          >
            <Card bordered={false} className="sign-in-card">
              <Typography.Title
                className="mb-4 sign-in-left-title text-center"
                level={1}
              >
                Sign Up
              </Typography.Title>
              <Form>
                <Form.Item
                  name="fname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className="input-transperant"
                    placeholder="First name"
                  />
                </Form.Item>
                <FaUser
                  className="position-absolute input-icons input-fname-icon"
                  size={18}
                />
                <Form.Item
                  name="lname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className="input-transperant"
                    placeholder="Last name"
                  />
                </Form.Item>
                <FaUser
                  className="position-absolute input-icons input-lname-icon"
                  size={18}
                />
                <Form.Item>
                  <Select
                    size="large"
                    className="antd-custom-select"
                    placeholder="Role"
                    dropdownClassName="antd-custom-select-dropdown"
                  >
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="corporate">Corporate</Select.Option>
                    <Select.Option value="individual">Individual</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className="input-transperant"
                    placeholder="Email"
                  />
                </Form.Item>
                <IoMdMail
                  className="position-absolute input-icons input-mail-icon"
                  size={22}
                />
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    className="input-transperant"
                    placeholder="Password"
                  />
                </Form.Item>
                <IoMdKey
                  className="position-absolute input-icons input-key-icon"
                  size={22}
                />
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password once again!",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    className="input-transperant"
                    placeholder="Confirm password"
                  />
                </Form.Item>
                <IoMdKey
                  className="position-absolute input-icons input-confirm-key-icon"
                  size={22}
                />
                <Button
                  type="primary"
                  className="sign-in-btn w-100 mb-4 mt-3"
                  htmlType="submit"
                  size="Large"
                >
                  Sign Up
                </Button>

                <div className="text-center">
                  Already have account?
                  <Link to={PATH.LOGIN} className="form-field-link">
                    {" "}
                    Sign in
                  </Link>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>

      <Outlet />
    </div>
  );
}
export default SignUp;
