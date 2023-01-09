// import { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  notification,
  Card,
} from "antd";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoMdMail, IoMdKey } from "react-icons/io";

import { login } from "../../app/features/auth/auth.slice";
import PATH from "../../utils/path";

function Index() {
  const dispatch = useDispatch();
  // const { message } = useSelector((state) => state.auth);

  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };
  // useEffect(() => {
  //   if (message !== "") {
  //     openNotificationWithIcon("error");
  //   }
  // }, [message]);
  const onFinish = (data) => {
    dispatch(
      login({ payload: data, callBackMessage: openNotificationWithIcon })
    );
  };
  return (
    <div className="loginComponent signing-input-fields bg-image d-flex align-items-center pages-component">
      <div className="container">
        <div className="loginForm">
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
                <h1 className="sign-in-right-heading">RealState</h1>
                <h1 className="sign-in-right-heading">Investment Analysis</h1>
                <p className="sign-in-right-text d-flex align-items-center">
                 We are coders
                </p>
              </div>
            </Col>
            <Col span={11} xs={24} sm={24} md={11} lg={11} xl={11}>
              <Card bordered={false} className="sign-in-card">
                <Typography.Title
                  className="mb-5 sign-in-left-title text-center"
                  level={1}
                >
                  Sign In
                </Typography.Title>
                <Form
                  name="basic"
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input className="input-transperant" placeholder="Email" />
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
                  <div>
                    <Form.Item
                      valuePropName="checked"
                      style={{ float: "left" }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link to={PATH.FORGET_PASSWORD} className="float-right">
                      <Typography.Title className="mb-3 mt-1 cursor-pointer forget-pass">
                        Forget Password?
                      </Typography.Title>
                    </Link>
                  </div>
                  <Button
                    type="primary"
                    className="sign-in-btn w-100 mb-4 mt-3"
                    htmlType="submit"
                    size="large"
                  >
                    Sign in
                  </Button>

                  <div className="text-center">
                    don&apos;t have account?
                    <Link to={PATH.SIGN_UP} className="form-field-link">
                      {" "}
                      Sign up
                    </Link>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
export default Index;
