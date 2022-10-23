import { EyeFilled } from "@ant-design/icons";
import { Badge, Button, Col, DatePicker, Divider, Dropdown, Input, Menu, Row } from "antd";
import { IoIosArrowForward } from "react-icons/io"
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import IMAGES from "../../../assets/images";
import SearchForm from "./components/searchForm";


const { Search } = Input;

export default function Index() {

  const [selectedActivity, setSelectedActivity] = useState(null);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const hideTableColumns = (
    <Menu
      items={[
        {
          key: "1",
          type: "group",
          label: (
            <div>
              <h4 style={{ color: "#000" }}>Filter Dates</h4>
            </div>
          ),
        },
        {
          key: "2",
          label: <DatePicker onChange={onChange} placeholder="Date from" className="activity-date-picker rounded-sm w-100" />,
        },
        {
          key: "3",
          label: <DatePicker onChange={onChange} placeholder="Date to" className="activity-date-picker rounded-sm w-100" />,
        },
        {
          key: "4",
          label: (
            <div>
              <hr style={{ border: "1px solid #F2F3F5" }} />
              <Button className="reset-dropdown-btn">Submit</Button>
            </div>
          ),
        },
      ]}
    />
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const testData = [
    {
      id: 0,
      date: new Date(2022, 10, 11),
      image: IMAGES.CHILD_IMG,
      name: "Kathryn Murphy",
      userID: "User ID - 0248",
      status: 'Admin',
      activityCount: 3,
      activity: [
        {
          id: 0,
          number: 1,
          date: "22/2/2022",
          time: "02:24 PM",
          title: "Assign a new task to William",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        },
        {
          id: 1,
          number: 2,
          date: "22/2/2022",
          time: "02:24 PM",
          title: "New task created",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        }
      ]
    },
    {
      id: 1,
      date: new Date(2022, 10, 11),
      image: IMAGES.CHILD_IMG,
      name: "Alexandar Murphy",
      userID: "User ID - 0248",
      status: 'Corporate',
      activityCount: 35,
      activity: [
        {
          id: 0,
          number: 1,
          date: "21/1/2022",
          time: "05:34 PM",
          title: "Assign a new task to William",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        },
      ]
    },
    {
      id: 2,
      date: new Date(2022, 10, 10),
      image: IMAGES.CHILD_IMG,
      name: "Kathryn Murphy",
      userID: "User ID - 0248",
      status: 'Admin',
      activityCount: 3,
      activity: [
        {
          id: 0,
          number: 1,
          date: "22/2/2022",
          time: "02:24 PM",
          title: "Assign a new task to William",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        },
        {
          id: 1,
          number: 2,
          date: "22/2/2022",
          time: "02:24 PM",
          title: "New task created",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        }
      ]

    },
    {
      id: 3,
      date: new Date(2022, 10, 13),
      image: IMAGES.CHILD_IMG,
      name: "Alexandar Murphy",
      userID: "User ID - 0248",
      status: 'Corporate',
      activityCount: 35,
      activity: [
        {
          id: 0,
          number: 1,
          date: "21/1/2022",
          time: "05:34 PM",
          title: "Assign a new task to William",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        },
      ]
    },
    {
      id: 4,
      date: new Date(2022, 10, 10),
      image: IMAGES.CHILD_IMG,
      name: "Alexandar Murphy",
      userID: "User ID - 0248",
      status: 'Corporate',
      activityCount: 35,
      activity: [
        {
          id: 0,
          number: 1,
          date: "21/1/2022",
          time: "05:34 PM",
          title: "Assign a new task to William",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        },
      ]
    }
    ,
    {
      id: 5,
      date: new Date(2022, 10, 11),
      image: IMAGES.CHILD_IMG,
      name: "Kathryn Murphy",
      userID: "User ID - 0248",
      status: 'Admin',
      activityCount: 3,
      activity: [
        {
          id: 0,
          number: 1,
          date: "22/2/2022",
          time: "02:24 PM",
          title: "Assign a new task to William",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        },
        {
          id: 1,
          number: 2,
          date: "22/2/2022",
          time: "02:24 PM",
          title: "New task created",
          description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        }
      ]

    },
  ]

  const sortedTestData = testData.sort(
    (objA, objB) => Number(objA.date) - Number(objB.date),
  );


  const activityByDate = sortedTestData.reduce((group, time) => {
    const { date } = time;
    group[date] = group[date] ?? [];
    group[date].push(time);
    return group;
  }, {});

  return (
    <div className="activity-log-wrapper">
      <Row gutter={24}>
        <Col xs={18}>
          <Row className="button-search">
            {/* Tab buttons */}
            <Col xs={12}>
              <div className="table-footer-btn d-flex align-items-center">
                <div className="align-items-center bg-white d-flex justify-content-between rounded-sm btn-action-div">
                  <Button className="btn-action d-flex justify-content-center align-items-center" >
                    <h5 className="mb-0 ml-1 mt-1">All</h5>
                  </Button>
                  <Divider type="vertical" />
                  <Button className="btn-action d-flex justify-content-center align-items-center">
                    <h5 className="mb-0 ml-1 mt-1">Admin</h5>
                  </Button>
                  <Divider type="vertical" />
                  <Button className="btn-action d-flex justify-content-center align-items-center">
                    <h5 className="mb-0 ml-1 mt-1">Corporate</h5>
                  </Button>
                  <Divider type="vertical" />
                  <Button className="btn-action d-flex justify-content-center align-items-center">
                    <h5 className="mb-0 ml-1 mt-1">Individual</h5>
                  </Button>
                </div>
              </div>
            </Col>
            {/* Search Field */}
            <Col xs={12}>
              <div className="d-flex justify-content-end align-items-center searchbar-project">
                <FiSearch size={20} className="search-icon" />
                <Search
                  className="w-50 mx-2"
                  placeholder="Search a project"
                  onClick={() => setIsModalOpen(true)}
                />
                <Dropdown overlay={hideTableColumns} trigger={["click"]}>
                  <span className="filter-icon-span">
                    <img src={IMAGES.TABLE_ICON} alt="Table Icon" />
                  </span>
                </Dropdown>
              </div>
            </Col>
          </Row>
          <div className="mt-3 all-activity-wrapper">
            {
              Object.entries(activityByDate).map(([key, value]) => (
                <div>
                  <Row>
                    <Col xs={24}>
                      <h3>{new Date(key).toLocaleDateString('en-US', { month: "short", day: "numeric", year: "numeric" })}</h3>
                    </Col>
                  </Row>
                  {
                    value.map((item) => (
                      <Row key={item.id} className="w-100 bg-white rounded-sm p-2 d-flex align-items-center mb-2 m-0 cursor-pointer" gutter={24} onClick={() => { setSelectedActivity(item) }}>
                        <Col xs={12}>
                          <Row gutter={16}>
                            <Col>
                              <img style={{ width: '50px' }} className="rounded-circle" src={item.image} alt="child avatar" />
                            </Col>
                            <Col>
                              <h5 className="mb-0">{item.name}</h5>
                              <p className="mb-0">{item.userID}</p>
                            </Col>
                            <Col>
                              <Badge
                                count={item.status}
                                style={{ color: "#676EB4", backgroundColor: '#F2F3F5' }}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={12}>
                          <Row gutter={16} className="d-flex align-items-center">
                            <Col>
                              <Divider type="vertical" />
                            </Col>
                            <Col>
                              <span className="bg-light-grey d-flex align-items-center justify-content-center activity-count">{item.activityCount}</span>
                            </Col>
                            <Col>
                              <h4 className="text-light-grey mb-0">Activities Performed</h4>
                            </Col>
                            <Col flex="auto" className="d-flex justify-content-end">
                              <IoIosArrowForward size={20} />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    ))
                  }

                </div>
              ))
            }
          </div>
        </Col>
        {
          selectedActivity === null ?
            <Col xs={6} className="bg-white vh-100 d-flex align-items-center justify-content-center p-5">
              <img src={IMAGES.NO_USER} alt="no user found" className="w-75" />
            </Col>
            :
            <Col xs={6} className="bg-white vh-100 p-0 px-3 py-3">
              <Row>
                <Col xs={24}>
                  <Row className="bg-light-grey p-3 font-size-sm" gutter={5}>
                    <Col>
                      <img style={{ width: '45px' }} className="rounded-circle" src={selectedActivity.image} alt="child avatar" />
                    </Col>
                    <Col>
                      <h5 className="mb-0 font-weight-bold">{selectedActivity.name}</h5>
                      <p className="mb-0">{selectedActivity.userID}</p>
                    </Col>
                    <Col>
                      <Badge
                        count={selectedActivity.status}
                        style={{ color: "#676EB4", backgroundColor: '#F2F3F5' }}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} className="mt-3">
                  {
                    selectedActivity?.activity?.map((item) => (
                      <div>
                        <hr />
                        <Row>
                          <Col xs={20} className="font-size-sm mt-3">
                            <h4 className="font-weight-bold ">Activity {item.number}</h4>
                            <p>{item.date} / {item.time}</p>
                            <h5 className="text-blue">{item.title}</h5>
                            <p>{item.description}</p>
                          </Col>
                          <Col xs={4} className="d-flex align-items-center justift-content-center">
                            <EyeFilled className="bg-light-grey p-2 rounded-sm font-size-md" />
                          </Col>
                        </Row>
                      </div>
                    ))
                  }
                </Col>
              </Row>
            </Col>
        }
      </Row>
      <SearchForm visible={isModalOpen} handleCancel={closeModal} />

    </div>
  );
}
