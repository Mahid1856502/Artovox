import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ParameterModal(props) {
    const { visible, handleCancel, modalHeading } = props;
    const { Option } = Select;
    return (
        <div className="addNewProjectComponent">
            <Modal
                centered
                width={600}
                visible={visible}
                handleCancel={handleCancel}
                footer={[
                    <Link to={handleCancel} onClick={handleCancel} className="btn-cancel">
                        Cancel
                    </Link>,
                    <Button
                        key="submit"
                        type="default"
                        htmlType="submit"
                        className="btn-primary"
                        onClick={handleCancel}
                    >
                        Save
                    </Button>
                ]}
            >
                <div className="add-user-management-modal">
                    <h3 className="mb-0 modal-heading">{modalHeading}</h3>

                    <Form
                        name="basic"
                        className="user-modal"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item
                                    label="Parameter"
                                    name="parameter"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter parameter",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Enter parameter" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Parameter Type"
                                    name="parametertype"
                                    rules={[{ required: true }]}
                                >
                                    <Select placeholder="Select type" allowClear>
                                        <Option value="">demo</Option>
                                        <Option value="">demo</Option>
                                        <Option value="">demo</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="value"
                                    label="Value"
                                    rules={[{ required: true }]}
                                >
                                    <Select placeholder="Select value" allowClear>
                                        <Option value="">demo</Option>
                                        <Option value="">demo</Option>
                                        <Option value="">demo</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="unit"
                                    label="Unit"
                                    rules={[{ required: true }]}
                                >
                                    <Select placeholder="Select unit" allowClear>
                                        <Option value="">demo</Option>
                                        <Option value="">demo</Option>
                                        <Option value="">demo</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Modal>
        </div>
    );
}

export default ParameterModal;
ParameterModal.propTypes = {
    visible: PropTypes.node.isRequired,
    handleCancel: PropTypes.node.isRequired,
    modalHeading: PropTypes.node.isRequired,
};
