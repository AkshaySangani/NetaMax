import { ReactElement } from "react";

export interface INotificationProps {
  /**
   * The message from Notification Component
   * @type {string}
   */
  message: string;
  /**
   * The backgroundColor from Notification Component
   * @type {string}
   */
  backgroundColor?: string;
  /**
   * The delayTime from Notification Component
   * @type {number}
   */
  delayTime?: number;
  /**
   * The icon from Notification Component
   * @type {ReactElement}
   */
  icon?: ReactElement;
}
