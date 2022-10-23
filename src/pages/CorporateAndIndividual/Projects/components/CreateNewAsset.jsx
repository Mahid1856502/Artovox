import { Button, Col, Modal, Row, Steps } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import Address from "../ProjectDetailStepperComponent/Address";
import AssetAndLocation from "../ProjectDetailStepperComponent/AssetAndLocation";
import BasicData from "../ProjectDetailStepperComponent/BasicData";
import Rating from "../ProjectDetailStepperComponent/Rating";
import SiteAndLandRegister from "../ProjectDetailStepperComponent/SiteAndLandRegister";
import SwotAnalysis from "../ProjectDetailStepperComponent/SwotAnalysis";

export default function CreateNewAsset(props) {
  const { visible, handleCancel } = props;
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const { Step } = Steps;
  const steps = [
    {
      title: "Basic Data",
      content: "Basic Data",
    },
    {
      title: "Address",
      content: "Address",
    },
    {
      title: "Asset & Location",
      content: "Asset & Location",
    },
    {
      title: "SWOT Analysis",
      content: "SWOT Analysis",
    },
    {
      title: "Rating",
      content: "Rating",
    },
    {
      title: "Site & Land Register",
      content: "Site & Land Register",
    },
  ];
  return (
    <Modal
      visible={visible}
      handleCancel={handleCancel}
      width={1200}
      className="create-new-asset-modal"
      style={{
        top: 40,
        left: 115,
      }}
      footer={[
        <div className="create-asset-footer" />,
        // <Link to={PATH} className="btn-cancel">
        //   Cancel
        // </Link>,
        // <Button key="submit" type="default" className="btn-primary">
        //   Search
        // </Button>
      ]}
    >
      <Row gutter={24}>
        <Col xs={6}>
          <div className="stepper-sidebar">
            <h2 className="text-white mb-0 pt-4 pb-4">Create new Asset</h2>
            <Steps current={current} direction="vertical" progressDot>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </div>
        </Col>
        <Col xs={18}>
          <div className="stepper-content">
            <div className="steps-content">
              {steps[current].content === "Basic Data" && <BasicData />}
              {steps[current].content === "Address" && <Address />}
              {steps[current].content === "Asset & Location" && <AssetAndLocation />}
              {steps[current].content === "SWOT Analysis" && <SwotAnalysis />}
              {steps[current].content === "Rating" && <Rating />}
              {steps[current].content === "Site & Land Register" && <SiteAndLandRegister />}
            </div>
            <div className="steps-action d-flex justify-content-between align-items-center mb-4">
            <div>
              {current > 0 && (
                <Button
                  style={{
                    margin: "0 8px",
                  }}
                  className="btn-primary"
                  onClick={() => prev()}
                >
                  Previous
                </Button>
              )}
              <Button
                  style={{
                    margin: "0 8px",
                  }}
                  className="btn-cancel"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
              <div>
              {current < steps.length - 1 && (
                <Button onClick={() => next()}  className="btn-primary">
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button  className="btn-primary">Done</Button>
              )}
              </div>
             
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}
CreateNewAsset.propTypes = {
  visible: PropTypes.node.isRequired,
  handleCancel: PropTypes.node.isRequired,
};
