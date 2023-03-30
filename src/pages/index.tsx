import { ReactElement } from "react";

import { HomeContainer } from "containers/Home/HomeContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";

/**
 * The home page of Neta.
 * @returns {ReactElement} The home page.
 */
const Home = (): ReactElement => {
  return <HomeContainer />;
};

Home.Layout = LayoutContainer;

export default Home;
