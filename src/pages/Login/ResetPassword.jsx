import { Form, Input, Button, Row, Col, Typography, Card } from "antd";
import { Link, Outlet } from "react-router-dom";
import { IoMdKey } from "react-icons/io";
import { BsArrowLeftShort } from "react-icons/bs";
import PATH from "../../utils/path";

function ResetPassword() {
  return (
    <div className="resetComponent signing-input-fields pt-4 bg-image d-flex align-items-center justify-content-center pages-component">
      <div className="container ">
        <div>
          <div className="w-100">
            <Row>
              <Col
                span={12}
                className="align-self-center px-3 px-lg-5 mx-auto"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
              >
                <Card bordered={false} className="sign-in-card">
                  <Typography.Title
                    className="sign-in-left-title text-center"
                    level={1}
                  >
                    Reset Password
                  </Typography.Title>
                  <div className="text-center mx-auto sign-in-text">
                    Your new password must be different from previously used
                    password
                  </div>
                  <Form>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input new password!",
                        },
                      ]}
                    >
                      <Input
                        type="password"
                        className="input-transperant"
                        placeholder="Enter new password"
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
                    >
                      Reset Password
                    </Button>

                    <div className="text-center pt-2">
                      <BsArrowLeftShort className="align-items-center arrow-icon" />
                      back to
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
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default ResetPassword;
