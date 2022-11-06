import React from 'react';
import {
  Block,
  Row,
  Col,
  Gauge,
  Icon,
} from 'framework7-react';
import {minutesToTime} from "../../utils/utils";

const LastWorkout = () => {
  const trainingPlanTime = 120;
  const trainingTime = 80;
  const trainingWeight = 8034;
  const trainingAerobic = 20000;
  const timeProgress = trainingTime / trainingPlanTime;
  const trainingDate = "Th 27 Mar";
  const trainingProg = "Fullbody 1";

  return <Block className={"home-widget-block"}>
    <Row>
      <Col width="33">
        <div className={"time-widget"}>
          <Gauge
            type="circle"
            value={timeProgress}
            size={80}
            borderColor="#2196f3"
            borderWidth={10}
            valueText={minutesToTime(trainingTime)}
            valueFontSize={16}
            valueTextColor="#2196f3"
          />
          <span className={"progress-title"}>{trainingDate}</span>
        </div>
      </Col>
      <Col width="66">
        <div className={"workload-info"}>
          <Row>
            <lable>Training programm: {trainingProg}</lable>
          </Row>
          <Row>
            <lable>Total Workload:</lable>
          </Row>
          <Row>
            <Icon f7="house"/>
            <span className={"workload-type"}>Weight:</span>
            <span className={"workload-value"}>{trainingWeight}</span>
          </Row>
          <Row>
            <Icon f7="house"/>
            <span className={"workload-type"}>Aerobic:</span>
            <span className={"workload-value"}>{trainingAerobic}</span>
          </Row>
        </div>
      </Col>
    </Row>
  </Block>;
};
export default LastWorkout;