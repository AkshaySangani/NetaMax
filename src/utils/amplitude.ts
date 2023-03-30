import amplitude from "amplitude-js";
import { ITrackerIdentifyProperties } from "./tracker";
import { store } from "state/store";

/**
 * Inits the amplitude library
 * @param {string} userId User Id.
 * @returns {void}
 */
export const initAmplitude = (): void => {
  if (process.browser) {
    const {
      auth: { customer },
    } = store.getState();

    amplitude.getInstance()?.init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY || "", customer?.id, {
      // optional configuration options
      saveEvents: true,
      includeUtm: true,
      includeReferrer: true,
      includeFbclid: true,
      includeGclid: true,
      unsetParamsReferrerOnNewSession: true,
    });
  }
};

/**
 * Sets the amplitude user device.
 * @param {string} installationToken - the installation token
 * @returns {void}
 */
export const setAmplitudeUserDevice = (installationToken: string): void => {
  if (process.browser) {
    amplitude.getInstance().setDeviceId(installationToken);
  }
};

/**
 * Sets the amplitude user id.
 * @param {string} userId - the user id
 * @return {void}
 */
export const setAmplitudeUserId = (userId: string): void => {
  if (process.browser) {
    amplitude.getInstance().setUserId(userId);
  }
};

/**
 * Sets the amplitude user properties.
 * @param {any} properties - the user properties
 * @return {void}
 */
export const setAmplitudeUserProperties = (properties: Record<string, unknown>): void => {
  if (process.browser) {
    amplitude.getInstance().setUserProperties(properties);
  }
};

/**
 * Sends an event to amplitude.
 * @param {string} eventType type of event
 * @param {any} eventProperties the event properties
 * @return {void}
 */
export const sendAmplitudeData = (
  eventType: string,
  eventProperties?: Record<string, unknown>
): void => {
  if (process.browser) {
    amplitude.getInstance().logEvent(eventType, eventProperties);
  }
};

/**
 * Identify user with amplitud
 * @param {string |null} userId the user id.
 * @param {ITrackerIdentifyProperties} user_properties the traits to identify the user with.
 * @return {void}
 */
export const identifyAmplitude = (
  userId?: string | null,
  user_properties?: ITrackerIdentifyProperties
): void => {
  if (process.browser) {
    if (userId) {
      amplitude.getInstance().setUserId(userId);
    }
    if (user_properties) {
      if (user_properties.phone && user_properties.name) {
        amplitude.getInstance().setUserProperties(user_properties);
      } else if (user_properties?.phone) {
        amplitude.getInstance().setUserProperties({ phone: user_properties.phone });
      } else if (user_properties?.name) {
        amplitude.getInstance().setUserProperties({ name: user_properties.name });
      }
    }
  }
};
