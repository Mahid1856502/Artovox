import { Col, Form, Input, Row } from "antd";

export default function SwotAnalysis() {
  const { TextArea } = Input;
  return (
    <div className="pt-3 stepper-swot-analysis">
    <h3 className="font-weight-bold mb-0 mt-1 pt-4 text-blue">SWOT Analysis</h3>
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
            label="Strenghts"
            name="strenghts"
            rules={[{ required: false }]}
          >
            <TextArea rows={9} placeholder="Enter Strenghts" />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item
            label="Weaknesses"
            name= "weaknesses"
            rules={[{ required: false }]}
          >
            <TextArea rows={9} placeholder="Enter Weaknesses" />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item
            label="Oportunities"
            name="oportunities"
            rules={[{ required: false }]}
          >
            <TextArea rows={9} placeholder="Enter Oportunities" />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item
            label="Threats"
            name="threats"
            rules={[{ required: false }]}
          >
            <TextArea rows={9} placeholder="Enter Threats" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
  );
}
