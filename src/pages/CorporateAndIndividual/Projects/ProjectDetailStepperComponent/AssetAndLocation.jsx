import { Col, Form, Input, Row } from "antd";

export default function AssetAndLocation() {
  const { TextArea } = Input;
  return (
    <div className="pt-3 stepper-asset-location">
    <h3 className="font-weight-bold mb-0 mt-1 pt-4 text-blue">Asset & Location Description</h3>
    <Form
      name="basic"
      className="user-modal"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Row gutter={24}>
        <Col xs={24}>
          <Form.Item
            label="Asset Description"
            name="assetDescription"
            rules={[{ required: false }]}
          >
            <TextArea rows={5} placeholder="Enter Asset Description" />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            label="Macro Location"
            name="macroLocation"
            rules={[{ required: false }]}
          >
            <TextArea rows={5} placeholder="Enter Macro Location" />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item
            label="Micro Location"
            name="microLocation"
            rules={[{ required: false }]}
          >
            <TextArea rows={5} placeholder="Enter Micro Location" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
  );
}
