import React from 'react';
import {
  Block,
  Row,
  Col,
  Gauge,
} from 'framework7-react';

const EVENT_WEEKDAY_TYPE = "EVENT_WEEKDAY_TYPE";
const EVENT_WEEK_TYPE = "EVENT_WEEK_TYPE";

const getEventTypeTitle = t => {
  switch (t) {
    case EVENT_WEEKDAY_TYPE: return "Days of week";
    case EVENT_WEEK_TYPE: return "Week"
  }
  
}

const CountdownBlock = () => {
  const eventsRemains = 8;
  const eventName  = "Summer Weekends"
  const eventType = EVENT_WEEK_TYPE;
  const eventTitle = getEventTypeTitle(eventType)
  const eventPeriod = 1
  const eventEnd = "2023-11-30"
  const eventStart = "2023-09-01"
  const eventSteps = 12
  const isDateEvent = true;
  const eventProgress = .30
  
  return <Block className={"countdown-event-block"}>
    <Row>
      <Col width="33">
        <div className={"progress-widget"}>
          <Gauge
            type="circle"
            value={eventProgress}
            size={80}
            borderColor="#2196f3"
            borderWidth={10}
            valueText={eventsRemains}
            valueFontSize={16}
            valueTextColor="#2196f3"
          />
          <span className={"progress-title"}>
            {eventProgress * 100}%
          </span>
        </div>
      </Col>
      

    </Row>
  </Block>;
};
export default CountdownBlock;