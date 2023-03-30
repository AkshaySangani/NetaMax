export interface IDatePickerProps {
  /**
   * Callback to date change
   * @type {(date: Date) => void}
   */
  onDateChange: (date: Date) => void;

  /**
   * Current date
   * @type {Date}
   */
  currentDate?: Date;
}
