import { Col, Row } from "antd";
import { useState } from "react";
import IMAGES from "../../../assets/images";
import ReportsChart from "./components/ReportsChart";
import TanentsCard from "./components/TanentsCard";
import UserCard from "./components/User";

export default function Index() {


  const data = [
    {
      id: 0,
      date: new Date(2022, 10, 11),
      image: IMAGES.CHILD_IMG,
      name: "Kathryn Murphy",
      address: "32 South Military Street Kent, OH 44240",
      status: 'Admin',
      tanents: [
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "30 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "12 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "24 Bungalow",
          totalTanents: 12,
        },
        {
          assetName: "Hearst Castle",
          totalTanents: 12,
        },
        {
          assetName: "29 Evergeen",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "24 Bungalow",
          totalTanents: 12,
        },
        {
          assetName: "Hearst Castle",
          totalTanents: 12,
        },
        {
          assetName: "29 Evergeen",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
      ]
    },
    {
      id: 1,
      date: new Date(2022, 10, 11),
      image: IMAGES.CHILD_IMG,
      name: "Alexandar Murphy",
      address: "32 South Military Street Kent, OH 44240",
      status: 'Corporate',
      activityCount: 35,
      tanents: [
        {
          assetName: "10 Falcon",
          totalTanents: 12,
        },
        {
          assetName: "30 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },

      ]
    },
    {
      id: 2,
      date: new Date(2022, 10, 10),
      image: IMAGES.CHILD_IMG,
      name: "Kathryn Murphy",
      address: "32 South Military Street Kent, OH 44240",
      status: 'Admin',

      tanents: [
        {
          assetName: "30 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "12 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "24 Bungalow",
          totalTanents: 12,
        },
        {
          assetName: "Hearst Castle",
          totalTanents: 12,
        },
        {
          assetName: "29 Evergeen",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
      ]

    },
    {
      id: 3,
      date: new Date(2022, 10, 13),
      image: IMAGES.CHILD_IMG,
      name: "Alexandar Murphy",
      address: "32 South Military Street Kent, OH 44240",
      status: 'Corporate',
      activityCount: 35,
      tanents: [
        {
          assetName: "10 Falcon",
          totalTanents: 12,
        },
        {
          assetName: "30 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "12 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "24 Bungalow",
          totalTanents: 12,
        },
        {
          assetName: "Hearst Castle",
          totalTanents: 12,
        },
        {
          assetName: "29 Evergeen",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
      ]
    },
    {
      id: 4,
      date: new Date(2022, 10, 10),
      image: IMAGES.CHILD_IMG,
      name: "Alexandar Murphy",
      address: "32 South Military Street Kent, OH 44240",
      status: 'Corporate',
      activityCount: 35,
      tanents: [
        {
          assetName: "10 Falcon",
          totalTanents: 12,
        },
        {
          assetName: "30 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
        {
          assetName: "12 Inlet Cove Cottage",
          totalTanents: 12,
        },
        {
          assetName: "70 Spotted Sandpiper",
          totalTanents: 12,
        },
        {
          assetName: "Peppers House",
          totalTanents: 12,
        },
        {
          assetName: "24 Bungalow",
          totalTanents: 12,
        },
        {
          assetName: "Hearst Castle",
          totalTanents: 12,
        },
        {
          assetName: "29 Evergeen",
          totalTanents: 12,
        },
        {
          assetName: "Boston heights",
          totalTanents: 12,
        },
      ]
    }
  ]

  const [tanents, setTanents] = useState(data[0].tanents);

  return (
    <Row gutter={16} className="admin-dashboard-wrapper">
      <Col xs={18}>
        <Row>
          <Col xs={24}>
            <ReportsChart />
          </Col>
          <Col xs={24}>
            <UserCard data={data} setTanents={setTanents} />
          </Col>
        </Row>
      </Col>
      <Col xs={6}>
        <TanentsCard tanents={tanents} />
      </Col>
    </Row >
  );
}
