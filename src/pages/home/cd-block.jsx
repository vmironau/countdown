import React from 'react';
import {
  Block,
  Row,
  Col,
  Gauge,
} from 'framework7-react';


const getEventCurrentState = event => {
  if(isDateEvent(event.type)) {
    return new Date()
  } else {
    return event.currentState
  }
}

const CountdownBlock = (props) => {
  const event = props.event;
  const 
  
  const eventsRemains = calcEventSteps(getEventCurrentState(event));
  const eventName  = event.name
  const eventType = event.type;
  const eventTitle = getEventTypeTitle(eventType)
  const eventPeriod = event.period
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