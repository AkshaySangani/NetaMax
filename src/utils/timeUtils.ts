/**
 * Helper to transform second in hours
 * @param {number} seconds count down
 * @returns {string} the countdown time formatted.
 */
export const secondsToString = (seconds: number): string => {
  let hour = Math.floor(seconds / 3600);
  hour = hour < 10 ? 0 + hour : hour;
  let minute = Math.floor((seconds / 60) % 60);
  minute = minute < 10 ? 0 + minute : minute;
  let second = seconds % 60;
  second = second < 10 ? 0 + second : second;

  return hour + "h " + minute + "m " + second + "s";
};

/**
 * Helper to transform strings in seconds
 * @param {string} timeInString time in string
 * @returns {number} the countdown time in seconds.
 */
export const stringToSeconds = (timeInString: string): number => {
  if (!timeInString) return 0;
  const time = timeInString.split(":");

  if (time && time.length === 3) {
    return Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2]);
  } else return 0;
};

/**
 * Helper to transform second in hours fixing the 0 hours text to 1 hour
 * @param {number} seconds count down
 * @returns {string} the countdown time formatted.
 */
export const secondsToStringHour = (seconds: number): string => {
  let hour = Math.floor(seconds / 3600);
  hour = hour < 10 ? 0 + hour : hour;

  if (hour === 0) {
    return "1 hora";
  }
  return hour + " horas";
};
