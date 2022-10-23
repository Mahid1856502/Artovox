import { Col, Form, Input, Row, Select } from "antd";

export default function SiteAndLandRegister() {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <div className="pt-3 stepper-basic-data">
      <h3 className="font-weight-bold mb-0 mt-1 pt-4 text-blue">Basic Data</h3>
      <Form
        name="basic"
        className="user-modal"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Row gutter={24}>
          <Col xs={8}>
            <Form.Item
              label="Ownership"
              name="ownershio"
              rules={[
                { required: true, message: "Please input your Owenership!" },
              ]}
            >
             <Select placeholder="Select" allowClear>
                <Option value="male">Admin</Option>
                <Option value="female">User</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              label="Site Area"
              name="clientId"
              rules={[
                { required: false },
              ]}
            >
              <span className="scnd-field">sq m</span>
              <Input placeholder="Enter client id" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              label="Cluster"
              name="cluster"
              rules={[
                { required: false },
              ]}
            >
              <Input placeholder="Enter cluster" type="text" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              name="assetType"
              label="Asset Type"
              rules={[{ required: true }]}
            >
               <Input placeholder="Enter client id" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Asset Name"
              name="assetName"
              rules={[
                { required: true, message: "Please input your Asset Name!" },
              ]}
            >
              <Input placeholder="Enter asset name" />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item
              label="Comments/Notes"
              name="Comments/Notes"
              rules={[{ required: false }]}
            >
              <TextArea rows={9} placeholder="Select role" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
