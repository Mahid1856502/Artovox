import { Col, DatePicker, Form, Input, Row, Select } from "antd";

export default function BasicData() {
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
              label="Asset ID"
              name="assetId"
              rules={[
                { required: true, message: "Please input your Asset ID!" },
              ]}
            >
              <Input placeholder="Enter asset id" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              label="Client ID"
              name="clientId"
              rules={[
                { required: false },
              ]}
            >
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
          <Col xs={8}>
            <Form.Item
              name="assetType"
              label="Asset Type"
              rules={[{ required: true }]}
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
              label="Asset Name"
              name="assetName"
              rules={[
                { required: true, message: "Please input your Asset Name!" },
              ]}
            >
              <Input placeholder="Enter asset name" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              name="developmentStatus"
              label="Development Status"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select" allowClear>
                <Option value="1">Admin</Option>
                <Option value="2">User</Option>
                <Option value="3">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              label="Years of Construction (average)"
              name="YearsofConstruction"
              rules={[
                {
                  required: true,
                  message: "Please input your Years of Construction!",
                },
              ]}
            >
              <DatePicker picker="year" className="w-100 rounded-sm" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              label="Years of Refurbishment (average)"
              name="yearsofRefurbishment"
              rules={[
                {
                  required: true,
                  message: "Please input your Years of Refurbishment!",
                },
              ]}
            >
              <DatePicker picker="year" className="w-100 rounded-sm" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              name="riskClass"
              label="Risk Class"
              rules={[{ required: false }]}
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
              label="Analysis Date"
              name="analysisDate"
              rules={[
                { required: true, message: "Please input your Analysis Date!" },
              ]}
            >
              <DatePicker picker="date" className="w-100 rounded-sm"/>
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              name="assetStatus"
              label="Asset Status"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select " allowClear>
                <Option value="male">Admin</Option>
                <Option value="female">User</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Comments/Notes"
              name="Comments/Notes"
              rules={[{ required: false }]}
            >
              <TextArea rows={5} placeholder="Select role" className="custom-scroll"/>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
