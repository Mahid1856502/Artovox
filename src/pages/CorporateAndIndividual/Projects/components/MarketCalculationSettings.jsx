
import { Button, Card, Col, Row, Form, Input } from "antd"





function MarketCalculationSettings() {

    return (
        <Form>
            <div
                style={{ backgroundColor: "#fff", height: "570px" }}
                className="definitioncalculationSetting">


                <div />
                <div className=" ml-auto mr-auto MarketCalculationSetting">
                    <Card
                        title="Rounding"
                        className="card-head"



                    >




                        <Row gutter={24}>
                            <Col lg={12} sm={24} >

                                <h5

                                >Net Present Value</h5>
                                <div className="d-flex ">
                                    <h5 className=" mr-2 mt-2">&gt;=</h5>
                                    <Input placeholder="0" />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={12} sm={24}>
                                <div className='mr-3'

                                >  <h5

                                >Rounding</h5>

                                    {/* select code */}

                                    <Input placeholder="hundred (100€)" style={{ background: "#BFBFBF", color: "black" }} />
                                </div>

                            </Col>


                        </Row>
                        <Row gutter={24}>
                            <Col lg={12} sm={24} >


                                <div className="d-flex mt-3">
                                    <h5 className=" mr-2 mt-2">&gt;=</h5>
                                    <Input placeholder="0" />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={12} sm={24}>
                                <div className='mr-3 mt-3'

                                >

                                    {/* select code */}

                                    <Input placeholder="hundred (100€)" style={{ background: "#BFBFBF", color: "black" }} />
                                </div>

                            </Col>


                        </Row>
                        <Row gutter={24}>
                            <Col lg={12} sm={24} >


                                <div className="d-flex mt-3">
                                    <h5 className=" mr-2 mt-2">&gt;=</h5>
                                    <Input placeholder="0" />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={12} sm={24}>
                                <div className='mr-3 mt-3'

                                >

                                    {/* select code */}

                                    <Input placeholder="hundred (100€)" style={{ background: "#BFBFBF", color: "black" }} />
                                </div>

                            </Col>


                        </Row>
                        <Row gutter={24}>
                            <Col lg={12} sm={24} >


                                <div className="d-flex mt-3">
                                    <h5 className=" mr-2 mt-2">&gt;=</h5>
                                    <Input placeholder="0" />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={12} sm={24}>
                                <div className='mr-3 mt-3'

                                >

                                    {/* select code */}

                                    <Input placeholder="hundred (100€)" style={{ background: "#BFBFBF", color: "black" }} />
                                </div>

                            </Col>


                        </Row>
                        <Row gutter={24}>
                            <Col lg={12} sm={24} >


                                <div className="d-flex mt-3">
                                    <h5 className=" mr-2 mt-2">&gt;=</h5>
                                    <Input placeholder="0" />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={12} sm={24}>
                                <div className='mr-3 mt-3'

                                >

                                    {/* select code */}

                                    <Input placeholder="hundred (100€)" style={{ background: "#BFBFBF", color: "black" }} />
                                </div>

                            </Col>


                        </Row>

                        <Row gutter={24}>
                            <Col lg={12} sm={24} >


                                <div className="d-flex mt-3">
                                    <h5 className=" mr-2 mt-2">&gt;=</h5>
                                    <Input placeholder="0" />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={12} sm={24}>
                                <div className='mr-3 mt-3'

                                >

                                    {/* select code */}

                                    <Input placeholder="hundred (100€)" style={{ background: "#BFBFBF", color: "black" }} />
                                </div>

                            </Col>


                        </Row>
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

export default MarketCalculationSettings

