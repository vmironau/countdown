const EVENT_WEEKDAY_TYPE = "EVENT_WEEKDAY_TYPE";
const EVENT_WEEK_TYPE = "EVENT_WEEK_TYPE";
const EVENT_MONTH_TYPE = "EVENT_MONTH_TYPE";
const EVENT_COUNT_TYPE = "EVENT_COUNT_TYPE";

export const getEventTypeTitle = t => {
  switch (t) {
    case EVENT_WEEKDAY_TYPE: return "Days of week";
    case EVENT_WEEK_TYPE: return "Week"
  }
}

export const isEventDateType = t => {
  return t !== EVENT_COUNT_TYPE
}

const calcWeeksCout = (eStart, eEnd, excludeTails) => {
  
}

const getWeekDayOfDate = date => {
  
}

const defineRemainsDaysOfStartWeek = (eStart, days) => {
  const  dayOnDate = getWeekDayOfDate(eStart);
  return days.count(d => d >= currentDay)
}
 
const defineRemainsDaysOfEndWeek = (eEnd, days) => {
  const dayOnDate = getWeekDayOfDate(eEnd);
  return days.count(d => d <= currentDay)
}

const calcDaysOfWeekCount = (eStart, eEnd, stepInfo) => {
  return defineRemainsDaysOfStartWeek(eStart, stepInfo)
  + defineRemainsDaysOfEndWeek(eEnd, stepInfo)
  + calcWeeksCout(eStart, eEnd, true) * stepInfo.length
}

export const calcEventSteps = (
  eType,
  eStart,
  eEnd,
  stepInfo) => {
    if(isEventDateType(eType)) {
      switch (eType) {
        case EVENT_WEEK_TYPE: 
          return calcWeeksCout(eStart, eEnd) / stepInfo
        case EVENT_WEEKDAY_TYPE:
          return calcDaysOfWeekCount(eStart, eEnd, stepInfo)
        case EVENT_MONTH_TYPE:
          return calcMonthsCount(eStart, eEnd) / stepInfo
      }
    } else {
      return (eEnd - eStart) / stepInfo
    }
  }

export const minutesToTime = (n) => `0${n / 60 ^ 0}`.slice(-2) + ':' + ('0' + n % 60).slice(-2)