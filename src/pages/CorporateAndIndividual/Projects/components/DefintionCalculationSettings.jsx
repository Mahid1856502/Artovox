import { Button, Card, Col, Row, Select, Form } from "antd"
import { Option } from "antd/lib/mentions"




function DefinitionCalculationSettings() {

    return (
        <Form>
            <div
                style={{ backgroundColor: "#fff", height: "570px", overflowY: "scroll" }}
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

                            <h5

                            >#1</h5>
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

                            >  <h5

                            >#2</h5>

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

                            >  <h5

                            >#3</h5>

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

                            <h5

                            >#3</h5>
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

                            >  <h5

                            >#4</h5>

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

                            >  <h5

                            >#5</h5>

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

                            <h5

                            >#6</h5>
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

                            >  <h5

                            >#7</h5>

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

                            >  <h5

                            >#8</h5>

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

                            <h5

                            >#9</h5>
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

                            >  <h5

                            >#10</h5>

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

                            >  <h5

                            >#11</h5>

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

                            <h5

                            >#12</h5>
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

                            >  <h5

                            >#13</h5>

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

                            >  <h5

                            >#14</h5>

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

                            <h5

                            >#15</h5>
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

                            >  <h5

                            >#16</h5>

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

                            >  <h5

                            >#17</h5>

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

export default DefinitionCalculationSettings