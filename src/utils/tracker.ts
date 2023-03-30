import { TrackerApp } from "constants/amplitudeConstants";
import { store } from "state/store";

import { identifyAmplitude, sendAmplitudeData } from "./amplitude";
import { identifyClevertap } from "./clevertap";
import { identifyLOU } from "./LOU";
import { identifySegment, sendSegmentEvent } from "./segment";
import { identifySegmentNode, sendSegmentNodeEvent } from "./segmentNode";

export type TrackerObject = {
  position: number;
  isPromoOfTheDay: string;
  isBanner: string;
  isInSearchbar: string;
  isInDetailPage: string;
  isRecommendedDetailPage: string;
  isCategory: string;
  isHomeCategory: string;
  isInSearchDetailPage: string;
  isNode: string;
  isHomeNode: string;
};

export type ITrackerIdentifyProperties = {
  name?: string | undefined;
  phone?: string | undefined;
  currentNetaWallet?: string | undefined;
  referralCode?: string | undefined;
  lastOrderStoreName?: string | undefined;
  lastOrderStoreStatus?: string | undefined;
  lastOrderStoreShippingDaysScheduleId?: string | undefined;
  favoriteStoreName?: string | undefined;
  favoriteStoreStatus?: string | undefined;
  favoriteStoreShippingDaysScheduleId?: string | undefined;
  deleted?: boolean;
};

/**
 * A tracker is a function helper that can be used to track events in multiple apps.
 * @param {string} eventName the name of the event.
 * @param {TrackerApp} apps the apps to track the event in.
 * @param {Record<string, unknown>} eventProperties the properties of the event.
 * @returns {void}
 */
export const trackEvent = (
  eventName: string,
  apps: TrackerApp[],
  eventProperties?: Record<string, unknown>
): void => {
  const {
    auth: { customer },
    store: { store: selectedStore },
  } = store.getState();

  const trackedEvent = {
    customerID: customer?.id,
    storeID: selectedStore?.id,
    storeName: selectedStore?.name,
    ...eventProperties,
  };

  if (apps.includes(TrackerApp.Amplitude)) {
    sendAmplitudeData(eventName, { ...trackedEvent, source: TrackerApp.Amplitude });
  }
  if (apps.includes(TrackerApp.Segment)) {
    sendSegmentEvent(eventName, { ...trackedEvent, source: TrackerApp.Segment });
    sendSegmentNodeEvent(eventName, { ...trackedEvent, source: TrackerApp.Segment });
  }
};

/**
 * Identify users with Segment and Amplitude and Clevertap
 * * Identify user with amplitud
 * @param {string |null} userId the user id.
 * @param {ITrackerIdentifyProperties} user_properties the traits to identify the user with.
 * @returns {Promise<void>} does the identifies
 */
export const identifyUser = async (
  userId: string | null,
  user_properties?: ITrackerIdentifyProperties
): Promise<void> => {
  identifyClevertap(userId, user_properties);
  identifyAmplitude(userId, user_properties);
  identifySegment(userId, user_properties);
  identifySegmentNode(userId, user_properties);
  identifyLOU(userId, user_properties);
};
