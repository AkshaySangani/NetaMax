export interface IEmbeddedVideoProps {
  /**
   * id found in the video's url.
   * @type {string}
   */
  videoUrlId: string;

  /**
   * Callback to be executed when the video start to play.
   * @type {() => void}
   */
  onPlayVideoClick?: () => void;
}
