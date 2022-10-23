

import { Card, Col, Row, Form, Input, Table, Select, Button } from "antd";
import { Option } from "antd/lib/mentions";
import IMAGES from "../../../../assets/images";


// const content = [{
//     tab: <div>pppp</div>,
// },
// ];

// const contentList = {
//     tab1: <p>content1</p>,

// };

const columns = [
    {

        dataIndex: 'Fname',
        key: 'Fname',


    },
    {
        title: '2010',
        dataIndex: 'name',
        key: 'name',

        width: 150,


    },
    {
        title: '2011',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2012',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2013',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2014',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2015',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2016',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2017',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2018',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },
    {
        title: '2019',
        dataIndex: 'name',
        key: 'name',

        width: 150,
    },

];
const data = [
    {
        key: '1',
        Fname: 'Jan',
        name: <div><Input /></div>,
    },
    {
        key: '2',
        Fname: "Feb",
        name: <div><Input /></div>,
        age: 42,
        address: 'London No. 2 Lake Park, London No. 2 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        Fname: "Mar",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }, {
        key: '4',
        Fname: "Apr",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '5',
        Fname: "May",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '6',
        Fname: "Jun",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '7',
        Fname: "Jul",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '8',
        Fname: "Aug",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '9',
        Fname: "Sep",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '10',
        Fname: "Oct",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '11',
        Fname: "Nov",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '12',
        Fname: "Dec",
        name: <div><Input /></div>,
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


function ConsumerPriceCalculationSettings() {

    return (
        <Form>
            <div
                style={{ backgroundColor: "#fff", height: "570px", overflowY: "scroll" }}
                className="definitioncalculationSetting">


                <div />

                <div className="Consumer">

                    <Card

                        title={
                            <div className="mb-1">
                                <h3>Consumer Price Index #1</h3>

                                <Row className="justify-content-between" gutter={24}>
                                    <Col span={6}>
                                        <Input placeholder="Verbraucherpreisindex 2010" />
                                    </Col>
                                    <Col span={13} className="d-flex">
                                        <h5 className="mt-2 mr-1">Tokken</h5>
                                        <Input className="w-25" placeholder="VPI 15" />
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <h5 className="mt-2 mr-1">Current Year</h5>
                                        <Select
                                            defaultValue="2019"
                                            style={{
                                                width: "100%"
                                            }}

                                        >
                                            <Option value="2019">2019</Option>


                                        </Select>
                                    </Col>



                                </Row>

                            </div>}
                        className="card-head"


                        style={{
                            width: "100%", paddingTop: "5px"
                        }}
                    >





                        <Table className="mt-2" columns={columns} dataSource={data} />


                    </Card>
                </div>


                <div className="Consumer-card">

                    <Card
                        title="Links"
                    >
                        <div className="image-container" style={{ backgroundColor: "white!important" }}>
                            <img
                                alt=""
                                src={IMAGES.DSTATIS}
                                width="15%"


                            />

                        </div>


                    </Card>
                </div>

                <div style={{ textAlign: "end" }}>
                    <Button key="submit" type="default" className="btn-primary">
                        Save Changes
                    </Button>
                </div>

            </div >



        </Form >





    )
}

export default ConsumerPriceCalculationSettings
