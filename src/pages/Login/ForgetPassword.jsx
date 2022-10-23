import { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, Card } from "antd";
import { Link, Outlet } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { BsArrowLeftShort } from "react-icons/bs";
import PATH from "../../utils/path";
import IMAGES from "../../assets/images";

function ForgetPassword() {
  const [showCheckEmail, setShowCheckEmail] = useState(false);

  return (
    <div className="forgetPasswordComponent signing-input-fields pt-4 bg-image d-flex align-items-center justify-content-center pages-component">
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
                {showCheckEmail === true ? (
                  <Card bordered={false} className="sign-in-card">
                    <div className="free-pik-message mx-auto">
                      <img
                        src={IMAGES.FREE_PIK_MESSAGE}
                        alt="Check Mail"
                        className="free-pik-message-image mx-auto d-flex align-items-center"
                      />
                    </div>
                    <Typography.Title className="text-center pt-5" level={1}>
                      Check your mail
                    </Typography.Title>
                    <div className="text-center check-mail-text d-flex mx-auto">
                      We have sent a password recovery instructions to your
                      email
                    </div>
                    <Form>
                      <div className="text-center pt-5">
                        Did not received email?
                        <Link to={PATH} className="check-mail-try-again-text">
                          {" "}
                          try again
                        </Link>
                      </div>
                      <div className="text-center pb-5">
                        <BsArrowLeftShort className="align-items-center arrow-icon" />
                        back to
                        <Link to={PATH.LOGIN} className="form-field-link">
                          {" "}
                          Sign in
                        </Link>
                      </div>
                    </Form>
                  </Card>
                ) : (
                  <Card bordered={false} className="sign-in-card">
                    <Typography.Title
                      className="sign-in-left-title text-center"
                      level={1}
                    >
                      Forget Password
                    </Typography.Title>
                    <div className="text-center">
                      No Worries, well send you reset instructions
                    </div>
                    <Form>
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
                          className="input-transperant mt-5"
                          placeholder="Enter your email"
                        />
                      </Form.Item>
                      <IoMdMail className="position-absolute input-icons input-mail-icon" />
                      <Button
                        type="primary"
                        className="sign-in-btn w-100 mb-4 mt-3"
                        htmlType="submit"
                        onClick={() => setShowCheckEmail(true)}
                      >
                        Send Instructions
                      </Button>

                      <div className="text-center form-field-link-text">
                        <BsArrowLeftShort className="align-items-center arrow-icon" />
                        back to
                        <Link to={PATH.LOGIN} className="form-field-link">
                          {" "}
                          Sign in
                        </Link>
                      </div>
                    </Form>
                  </Card>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
export default ForgetPassword;
