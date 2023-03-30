import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { HistorialMonetas } from "components/HistorialMonetas/HistorialMonetas";
import { MAX_CARDS_PER_PAGES } from "constants/historialMonetasConstants";
import { selectGanaDinero } from "dataflows/GanaDinero/GanaDineroSelectors";
import { getCoins } from "dataflows/GanaDinero/GanaDineroThunks";
import {
  selectHistorialMonetasMetadata,
  selectHistorialMonetasRecords,
  selectIsLoadingHistorialMonetas,
} from "dataflows/Monetas/HistorialMonetasSelector";
import { getMonetasHistory } from "dataflows/Monetas/HistorialMonetasThunk";

import { Center, Container } from "@chakra-ui/react";

/**
 * The HistorialMonetasContainer component.
 * @param {HistorialMonetasContainer} props the component props.
 * @returns {ReactElement} the component element.
 */
export const HistorialMonetasContainer = (): ReactElement => {
  const coins = useSelector(selectGanaDinero);
  const monetas = useSelector(selectHistorialMonetasRecords);
  const isLoading = useSelector(selectIsLoadingHistorialMonetas);
  const metadata = useSelector(selectHistorialMonetasMetadata);
  const dispatch = useDispatch();
  const hasMoreMonetas = metadata.totalPages > metadata.currentPage;

  useEffect(() => {
    dispatch(getMonetasHistory({ npp: MAX_CARDS_PER_PAGES, page: metadata.currentPage }));
    dispatch(getCoins());
  }, []);

  /**
   * Action to fetch more monetas history.
   * @returns {void}
   */
  const loadNextPage = () => {
    dispatch(
      getMonetasHistory({
        npp: MAX_CARDS_PER_PAGES,
        page: metadata.currentPage + 1,
      })
    );
  };

  return isLoading ? (
    <Container maxW="container.xl">
      <Center pt="30px">
        <Loader />
      </Center>
    </Container>
  ) : (
    <Container maxW="container.xl" overflow="hidden">
      <HistorialMonetas
        coins={coins}
        monetasHistory={monetas}
        hasMoreMonetas={hasMoreMonetas}
        loadNextPage={loadNextPage}
      />
    </Container>
  );
};
