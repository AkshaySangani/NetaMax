import { ReactElement } from "react";

interface ICarouselSliderOptions {
  /**
   * Space between each element.
   * @type {number}
   **/
  spaceBetween: number;

  /**
   * Slides per view.
   * @type {number}
   **/
  slidesPerView: number;
}

export interface ICarouselSectionProps {
  /**
   * Section title
   * @type {string}
   */
  title: string;

  /**
   * Carousel title color
   * @type {object}
   */
  titleColor?: string;

  /**
   * Amount of slides per group
   * @type {number}
   */
  slidesPerGroup?: number;

  /**
   * Carousel breakpoints
   * @type {{ [key: string]: Record<string, unknown> }}
   */
  breakpoints: { [key: string]: ICarouselSliderOptions };

  /**
   * Carousel items
   * @type {ReactElement[]}
   **/
  elements: ReactElement[];

  /**
   * Go to choose section detail
   * @type {() => void}
   **/
  onClickSection?: () => void;

  /**
   * Action to be performed when the user swipes the carousel.
   * @type {(index: number) => void}
   **/
  onSlideChange?: (index: number) => void;
}
