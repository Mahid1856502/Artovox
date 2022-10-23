import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { AiFillEye } from "react-icons/ai";
import PATH from "../../../../utils/path";

export default function TanentsCard(props) {
    const { tanents } = props;
    return (
        <div className="bg-white rounded-sm p-3">
            <Row>
                <Col xs={24} className="d-flex justify-content-between align-items-center">
                    <h3 >Tanents</h3>
                    <Link to={PATH}>All Tanents</Link>
                </Col>
                <Col xs={24}>
                    <div className="d-flex justify-content-between bg-blue rounded-sm my-2">
                        <h5 className="text-white px-3 py-2 mb-0">Asset Name</h5>
                        <h5 className="text-white px-3 py-2 mb-0">No. of Tanents</h5>
                    </div>
                </Col>
                <Col xs={24} className="custom-scroll">
                    {
                        tanents.map((item) => (
                            <li>
                                <Row className="d-flex justify-content-between align-items-center cursor-pointer tanent-row">
                                    <Col xs={16} className="mb-0 py-3 px-3">{item.assetName}</Col>
                                    <Col xs={4} className="mb-0 py-3 px-3 d-flex justify-content-center">{item.totalTanents}</Col>
                                    <Col xs={4} className="mb-0 d-flex justify-content-center"><AiFillEye className="fill-eye" /></Col>
                                </Row>
                                <hr className="m-0" />
                            </li>
                        ))
                    }
                </Col>
            </Row>
        </div>
    )
}

TanentsCard.propTypes = {
    tanents: PropTypes.isRequired,
}
