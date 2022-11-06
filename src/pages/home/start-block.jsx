import React from 'react';
import {
  Block,
  Row,
  Col,
  Gauge,
} from 'framework7-react';

const StartBlock = () => {
  const day = 8;
  const dayName  = "Montag"
  const month = "Jun";
  const trainingsCount = 8;
  const trainingsProgress = 36;

  return <Block className={"home-widget-block"}>
    <Row>
      <Col width="33">
        <div className={"progress-widget"}>
          <Gauge
            type="circle"
            value={trainingsProgress / 100}
            size={80}
            borderColor="#2196f3"
            borderWidth={10}
            valueText={trainingsCount}
            valueFontSize={16}
            valueTextColor="#2196f3"
          />
          <span className={"progress-title"}>{trainingsProgress}%</span>
        </div>
      </Col>
      <Col width="66">
        <div className={"date-widget"}>
          <div>
            <span className={"date-day"}>{day}</span>
            <span className={"date-month"}>{month}</span>
          </div>
          <div className={"date-day-name"}>{dayName}</div>
        </div>
      </Col>
    </Row>
  </Block>;
};
export default StartBlock;