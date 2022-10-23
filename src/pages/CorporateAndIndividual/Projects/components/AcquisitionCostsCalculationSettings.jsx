
import { Button, Card, Col, Row, Form, Input, Select } from "antd"
import { Option } from "antd/lib/mentions"





function AcquisitionCostsCalculationSettings() {

    return (
        <Form>
            <div

                style={{ backgroundColor: "#fff", height: "358px" }}
                className="definitioncalculationSetting">


                <div />
                <div className=" ml-auto mr-auto AcquisitionCostsCalculationSetting">

                    <Card
                        title="Acquisition Costs"
                        className="card-head"



                    >




                        <Row gutter={24}>
                            <Col lg={6} sm={24} >

                                <h5

                                >Market Value</h5>
                                <div className="d-flex">
                                    <h5 className=" mr-1 mt-2">&lt;</h5>
                                    <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >  <h5

                                >Tax</h5>

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >  <h5

                                >Agent</h5>

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >  <h5

                                >Notary</h5>

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>


                        </Row>





                        <Row gutter={24} className="mt-3">
                            <Col lg={6} sm={24} >


                                <div className="d-flex">
                                    <h5 className=" mr-1 mt-2">&lt;</h5>
                                    <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>


                        </Row>
                        <Row gutter={24} className="mt-3">
                            <Col lg={6} sm={24} >


                                <div className="d-flex">
                                    <h5 className=" mr-1 mt-2">&lt;</h5>
                                    <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>


                        </Row>
                        <Row gutter={24} className="mt-3">
                            <Col lg={6} sm={24} >


                                <div className="d-flex">
                                    <h5 className=" mr-1 mt-2">&lt;=</h5>
                                    <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                    <h5 className="ml-1 mt-2">EUR</h5>
                                </div>

                            </Col>

                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>


                        </Row>
                        <div className="d-flex  mt-3">
                            <h5 className="mt-2 mr-3">
                                Adjustment of the land transfer tax
                            </h5>
                            <Select
                                defaultValue="automatic"
                                style={{
                                    width: "47%"
                                }}

                            >
                                <Option value="jack">automatic</Option>


                            </Select>
                        </div>



                    </Card>
                </div>
            </div >

            <div

                style={{ backgroundColor: "#fff" }}
                className="definitioncalculationSetting">


                <div />
                <div className=" ml-auto mr-auto AcquisitionCostsCalculationSetting">

                    <Card >
                        <Row gutter={24} >
                            <Col lg={6} sm={24} >


                                <div className="d-flex ">
                                    <h5
                                        className="mt-4"
                                    >Presetting</h5>



                                </div>

                            </Col>

                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >
                                    <h5 className="d-flex justify-content-center">Tax</h5>

                                    {/* select code */}

                                    <div className="d-flex">
                                        <h5 className="mr-1 mt-2">EUR</h5>
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >
                                    <h5 className="d-flex justify-content-center">Agent</h5>
                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6} sm={24}>
                                <div className='mr-3'

                                >
                                    <h5 className="d-flex justify-content-center">Notary</h5>

                                    {/* select code */}

                                    <div className="d-flex">
                                        <Input placeholder="0" style={{ color: "black", textAlign: "text-end" }} />
                                        <h5 className="ml-1 mt-2">%</h5>
                                    </div>
                                </div>

                            </Col>


                        </Row>
                    </Card>



                    <div style={{ textAlign: "end" }} className="btn-style ">
                        <Button key="submit" type="default" className="btn-primary">
                            Save Changes
                        </Button>
                    </div>
                </div>






            </div >

        </Form >





    )
}

export default AcquisitionCostsCalculationSettings

