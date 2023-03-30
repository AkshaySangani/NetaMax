import React, { ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { LegalAgeModal } from "components/Layout/LegalAgeModal/LegalAgeModal";
import { HOME_IS_YOUNGER_USER, TrackerApp } from "constants/amplitudeConstants";
import { LEGAL_AGE_DESCRIPTION, LEGAL_AGE_TITLE } from "constants/legalAgeConstants";
import { selectIsUserUnderLegalAge } from "dataflows/LegalAge/ILegalAgeSelectors";
import { setLegalAge } from "dataflows/LegalAge/LegalAgeSlice";
import { trackEvent } from "utils/tracker";

/**
 * The legal age container.
 * @returns {ReactElement} The legal age container.
 */
export const LegalAgeContainer = (): ReactElement => {
  const userIsUnderLegalAge = useSelector(selectIsUserUnderLegalAge);
  const dispatch = useDispatch();

  /**
   * The legal age container.
   * @param {boolean} isUnderLegalAge param.
   * @returns {void} The legal age container.
   */
  const handleClickModal = (isUnderLegalAge: boolean): void => {
    dispatch(setLegalAge(isUnderLegalAge));

    trackEvent(HOME_IS_YOUNGER_USER, [TrackerApp.Amplitude, TrackerApp.Segment], {
      isUnderAge: isUnderLegalAge,
    });
  };

  return (
    <LegalAgeModal
      isOpen={userIsUnderLegalAge === undefined}
      title={LEGAL_AGE_TITLE}
      description={LEGAL_AGE_DESCRIPTION}
      onClickModal={handleClickModal}
    />
  );
};
