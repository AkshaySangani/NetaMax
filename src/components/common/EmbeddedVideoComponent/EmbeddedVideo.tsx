import { ReactElement } from "react";

import YouTube from "react-youtube";

import { screenSizes } from "styled/screen";

import { useMediaQuery } from "@chakra-ui/react";

import { IEmbeddedVideoProps } from "./IEmbeddedVideoProps";

/**
 *  The EmbeddedVideo component.
 * @param {IEmbeddedVideoProps} props The props of the component.
 * @returns {ReactElement} The EmbeddedVideo component.
 */
export const EmbeddedVideo = (props: IEmbeddedVideoProps): ReactElement => {
  const { videoUrlId, onPlayVideoClick } = props;
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.sm}px)`);

  const opts = {
    height: isDesktop ? "390" : "190",
    width: isDesktop ? "640" : "310",
    playerVars: {},
  };

  return (
    <YouTube
      videoId={videoUrlId}
      title="Youtube video"
      opts={opts}
      onPlay={onPlayVideoClick}
      containerStyle={{ height: "100%", top: "100%" }}
    />
  );
};
