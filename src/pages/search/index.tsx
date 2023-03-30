import { ReactElement } from "react";

import { SearchContainer } from "containers/Search/SearchContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { useRouter } from "next/router";
/**
 * The search page of Neta.
 * @returns {ReactElement} The search page.
 */
const Search = (): ReactElement => {
  const router = useRouter();
  const { q } = router.query;

  return <SearchContainer search={q as string} />;
};

Search.Layout = LayoutContainer;

export default Search;
