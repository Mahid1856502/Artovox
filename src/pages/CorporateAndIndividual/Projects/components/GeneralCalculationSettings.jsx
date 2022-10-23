import { Button, Card, Col, Row, Select, Form } from "antd"
import { Option } from "antd/lib/mentions"




function GeneralCalculationSettings() {

    return (
        <Form>
            <div
                style={{ backgroundColor: "#fff", height: "570px", overflowY: "scroll" }}
                className="GeneralCalculationSetting">


                <Card
                    title="Language"

                    style={{
                        width: "100%",
                    }}
                >
                    <Row gutter={24}>
                        <Col lg={12} sm={24} >
                            <div className='mr-3'

                            >  <h5

                            >Tool Language</h5>

                                {/* select code */}

                                <Select
                                    defaultValue="English"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">English</Option>
                                    <Option value="lucy">Urdu</Option>

                                </Select>
                            </div>



                        </Col>

                        <Col lg={12} sm={24}>
                            <div className='mr-3'

                            >  <h5

                            >Report Language</h5>

                                {/* select code */}

                                <Select
                                    defaultValue="Urdu"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">English</Option>
                                    <Option value="lucy">Urdu</Option>

                                </Select>
                            </div>

                        </Col>
                    </Row>
                </Card>
                <Card
                    title="Currency"

                    style={{
                        width: "100%",
                    }}
                >
                    <Row gutter={24}>
                        <Col lg={12} sm={24} >
                            <div className='mr-3'

                            >  <h5

                            >Currency</h5>

                                {/* select code */}

                                <Select
                                    defaultValue="EUR"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">EUR</Option>
                                    <Option value="lucy">PKR</Option>

                                </Select>
                            </div>




                        </Col>


                    </Row>
                </Card>
                <Card
                    title="Excel"

                    style={{
                        width: "100%",
                    }}
                >
                    <Row gutter={24}>
                        <Col lg={12} sm={24} >
                            <div className='mr-3'

                            >  <h5

                            >Calculation Mode</h5>

                                {/* select code */}

                                <Select
                                    defaultValue="automatic"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">automatic</Option>


                                </Select>
                            </div>



                        </Col>

                        <Col lg={12} sm={24}>
                            <div className='mr-3'

                            >  <h5

                            >Separators</h5>

                                {/* select code */}

                                <Select
                                    defaultValue="System"
                                    style={{
                                        width: "100%"
                                    }}

                                >
                                    <Option value="jack">System</Option>
                                    <Option value="lucy">PKR</Option>

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
        </Form>





    )
}

export default GeneralCalculationSettings