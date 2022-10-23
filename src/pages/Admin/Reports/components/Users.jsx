import { Card, Col, Row } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";
import { getTagColorClass } from "../../../../utils/helpers";

function Users() {
  const usersGroupData = [
    {
      id: 0,
      date: new Date(2022, 9, 20),
      activity: [
        {
          id: 0,
          nameAbbr: "JB",
          name: "Jerome Bell",
          role: "Coorporate",
          tags: ["Most Least Assets", "Active"],
        },
        {
          id: 1,
          nameAbbr: "CW",
          name: "Cameron Williamson",
          role: "Individual",
          tags: ["Inactive"],
        },
        {
          id: 2,
          nameAbbr: "BS",
          name: "Brooklyn Simmons",
          role: "Coorporate",
          tags: ["Subscriber"],
        },
      ],
    },
    {
      id: 1,
      date: new Date(2022, 9, 19),
      activity: [
        {
          id: 0,
          nameAbbr: "JB",
          name: "Jerome Bell",
          role: "Corporate",
          tags: ["Most Least Assets", "Active"],
        },
        {
          id: 1,
          nameAbbr: "SO",
          name: "Brooklyn Simmons",
          role: "Corporate",
          tags: ["Subscriber"],
        },
      ],
    },
    {
      id: 2,
      date: new Date(2022, 9, 18),
      activity: [
        {
          id: 0,
          nameAbbr: "JB",
          name: "Jerome Bell",
          role: "Corporate",
          tags: ["Most Least Assets", "Active"],
        },
      ],
    },
  ];

  return (
    <div>
      <Card bordered={false} className="custom-scroll users-card-scroll">
        <div className="d-flex justify-content-between">
          <h3>Users</h3>
          <div className="d-flex">
            <div className="d-flex my-auto mr-2 users-top-icon">
              <AiOutlineSearch size={18} />
            </div>
            <div className="d-flex my-auto users-top-icon">
              <IoMdOptions size={18} />
            </div>
          </div>
        </div>
        <hr />

        {usersGroupData.map((item) => (
          <div>
            <Row>
              <Col xs={24}>
                <h3>
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
              </Col>

              {item.activity.map((activity) => (
                <Col
                  xs={24}
                  className="d-flex align-items-center justify-content-between mb-3"
                >
                  <div className="d-flex align-items-center justify-content">
                    <div className="users-name-abbr">
                      <h3 className="m-0">{activity.nameAbbr}</h3>
                    </div>

                    <div className="ml-2">
                      <h4 className="font-weight-normal m-0">
                        {activity.name}
                      </h4>
                      <p className="mb-0">{activity.role}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    {activity.tags.map((badge) => (
                      <div
                        className={`ml-2 pl-3 pr-3 ${getTagColorClass(badge)}`}
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                  
                    
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default Users;
