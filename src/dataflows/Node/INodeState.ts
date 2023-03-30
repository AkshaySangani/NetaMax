import { INode } from "./INode";

export interface INodeState {
  /**
   * The array of Nodes in the sales section.
   * @type {INode[]}
   */
  nodeItems: INode[];

  /**
   * The selected node.
   * @type {INode}
   */
  selectedNode?: INode;

  /**
   * Indicates if the node are loading.
   * @type {boolean}
   */
  isLoadingNodeSection: boolean;
}
