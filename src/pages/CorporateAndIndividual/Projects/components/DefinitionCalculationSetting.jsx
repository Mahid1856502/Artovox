import { Button, Card, Col, Row, Select, Form } from "antd"
import { Option } from "antd/lib/mentions"




function DefinitionCalculationSetting() {

    return (
        <Form>
            <div
                style={{ backgroundColor: "#fff", height: "620px" }}
                className="definitioncalculationSetting">

                <Row
                    gutter={24}
                    className="mb-2"

                >
                    <Col
                        style={{ paddingRight: "0px" }}
                        lg={8} md={24}>
                        <Button

                            style={{ borderRadius: "0px", borderStartRadius: "2px", border: "2px solid #00215B" }}
                            key="submit" type="default" className="btn-primary btn-styling">
                            Property Types
                        </Button>

                    </Col>

                    <Col
                        style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        lg={8} md={24}>

                        <Button key="submit" type="default" className="btn-primary btn-styling"
                            style={{ background: "white ", color: "black", borderRadius: "0px", border: "2px solid #00215B" }}
                        >
                            Areas & Units
                        </Button>

                    </Col>

                    <Col
                        style={{ paddingLeft: "0px" }}

                        lg={8} md={24}>
                        <Button key="submit" type="default" className="btn-primary btn-styling"
                            style={{ background: "white ", color: "black", borderRadius: "0px", border: "2px solid #00215B" }}
                        >
                            Use Groups
                        </Button>

                    </Col>
                </Row>
                <div />

                <Card
                    title="Property Types"
                    className="card-head"
                    extra=


                    {

                        <div
                            style={{ width: "147px" }}
                        ><Select
                            defaultValue="Preset 1"
                            style={{
                                width: "100%", marginBottom: "5%", marginTop: "5%"

                            }}

                        >
                                <Option value="jack">Preset 1</Option>


                            </Select></div>}

                    style={{
                        width: "100%", paddingTop: "5px"
                    }}
                >




                    <Row gutter={24}>
                        <Col lg={8} sm={24} >

                            <h6

                            >#1</h6>
                            <Select
                                defaultValue="Office Building"
                                style={{
                                    width: "100%"
                                }}

                            >
                                <Option value="jack">Office Building</Option>


                            </Select>
                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#2</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Office Retail Building"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">Office Retail Building</Option>


                                </Select>
                            </div>

                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#3</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Retail building with residential/office"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">Retail building with residential/office</Option>


                                </Select>
                            </div>

                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col lg={8} sm={24} >

                            <h6

                            >#3</h6>
                            <Select
                                defaultValue="Hotel"
                                style={{
                                    width: "100%"
                                }}

                            >
                                <Option value="Hotel">Hotel</Option>


                            </Select>
                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#4</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Business park"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="Business park">Business park</Option>


                                </Select>
                            </div>

                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#5</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Commercial park"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="Commercial park">Commercial park</Option>


                                </Select>
                            </div>

                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col lg={8} sm={24} >

                            <h6

                            >#6</h6>
                            <Select
                                defaultValue="Office Building"
                                style={{
                                    width: "100%"
                                }}

                            >
                                <Option value="Office Building">Office Building</Option>


                            </Select>
                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#7</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Office Retail Building"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="Office Retail Building">Office Retail Building</Option>


                                </Select>
                            </div>

                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#8</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Retail building with residential/office"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="Retail building with residential/office">Retail building with residential/office</Option>


                                </Select>
                            </div>

                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col lg={8} sm={24} >

                            <h6

                            >#9</h6>
                            <Select
                                defaultValue="Hotel"
                                style={{
                                    width: "100%"
                                }}

                            >
                                <Option value="Hotel">Hotel</Option>


                            </Select>
                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#10</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Business park"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="Business park">Business park</Option>


                                </Select>
                            </div>

                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#11</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Retail building with residential/office"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">Retail building with residential/office</Option>


                                </Select>
                            </div>

                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col lg={8} sm={24} >

                            <h6

                            >#12</h6>
                            <Select
                                defaultValue="Office Building"
                                style={{
                                    width: "100%"
                                }}

                            >
                                <Option value="jack">Office Building</Option>


                            </Select>
                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#13</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Office Retail Building"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">Office Retail Building</Option>


                                </Select>
                            </div>

                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#14</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Retail building with residential/office"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">Retail building with residential/office</Option>


                                </Select>
                            </div>

                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col lg={8} sm={24} >

                            <h6

                            >#15</h6>
                            <Select
                                defaultValue="Office Building"
                                style={{
                                    width: "100%"
                                }}

                            >
                                <Option value="jack">Office Building</Option>


                            </Select>
                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#16</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Office Retail Building"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">Office Retail Building</Option>


                                </Select>
                            </div>

                        </Col>

                        <Col lg={8} sm={24}>
                            <div className='mr-3'

                            >  <h6

                            >#17</h6>

                                {/* select code */}

                                <Select
                                    defaultValue="Retail building with residential/office"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">Retail building with residential/office</Option>


                                </Select>
                            </div>

                        </Col>
                    </Row>
                </Card>



                <div style={{ textAlign: "end" }}>
                    <Button key="submit" type="default" className="btn-primary">
                        Save Changes
                    </Button>
                </div>

            </div >

        </Form >





    )
}

export default DefinitionCalculationSetting