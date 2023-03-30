import { IconProps } from "@chakra-ui/icon";

export interface ISplitCardProps {
  /**
   * The title1 for SplitCard
   * @type {String}
   *
   * */
  firstTitle: string;
  /**
   * The subtitle1 for SplitCard
   * @type {String}
   *
   * */
  firstSubtitle?: string;
  /**
   * The icon1 for SplitCard
   * @type {IconProps}
   *
   * */
  firstIcon: IconProps;
  /**
   * The title1 for SplitCard
   * @type {String}
   *
   * */
  secondTitle: string;
  /**
   * The subtitle2 for SplitCard
   * @type {String}
   *
   * */
  secondSubtitle?: string | number;
  /**
   * The icon2 for SplitCard
   * @type {IconProps}
   *
   * */
  secondIcon: IconProps;
  /**
   * The title3 for SplitCard
   * @type {String}
   *
   * */
  thirdTitle: string;
  /**
   * The subtitle3 for SplitCard
   * @type {String}
   *
   * */
  thirdSubtitle: string;
  /**
   * The icon3 for SplitCard
   * @type {IconProps}
   *
   * */
  thirdIcon: IconProps;
}
