import { Card, Col, Row, Table } from "antd"
import { Carousel } from 'react-carousel-minimal';
import { BsDot } from "react-icons/bs";
import { MdEdit } from "react-icons/md"
import IMAGES from "../../../../assets/images";
import RetailBuildingCard from "./AssetDetailDashboard/RetailBuildingCard";

function AssetDashboard() {

  const carouselData = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];

  const columns = [
    {
      title: 'Asset ID',
      dataIndex: 'assetID',
      align: 'center'
    },
    {
      title: 'ID#2',
      dataIndex: 'secondID',
      align: 'center'
    },
    {
      title: 'Cluster',
      dataIndex: 'cluster',
      align: 'center'
    },
    {
      title: 'Analysis Date',
      dataIndex: 'analysisDate',
      align: 'center'
    },
    {
      title: 'Last change',
      dataIndex: 'lastChange',
      align: 'center'
    },
    {
      title: 'User',
      dataIndex: 'user',
      align: 'center'
    },
  ];
  const data = [
    {
      assetID: '10',
      secondID: '101050',
      cluster: '----',
      analysisDate: '02/02/2022',
      lastChange: '02/02/2022',
      user: 'JB',

    },
  ];

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }

  return (
    <div>
      <Row className="bg-white rounded-sm p-3 asset-dashboard-wrapper" gutter={16}>
        <Col xs={12}>
          <Carousel
            data={carouselData}
            // time={3000}
            height="450px"
            // captionStyle={captionStyle}
            // radius="10px"
            // slideNumber
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            // automatic
            // dots
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails
            thumbnailWidth="100px"
          />
        </Col >
        <Col xs={12}>
          <h1 className="text-blue mb-0">Office/Retail Building</h1>
          <p className="m-0 d-flex align-items-center text-subtitle ">Goethestr.27 <BsDot /> 60313 Frankfurt <BsDot /> Germany</p>
          <Table
            className="asset-table mt-2"
            size="small"
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
          <Row gutter={10} className="mt-3">
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
            <Col xs={12}>
              <RetailBuildingCard image={IMAGES.BUILDING} title="Primary Use" subtitle="Office" />
            </Col>
          </Row>
        </Col>
      </Row >
      <Row gutter={16} className="mt-3">
        <Col xs={12}>
          <Card title="Validation Results" extra={<MdEdit />}>
            <hr className="m-0" />
            f
          </Card>
        </Col>
        <Col xs={12}>card2</Col>
      </Row>
    </div>
  )
}

export default AssetDashboard