import { Badge, Card, Col, Divider, Row } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io'
import PATH from '../../../../utils/path'

export default function UserCard(props) {
    const { data, setTanents } = props;
    return (
        <Card
            bordered={false}
            className="w-100">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="d-inline mb-0">Users</h3>
                <Link to={PATH}>All Users</Link>
            </div>
            <hr />
            {
                data?.map((item) => (
                    <div>
                        <Row key={item.id} className="w-100 bg-white rounded-sm p-2 d-flex align-items-center m-0 cursor-pointer" gutter={24} onClick={() => setTanents(item.tanents)}>
                            <Col xs={12}>
                                <Row gutter={16} className="d-flex align-items-center">
                                    <Col>
                                        <img style={{ width: '50px' }} className="rounded-circle" src={item.image} alt="child avatar" />
                                    </Col>
                                    <Col>
                                        <Row className="mb-1">
                                            <Col className="mr-2">
                                                <h5 className="mb-0 d-inline">{item.name}</h5>
                                            </Col>
                                            <Col>
                                                <Badge
                                                    count={item.status}
                                                    style={{ color: "#676EB4", backgroundColor: '#F2F3F5' }}
                                                />
                                            </Col>
                                        </Row>
                                        <p className="mb-0 text-light-gray">{item.address}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                <Row gutter={16} className="d-flex align-items-center">
                                    <Col>
                                        <span className="bg-light-grey d-flex align-items-center justify-content-center "><span className="color-green font-weight-semibold">10&nbsp;</span> Projects</span>
                                    </Col>
                                    <Col>
                                        <Divider type="vertical" />
                                    </Col>
                                    <Col>
                                        <span className="bg-light-grey d-flex align-items-center justify-content-center "><span className="color-red font-weight-semibold">10&nbsp;</span> Portfolio</span>
                                    </Col>
                                    <Col>
                                        <Divider type="vertical" />
                                    </Col>
                                    <Col>
                                        <span className="bg-light-grey d-flex align-items-center justify-content-center ">
                                            <span className="color-blue font-weight-semibold">10&nbsp;</span>Assets
                                        </span>
                                    </Col>
                                    <Col flex="auto" className="d-flex justify-content-end">
                                        <IoIosArrowForward size={20} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="m-0" />
                    </div>
                ))
            }
        </Card>
    )
}

UserCard.propTypes = {
    data: PropTypes.isRequired,
    setTanents: PropTypes.isRequired,
}
