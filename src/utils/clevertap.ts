import { ITrackerIdentifyProperties } from "./tracker";

const clevertapKey = process.env.NEXT_PUBLIC_CLEVERTAP_KEY;

/**
 * Identify a user with Clevertap.
 * @returns {void}
 */
export const initClevertap = (): void => {
  if (clevertapKey) {
    import("clevertap-web-sdk").then((clevertap) => {
      clevertap.privacy.push({ optOut: false }); // Set the flag to true, if the user of the device opts out of sharing their data
      clevertap.privacy.push({ useIP: true });
      clevertap.default.init(clevertapKey, "us1");
      clevertap.default.spa = true;
    });
  }
};

/**
 * performs the optin in for push notifications
 * @returns {void}
 */
export const clevertapPushNotificationsOptIn = (): void => {
  import("clevertap-web-sdk").then((clevertap) => {
    clevertap.notifications.push({
      titleText: "¿Quisieras que te notifiquemos con nuestras promociones y nuevos productos?",
      bodyText: "Prometemos enviarle solo contenido relevante",
      okButtonText: "Si!",
      rejectButtonText: "No gracias",
      okButtonColor: "#f28046",
      serviceWorkerPath: "/clevertap_sw.js",
    });
  });
};

/**
 * Identify a user with Clevertap.
 * @param {string|null} userId the user id.
 * @param {ITrackerIdentifyProperties} userProperties the traits to identify the user with.
 * @returns {void} does the identify
 */
export const identifyClevertap = (
  userId?: string | null,
  userProperties?: ITrackerIdentifyProperties
): void => {
  let Site = {};
  if (userProperties) {
    if (userProperties.phone && userProperties.name) {
      Site = {
        Identity: userId,
        Phone: `+${userProperties.phone}`,
        Name: userProperties.name,
        "MSG-email": true,
        "MSG-push": true,
        "MSG-sms": true,
        "MSG-whatsapp": true,
      };
    } else if (userProperties.phone) {
      Site = {
        Identity: userId,
        Phone: `+${userProperties.phone}`,
        "MSG-email": true,
        "MSG-push": true,
        "MSG-sms": true,
        "MSG-whatsapp": true,
      };
    } else if (userProperties.name) {
      Site = {
        Identity: userId,
        Name: userProperties.name,
        "MSG-email": true, // Disable email notifications
        "MSG-push": true, // Enable push notifications
        "MSG-sms": true, // Enable sms notifications
        "MSG-whatsapp": true, // Enable WhatsApp notifications
      };
    }
    import("clevertap-web-sdk").then((clevertap) => {
      clevertap.onUserLogin.push({ Site: Site });
    });
    clevertapPushNotificationsOptIn();
  }
};
/**
 * Modify the properties of an exiting user in Clevertap.
 * @param {ITrackerIdentifyProperties} propertiesToUpdate the new traits of the user .
 * @returns {void} does the identify
 */
export const cleverTapModifyUserProperties = (
  propertiesToUpdate: ITrackerIdentifyProperties
): void => {
  import("clevertap-web-sdk").then((clevertap) => {
    clevertap.profile.push({
      Site: propertiesToUpdate,
    });
  });
};
