export interface IChallengeModalProps {
  /**
   * indicates if the modal is open.
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * function when clicking close modal icon.
   * @type {() => void}
   */
  onClose: () => void;

  /**
   * function when clicking the modal button.
   * @type {() => void}
   */
  onAccept: () => void;
}
