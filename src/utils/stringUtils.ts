/**
 * Round distance up
 * @param {string} distance the store distance
 * @returns {string} the distance rounded
 */
export const roundDistance = (distance: string): string => {
  const distanceRounded = Math.ceil(parseFloat(distance));
  if (distanceRounded === 1) return `${distanceRounded} minuto`;
  else return `${distanceRounded} minutos`;
};

/**
 * Split host from shop name
 * @param {string} hosts the current shop's hosts
 * @returns {string | undefined} the shop's host formatted.
 */
export const splitHost = (hosts: string): string | undefined => {
  return hosts.split(".")[0];
};

/**
 * formatNameItem format string
 * @param {message} message to string
 * @returns {fullMesage} message formated
 */
export const formatNameItem = (message: string): string => {
  const messageFormat = message.slice(0, 23);
  const pointsToMore = "...";
  const fullMessage = messageFormat + pointsToMore;
  return fullMessage;
};
