export interface ILegalAgeModalProps {
  /**
   * The isOpen to modal
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * The title to display
   * @type {string}
   */
  title: string;

  /**
   * The description to display
   * @type {string}
   */
  description: string;

  /**
   * The onClickModal to modal
   * @type {() => void}
   */
  onClickModal: (isUserUnderLegalAge: boolean) => void;
}
