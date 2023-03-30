import { RootState } from "state/store";

import { INode } from "./INode";

/**
 * Selector to get the node products.
 * @param {RootState} state the root state
 * @returns {INode[]} the nodes products.
 */
export const selectAllNodes = (state: RootState): INode[] => state.node.nodeItems;

/**
 * Selector to get the isLoadingSalesSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingSalesSection state
 */
export const selectIsLoadingNodeSection = (state: RootState): boolean =>
  state.node.isLoadingNodeSection;

/**
 * Selector to get the selectedNode state from the state.
 * @param {RootState} state the root state
 * @returns {INode} the selectedNode state
 */
export const selectSelectedNode = (state: RootState): INode | undefined => state.node.selectedNode;
