export const convertToSeconds = (time) => {
  const [hours, minutes] = time.split(":");
  const totalSeconds = +hours * 60 * 60 + +minutes * 60;
  return totalSeconds;
};

export const convertFromSeconds = (value) => {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    return hours+':'+minutes
};
