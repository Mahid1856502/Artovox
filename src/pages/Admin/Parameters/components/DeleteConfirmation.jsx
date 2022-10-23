import { Button, Col, Modal, Row } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DeleteConfirmation(props) {
    const { visible, handleCancel } = props;
    return (
        <div className="addNewProjectComponent">
            <Modal
                centered
                width={400}
                visible={visible}
                handleCancel={handleCancel}
                footer={[
                    <div className="text-center mb-3">
                        <Link to={handleCancel} onClick={handleCancel} className="btn-cancel">
                            Cancel
                        </Link>
                        <Button
                            key="submit"
                            type="default"
                            htmlType="submit"
                            className="btn-primary"
                            onClick={handleCancel}
                        >
                            Delete
                        </Button>
                    </div>
                ]}
            >
                <div>
                    <h3 className="mb-4 modal-heading text-center mt-3">Delete Confirmation</h3>
                    <Row gutter={24} justify="center" align="center" className="h-100">
                        <Col span={15} className="py-2">
                            Are you sure, you want to delete?
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteConfirmation;
DeleteConfirmation.propTypes = {
    visible: PropTypes.node.isRequired,
    handleCancel: PropTypes.node.isRequired,
};
