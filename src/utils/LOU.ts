import { ITrackerIdentifyProperties } from "./tracker";

/**
 * Identify a user with LOU.
 * @param {string|null} userId the user id.
 * @param {ITrackerIdentifyProperties} userProperties the traits to identify the user with.
 * @returns {void} does the identify
 */
export const identifyLOU = (
  userId?: string | null,
  userProperties?: ITrackerIdentifyProperties
): void => {
  const Global: any = global;
  Global.LOU.identify(userId, userProperties);
};
