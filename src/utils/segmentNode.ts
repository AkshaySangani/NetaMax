import { store } from "state/store";
import { v4 as uuidv4 } from "uuid";
import { ITrackerIdentifyProperties } from "./tracker";
import { Analytics, AnalyticsBrowser, JSONValue } from "@segment/analytics-next";

let anonymousId: string;
let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  const savedAnonId = window.localStorage.getItem("segment_user_id");
  anonymousId = savedAnonId ?? uuidv4();
  if (!savedAnonId) {
    window.localStorage.setItem("segment_user_id", anonymousId);
  }
}

/**
 * Initializes the analytics.
 * @returns {Promise<void>} the promise
 */
export const loadSegmentNodeAnalytics = async (): Promise<Analytics> => {
  const [response] = await AnalyticsBrowser.load({
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_NODE_KEY ?? "",
  });
  analytics = response;
  return response;
};

/**
 * Identify a user with Segment.
 * @param {string|null} userId the user id.
 * @param {ITrackerIdentifyProperties} traits the traits to identify the user with.
 * @returns {void}
 */
export const identifySegmentNode = (
  userId?: string | null,
  traits?: ITrackerIdentifyProperties
): void => {
  let id = userId;
  if (!id) {
    id = anonymousId;
  }
  if (traits) {
    if (traits.phone && traits.name) {
      analytics?.identify(id, traits);
    } else if (traits.phone) {
      analytics?.identify(id, { phone: traits.phone });
    } else if (traits.name) {
      analytics?.identify(id, { name: traits.name });
    }
  } else {
    analytics?.identify(id);
  }
};

/**
 * Sends an event to Segment.
 * @param {string} eventName the name of the event.
 * @param {Record<string, unknown>} properties the properties of the event.
 * @returns {void}
 */
export const sendSegmentNodeEvent = (
  eventName: string,
  properties?: Record<string, unknown>
): void => {
  const {
    auth: { customer },
  } = store.getState();

  if (customer) {
    analytics?.track({
      event: eventName,
      type: "track",
      properties: properties as JSONObject,
      userId: customer.id,
    });
  } else {
    analytics?.track({
      event: eventName,
      type: "track",
      properties: properties as JSONObject,
      anonymousId,
    });
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
type JSONObject = object & {
  [k: string]: JSONValue;
};
