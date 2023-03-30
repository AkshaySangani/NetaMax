import { setDeviceId } from "dataflows/Auth/AuthSlice";
import { store } from "state/store";

import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

/**
 * Gets the device ID
 * @returns {string} the device ID
 */
export const generateDeviceId = async (): Promise<string> => {
  const state = store.getState();
  const deviceId = state.auth.deviceId;
  if (deviceId) return deviceId;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const fpPromise = FingerprintJS.load({ apiKey: process.env.NEXT_PUBLIC_FINGERPRINT_KEY! });
  const fp = await fpPromise;
  const result = await fp.get();

  // This is the visitor identifier:
  const visitorId = result.visitorId;

  store.dispatch(setDeviceId(visitorId));

  return visitorId;
};
