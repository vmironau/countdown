import React from 'react';
import {
  Block,
  Row,
  Col,
  Tab,
  Link,
  Tabs,
  Segmented,
} from 'framework7-react';

const StatsTabs = () => {

  return <Block className={"home-widget-block"}>
    <Row className={"tabs-bar"}>
      <Col width={33}>
        <Link tabLink="#tab-1" tabLinkActive>Week</Link>
      </Col>
      <Col width={33}>
        <Link tabLink="#tab-2" tabLinkActive>Month</Link>
      </Col>
      <Col width={33}>
        <Link tabLink="#tab-3" tabLinkActive>Year</Link>
      </Col>
    </Row>

    <Tabs swipeable>
      <Tab id="tab-1" className="stat-tab" tabActive>
        <Block>week</Block>
      </Tab>
      <Tab id="tab-2" className="stat-tab">
        <Block>month</Block>
      </Tab>
      <Tab id="tab-3" className="stat-tab">
        <Block>year</Block>
      </Tab>
    </Tabs>
  </Block>;
};
export default StatsTabs;