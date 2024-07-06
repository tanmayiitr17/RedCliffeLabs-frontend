import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;
const AnimatedNumbers = ({ title, value }) => (
    <Row gutter={16}>
        <Col span={25}>
            <Statistic title={title} value={value} formatter={formatter} />
        </Col>
    </Row>
);
export default AnimatedNumbers;