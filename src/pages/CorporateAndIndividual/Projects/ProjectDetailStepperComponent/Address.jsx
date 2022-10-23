import { Col, Form, Input, Row, Select } from "antd";

export default function Address() {
  // const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const { Option } = Select;
 
  return (
    <div className="pt-3 stepper-address">
      <h3 className="font-weight-bold mb-0 mt-1 pt-4 text-blue">Address</h3>
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
              label="Country"
              name="country"
              rules={[
                { required: true, message: "Please input your Country!" },
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
              label="Federal State"
              name="federalState"
              rules={[
                { required: true, message: "Please input your Federal State!" },
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
            <Form.Item label="City" name="city" rules={[{ required: false }]}>
              <Input placeholder="Enter city" type="text" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              name="zipCode"
              label="Zip Code"
              rules={[{ required: false }]}
            >
              <Input placeholder="Enter zip code" type="text" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item
              label="Street"
              name="street"
              rules={[{ required: true, message: "Please input your street!" }]}
            >
              <Input placeholder="Enter street" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item name="no" label="No." rules={[{ required: true }]}>
              <Input placeholder="Enter No" type="text" />
            </Form.Item>
          </Col>
        </Row>
        <hr className="w-100" />
        <Row gutter={24}>
          <Col xs={8}>
            <Row gutter={24}>
              <Col xs={24}>
                <Form.Item name="no" label="No." rules={[{ required: true }]}>
                  <Input placeholder="Enter No" type="text" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name="no" label="No." rules={[{ required: true }]}>
                  <Input placeholder="Enter No" type="text" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name="no" label="No." rules={[{ required: true }]}>
                  <Input placeholder="Enter No" type="text" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col xs={16} >
         
                <div className="mapouter mt-3">
                  <div className="gmap_canvas">
                    <iframe
                      className="gmap_iframe"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      title="myFrame"
                      marginWidth={0}
                      src="https://maps.google.com/maps?width=570&height=300&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    />
                    {/* <a href="https://piratebay-proxys.com/">Pirate Proxy</a> */}
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;width:570px;height:300px;}.gmap_canvas {overflow:hidden;background:none!important;width:570px;height:300px;}.gmap_iframe {width:570px!important;height:300px!important;}",
                    }}
                  />
                </div>
            </Col>
        </Row>
      </Form>
    </div>
  );
}
