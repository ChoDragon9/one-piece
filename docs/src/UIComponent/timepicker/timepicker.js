const HOURS_OPTION = Array.from({length: 24}, (_value, index) => index);
const MINUTES_OPTION = Array.from({length: 6}, (_value, index) => index * 10);

const setTime = ({baseDate, hours = 0, minutes = 0}) => {
  const date = new Date(baseDate);
  date.setMilliseconds(0);
  date.setMinutes(minutes);
  date.setHours(hours);
  return date;
};

const filterDate = ({options, minTime, maxTime}) => {
  return options.filter(optionDate => {
    if (minTime && optionDate < minTime) {
      return false;
    }
    if (maxTime && optionDate > maxTime) {
      return false;
    }
    return true;
  })
}

const toTimeOptions = ({baseDate = new Date(), minTime, maxTime} = {}) => {
  return {
    hours: null,
    minutes: null,
    get hoursOptions() {
      const options = HOURS_OPTION
        .map((hours) => {
          return setTime({
            baseDate,
            hours
          })
        })
      return filterDate({options, minTime, maxTime})
    },
    get minutesOptions() {
      const options = MINUTES_OPTION
        .map((minutes) => {
          return setTime({
            baseDate,
            minutes,
            hours: this.hours,
          })
        });
      return filterDate({options, minTime, maxTime})
    }
  }
};
