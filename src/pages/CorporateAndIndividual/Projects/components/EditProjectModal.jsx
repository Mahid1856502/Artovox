import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function EditProjectModal(props) {
  const { visible, handleCancel } = props;
  const { Option } = Select;
  return (
    <div className="editProjectComponent">
      <Modal
        centered
        width={800}
        visible={visible}
        handleCancel={handleCancel}
        footer={[
            <Link to={handleCancel} className="btn-cancel">
            Cancel
          </Link>,
          <Button
            key="submit"
            type="default"
            htmlType="submit"
            className="btn-primary"
            onClick={handleCancel}
          >
            Update
          </Button>
        ]}
      >
        <div className="add-user-management-modal">
          <h3 className="mb-0 modal-heading">Edit User</h3>

          <Form
            name="basic"
            className="user-modal"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item
                  label="Project ID"
                  name="projectID"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Project ID!",
                    },
                  ]}
                >
                  <Input placeholder="Enter project id" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Project Name"
                  name="projectName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Project Name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter project name" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Project Manager"
                  name="projectManager"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Project Manager!",
                    },
                  ]}
                >
                  <Input placeholder="Enter project manager" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Client Name"
                  name="clientName"
                  rules={[
                    {
                      message: "Please enter your Client Name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter client name" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="projectType"
                  label="Project Type"
                >
                  <Select placeholder="Select" allowClear>
                    <Option value="">demo</Option>
                    <Option value="">demo</Option>
                    <Option value="">demo</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="projectStatus"
                  label="Project Status"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select" allowClear>
                    <Option value="">demo</Option>
                    <Option value="">demo</Option>
                    <Option value="">demo</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
              <Form.Item
              name="projectDescription"
              label="Project Description/Notes"
              >
              <TextArea rows={4} placeholder="Enter project notes" />
              </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
EditProjectModal.propTypes = {
    visible: PropTypes.node.isRequired,
    handleCancel: PropTypes.node.isRequired,
  };