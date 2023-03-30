import { ISummary } from "../ISummary";

export interface ISummaryState {
  /**
   * Summaries List
   * @type {ISummary}
   */
  summary: ISummary;

  /**
   * Is Loading Summaries
   * @type {boolean}
   */
  isLoadingSummary: boolean;

  /**
   * Current Summary
   * @type {ISummary}
   */
  isSummary?: ISummary;
}
