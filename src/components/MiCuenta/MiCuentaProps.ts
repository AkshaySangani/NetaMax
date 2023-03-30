export interface IMiCuentaProps {
  /**
   * Handle the open login flow.
   * @type {() => void}
   */
  onOpenLoginFlow: () => void;
  /**
   * isAmplitudeInitialized flag.
   * @type {boolean}
   */
  isAmplitudeInitialized: boolean;
  /**
   * isSegmentInitialized flag.
   * @type {boolean}
   */
  isSegmentInitialized: boolean;
  /**
   * isSegmentNodeInitialized flag.
   * @type {boolean}
   */
  isSegmentNodeInitialized: boolean;
}
