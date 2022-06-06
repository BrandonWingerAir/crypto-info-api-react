import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Title level={2} className="heading">Home</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Currencies" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Exchanges" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Market Cap" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Daily Volume" value="5"/>
        </Col>
        <Col span={12}>
          <Statistic title="Markets" value="5"/>
        </Col>
      </Row>
    </>
  )
}

export default Home;