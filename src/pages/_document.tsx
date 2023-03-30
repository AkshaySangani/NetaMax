import Document, { Head, Html, Main, NextScript } from "next/document";
import { appConfig } from "utils/appConfig";
import theme from "utils/theme";

import { ColorModeScript } from "@chakra-ui/react";

/**
 * Document class
 * @class
 */
class MyDocument extends Document {
  /**
   * Render method
   * @method
   * @returns {JSX.Element}
   **/
  render(): JSX.Element {
    return (
      <Html lang={appConfig.locale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@400;700&family=Manrope:wght@400;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
