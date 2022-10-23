
import IMAGES from "../../../assets/images"

export default function AllActivity({ setSelectedActivity }) {
    // const now = new Date();

    // console.log(typeof(data[0].date));
    return (
        <div className="mt-3 all-activity-wrapper">
            <h2>Today</h2>
            {
                data.map((item) => (
                    <Row key={item.id} className="w-100 bg-white rounded-sm p-2 d-flex align-items-center mb-3 m-0" gutter={24} onClick={() => { setSelectedActivity(item) }}>
                        <Col xs={2}>
                            <img style={{ width: '50px' }} className="rounded-circle" src={item.image} alt="child avatar" />
                        </Col>
                        <Col xs={5}>
                            <h5 className="mb-0 font-weight-bold">{item.name}</h5>
                            <p className="mb-0">{item.userID}</p>
                        </Col>
                        <Col xs={3}>
                            <Badge
                                count={item.status}
                                style={{ color: "#676EB4", backgroundColor: '#F2F3F5' }}
                            />
                        </Col>
                        <Col xs={2}>
                            <Divider type="vertical" />
                        </Col>
                        <Col xs={2}>
                            <span className="bg-light-grey rounded-circle p-3 font-weight-bold">{item.activityCount}</span>
                        </Col>
                        <Col xs={6}>
                            <h4 className="text-light-grey mb-0">Activities Performed</h4>
                        </Col>
                        <Col className="d-flex justify-content-end" xs={4}>
                            <IoIosArrowForward size={20} />
                        </Col>
                    </Row>
                ))
            }
        </div>
    )
}

AllActivity.propTypes = {
    setSelectedActivity: PropTypes.node.isRequired,
};

