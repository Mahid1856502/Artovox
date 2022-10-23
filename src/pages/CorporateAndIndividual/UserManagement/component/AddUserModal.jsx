import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function AddUserModal(props) {
  const { visible, handleCancel } = props;
  const { Option } = Select;
  return (
    <Modal
      visible={visible}
      handleCancel={handleCancel}
      width={630}
      style={{
        top: 155,
      }}
      footer={[
        <Button
          key="submit"
          type="default"
          htmlType="submit"
          className="btn-primary"
          onClick={handleCancel}
        >
          Save
        </Button>,
        <Link to={handleCancel} onClick={handleCancel} className="btn-cancel">
          Cancel
        </Link>,
      ]}
    >
      <div className="add-user-management-modal">
        <h3 className="mb-0 modal-heading">Create new user</h3>

        <Form
          name="basic"
          className="user-modal"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Row gutter={24}>
            <Col xs={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your First Name!" },
                ]}
              >
                <Input placeholder="Enter First Name" />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your Last Name!" },
                ]}
              >
                <Input placeholder="Enter Last Name" />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input placeholder="Enter email" type="email" />
              </Form.Item>
            </Col>
            <Col xs={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true }]}
              >
                <Select placeholder="Select role" allowClear>
                  <Option value="male">Admin</Option>
                  <Option value="female">User</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                label="Location"
                name="location"
                rules={[
                  { required: true, message: "Please input your Location!" },
                ]}
              >
                <Input placeholder="Enter user address" type="location" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
}
AddUserModal.propTypes = {
  visible: PropTypes.node.isRequired,
  handleCancel: PropTypes.node.isRequired,
};
