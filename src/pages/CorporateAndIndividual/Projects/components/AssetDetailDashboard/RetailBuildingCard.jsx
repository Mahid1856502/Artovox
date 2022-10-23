import { Card, Col, Row } from 'antd'
import PropTypes from 'prop-types';

export default function RetailBuildingCard(props) {
    const { image, title, subtitle } = props;
    return (
        <Card className="rounded-sm bg-light-blue p-2 retail-building-card mb-2" bordered={false}>
            <Row gutter={10} className="d-flex align-items-center">
                <Col>
                    <div className="bg-gray-dark rounded-circle p-3 m-1">
                        <img src={image} alt="building icon" width={30} />
                    </div>
                </Col>
                <Col >
                    <h4 className="text-blue mb-0">{title}</h4>
                    <p className="m-0">{subtitle}</p>
                </Col>
            </Row>
        </Card>
    )
}

RetailBuildingCard.propTypes = {
    image: PropTypes.isRequired,
    title: PropTypes.isRequired,
    subtitle: PropTypes.isRequired,
};