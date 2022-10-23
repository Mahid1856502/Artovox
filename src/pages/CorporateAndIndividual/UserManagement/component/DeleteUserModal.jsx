import { Button, Col, Modal, Row } from "antd";
import { BsXCircle } from "react-icons/bs";
import PropTypes from "prop-types";

export default function DeleteUserModal(props) {
  const { visible, handleCancel } = props;
  return (
    <Modal
      visible={visible}
      handleCancel={handleCancel}
      style={{
        top: 155,
      }}
      footer={[<div />]}
    >
      <div className="user-management-delete-modal">
        <Row className="">
          <Col xs={24}>
            <div className="text-center delete-modal-section">
              <div className="delete-model-svg">
                <BsXCircle size={90} fill="E01515" />
              </div>

              <div>
                <h1 className="delete-modal-heading mt-2 mb-4">
                  Are you sure?
                </h1>
              </div>
              <div>
                <h4 className="delete-modal-content w-75 mx-auto">
                  Do you really want to delete this user?{" "}
                  <span>This action cannot be undone</span>
                </h4>
              </div>
              <div className="delete-modal-btn">
                <Button className="btn-primary" onClick={handleCancel}>
                  No, not sure
                </Button>
                <Button className="btn-sure">Yes, i am sure</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
DeleteUserModal.propTypes = {
  visible: PropTypes.node.isRequired,
  handleCancel: PropTypes.node.isRequired,
};
