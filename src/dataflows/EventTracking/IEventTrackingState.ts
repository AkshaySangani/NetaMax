export interface IEventTrackingState {
  /**
   *  flag to identify if the amplitude instance is initialized
   * @type {boolean}
   */
  isAmplitudeInitialized: boolean;

  /**
   * flag to identify if the segment Instance is initialized
   * @type {boolean}
   */
  isSegmentInitialized: boolean;

  /**
   * flag to identify if the segmentNodeInstance is initialized
   * @type {boolean}
   **/
  isSegmentNodeInitialized: boolean;
}
