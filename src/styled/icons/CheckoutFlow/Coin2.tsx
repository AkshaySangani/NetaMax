import { ReactElement } from "react";

/**
 * A coin icon
 * @param {any} props props
 * @returns {ReactElement} The image.
 */
export default function Coin2(props: {
  width?: string;
  height?: string;
  opacity?: string;
  transform?: string;
}): ReactElement {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2564_22766)">
        <path
          d="M17.9376 8.91035C17.1882 6.4637 15.1398 4.11425 12.2245 2.69964C9.30919 1.28503 6.20917 1.15699 3.85554 2.10109L1.28822 3.52496L0.430413 5.35762C-1.05015 8.93966 1.39812 13.5568 6.02601 15.7952C10.6539 18.0336 15.7458 17.0602 17.5774 13.6478L18.452 11.8275L17.9376 8.91035Z"
          fill="url(#paint0_linear_2564_22766)"
        />
        <path
          d="M18.2887 11.9694C16.6204 15.4913 11.4583 16.5048 6.7587 14.2325C2.05907 11.9602 -0.399878 7.26126 1.26384 3.74247C2.92756 0.22369 8.09273 -0.792914 12.7939 1.47941C17.495 3.75173 19.9555 8.44602 18.2887 11.9694Z"
          fill="url(#paint1_linear_2564_22766)"
        />
        <path
          d="M11.7773 15.624C10.0196 15.6064 8.2877 15.1943 6.7068 14.4176C4.41728 13.3084 2.57802 11.5822 1.5401 9.55672C0.502186 7.53122 0.381605 5.41779 1.2211 3.64683C2.30023 1.3637 4.79428 0 7.89124 0C9.64897 0.0175673 11.3809 0.429614 12.9618 1.20635C17.7194 3.49719 20.1723 8.33494 18.449 11.9818C17.3684 14.2603 14.8743 15.624 11.7773 15.624ZM7.89124 0.283852C4.90418 0.283852 2.50628 1.58585 1.47294 3.7687C0.673137 5.4579 0.784562 7.47105 1.7889 9.42559C2.79324 11.3801 4.58823 13.0801 6.82586 14.1631C8.36923 14.9211 10.0599 15.3231 11.7758 15.3401C14.7613 15.3401 17.1608 14.0381 18.1941 11.8553C19.8517 8.35345 17.4493 3.69002 12.8397 1.46089C11.2968 0.703101 9.6066 0.30108 7.89124 0.283852Z"
          fill="url(#paint2_linear_2564_22766)"
        />
        <path
          d="M11.4613 14.0319C10.0381 14.0176 8.6357 13.684 7.35545 13.0554C5.51467 12.1653 4.03869 10.7862 3.1992 9.17259C2.3597 7.55898 2.25439 5.87441 2.91988 4.46751C3.77311 2.6657 5.75125 1.59047 8.21325 1.59047C9.63583 1.60674 11.0371 1.94183 12.3161 2.57159C14.1569 3.4617 15.6328 4.84083 16.4723 6.4529C17.3118 8.06497 17.4171 9.75109 16.7517 11.1595C15.8984 12.9567 13.9203 14.0319 11.4613 14.0319ZM8.2102 1.87432C5.85962 1.87432 3.97458 2.88938 3.17325 4.58938C2.54592 5.91451 2.64361 7.49573 3.44799 9.04147C4.25238 10.5872 5.6902 11.9355 7.47603 12.7994C8.71823 13.4111 10.0796 13.7357 11.4613 13.7496C13.8119 13.7496 15.6969 12.7346 16.4983 11.0346C17.1256 9.70943 17.0279 8.12822 16.2251 6.58248C15.4222 5.03675 13.9813 3.68847 12.1955 2.82459C10.9533 2.21287 9.59195 1.88826 8.2102 1.87432Z"
          fill="url(#paint3_linear_2564_22766)"
        />
        <path
          d="M9.15352 4.59863L8.23771 6.53311L7.89123 6.36651C7.65588 6.23502 7.40216 6.14036 7.13874 6.08575C7.07273 6.08192 7.00729 6.09986 6.95224 6.13686C6.89719 6.17386 6.85551 6.22792 6.83347 6.29092C6.80599 6.34351 6.79345 6.40276 6.79722 6.46212C6.80099 6.52147 6.82093 6.57861 6.85484 6.62722C6.95903 6.76312 7.09628 6.86942 7.25321 6.93575C7.57985 7.0931 7.8373 7.14452 8.02555 7.09001C8.21379 7.03551 8.63304 6.81079 9.28326 6.41588C9.66883 6.16647 10.0736 5.94877 10.4937 5.76488C10.7951 5.66308 11.1147 5.62784 11.4308 5.66152C11.8666 5.70511 12.2908 5.82903 12.6824 6.02712C13.4242 6.38708 13.9284 6.83496 14.1951 7.37077C14.4617 7.90659 14.4871 8.53085 14.2714 9.24355L15.0544 9.62304L14.6331 10.5132L13.8241 10.1213C13.5278 10.6086 13.0745 10.978 12.5405 11.1672C11.9849 11.3729 11.2431 11.2511 10.3151 10.8016L9.90754 10.6057L10.8233 8.67123L11.3331 8.91651C11.6737 9.10078 12.0316 9.25013 12.4016 9.36233C12.4716 9.37743 12.5447 9.36638 12.6073 9.33121C12.6699 9.29604 12.7177 9.23914 12.742 9.17105C12.7736 9.11627 12.7903 9.05398 12.7903 8.99055C12.7903 8.92713 12.7736 8.86484 12.742 8.81007C12.6484 8.67605 12.5185 8.57214 12.368 8.51079C12.0376 8.33498 11.6862 8.20278 11.3225 8.11742C11.0925 8.08039 10.775 8.18324 10.37 8.42595C9.9014 8.71178 9.41786 8.97183 8.92151 9.20499C8.58586 9.33451 8.22714 9.39178 7.86833 9.37313C7.42906 9.35593 6.99836 9.245 6.60451 9.04764C5.98329 8.73911 5.57118 8.34727 5.37275 7.84899C5.17432 7.35072 5.18654 6.75217 5.41549 6.05798L4.74542 5.73402L5.1667 4.84391L5.83218 5.16478C6.19698 4.60634 6.62436 4.26542 7.11279 4.13738C7.60122 4.00934 8.15529 4.09264 8.7704 4.39037C8.85588 4.43203 8.98409 4.50145 9.15352 4.59863Z"
          fill="url(#paint4_linear_2564_22766)"
        />
        <path
          d="M9.49697 3.87514L8.58116 5.80962L8.2362 5.64301C8.00031 5.51119 7.74612 5.41602 7.48218 5.3607C7.41618 5.35688 7.35074 5.37482 7.29569 5.41182C7.24063 5.44882 7.19895 5.50288 7.17691 5.56588C7.1491 5.61837 7.13636 5.67768 7.14013 5.73711C7.14391 5.79653 7.16405 5.85371 7.19829 5.90218C7.30207 6.03848 7.43944 6.14487 7.59666 6.21071C7.9233 6.36806 8.18074 6.41948 8.36899 6.36497C8.55724 6.31046 8.97597 6.08524 9.62518 5.68929C10.0118 5.44071 10.417 5.22305 10.8371 5.03829C11.138 4.93638 11.4573 4.90165 11.7728 4.93648C12.2084 4.98275 12.6318 5.11038 13.0213 5.31288C13.7652 5.67181 14.2694 6.11969 14.5339 6.65653C14.7985 7.19338 14.8239 7.81763 14.6102 8.52931L15.3948 8.9088L14.972 9.78811L14.1615 9.39628C13.8663 9.8842 13.4125 10.2534 12.8778 10.4407C12.3222 10.6463 11.5804 10.5255 10.6524 10.0781L10.2403 9.88067L11.1561 7.94619L11.6659 8.19301C12.0069 8.3763 12.3647 8.52561 12.7344 8.63884C12.8047 8.6523 12.8774 8.64037 12.9399 8.60512C13.0024 8.56987 13.0507 8.51355 13.0763 8.44601C13.1075 8.39108 13.1239 8.32885 13.1239 8.26552C13.1239 8.20218 13.1075 8.13995 13.0763 8.08503C12.9826 7.95145 12.8527 7.84807 12.7023 7.7873C12.372 7.61095 12.0206 7.47822 11.6568 7.39238C11.4268 7.35638 11.1093 7.45923 10.7043 7.70091C10.2356 7.98515 9.75148 8.24266 9.25428 8.47223C8.91919 8.6019 8.56095 8.65918 8.20262 8.64038C7.76322 8.62411 7.33232 8.51313 6.9388 8.31488C6.31605 8.01458 5.90546 7.61503 5.70704 7.11624C5.50861 6.61745 5.52235 6.02096 5.74825 5.32677L5.08429 5.0059L5.50861 4.11425L6.1741 4.43666C6.53737 3.87822 6.96628 3.53575 7.45471 3.40771C7.94314 3.27967 8.49568 3.36452 9.1108 3.66071C9.19933 3.70699 9.32449 3.77795 9.49697 3.87514Z"
          fill="url(#paint5_linear_2564_22766)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2564_22766"
          x1="0.320974"
          y1="4.90952"
          x2="18.5356"
          y2="13.6831"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB6E10" />
          <stop offset="0.02" stopColor="#CB6E10" />
          <stop offset="0.03" stopColor="#D37812" />
          <stop offset="0.04" stopColor="#DF8314" />
          <stop offset="0.05" stopColor="#DA7C12" />
          <stop offset="0.06" stopColor="#DA7C12" />
          <stop offset="0.07" stopColor="#E89317" />
          <stop offset="0.08" stopColor="#CC7010" />
          <stop offset="0.1" stopColor="#D27712" />
          <stop offset="0.11" stopColor="#DC8114" />
          <stop offset="0.12" stopColor="#CE6F10" />
          <stop offset="0.14" stopColor="#DB7F14" />
          <stop offset="0.15" stopColor="#E08615" />
          <stop offset="0.16" stopColor="#CD6D10" />
          <stop offset="0.19" stopColor="#CD6D10" />
          <stop offset="0.21" stopColor="#DD8214" />
          <stop offset="0.22" stopColor="#CD6D10" />
          <stop offset="0.25" stopColor="#CD6D10" />
          <stop offset="0.27" stopColor="#E07C15" />
          <stop offset="0.28" stopColor="#D46A12" />
          <stop offset="0.29" stopColor="#D36812" />
          <stop offset="0.32" stopColor="#D97314" />
          <stop offset="0.33" stopColor="#E07C15" />
          <stop offset="0.34" stopColor="#D46A12" />
          <stop offset="0.35" stopColor="#D36812" />
          <stop offset="0.37" stopColor="#D36812" />
          <stop offset="0.38" stopColor="#D97314" />
          <stop offset="0.39" stopColor="#E07C15" />
          <stop offset="0.4" stopColor="#D46A12" />
          <stop offset="0.41" stopColor="#D36812" />
          <stop offset="0.44" stopColor="#D97314" />
          <stop offset="0.45" stopColor="#F7A31B" />
          <stop offset="0.46" stopColor="#D46A12" />
          <stop offset="0.47" stopColor="#D36812" />
          <stop offset="0.5" stopColor="#D97314" />
          <stop offset="0.51" stopColor="#FFB01D" />
          <stop offset="0.52" stopColor="#E07C15" />
          <stop offset="0.53" stopColor="#D87113" />
          <stop offset="0.54" stopColor="#D46A12" />
          <stop offset="0.55" stopColor="#D36812" />
          <stop offset="0.57" stopColor="#FFB01D" />
          <stop offset="0.58" stopColor="#C1680A" />
          <stop offset="0.59" stopColor="#A84C02" />
          <stop offset="0.6" stopColor="#A34500" />
          <stop offset="0.61" stopColor="#A14300" />
          <stop offset="0.62" stopColor="#CA730D" />
          <stop offset="0.63" stopColor="#BF7315" />
          <stop offset="0.64" stopColor="#7A310D" />
          <stop offset="0.65" stopColor="#70290C" />
          <stop offset="0.67" stopColor="#722C0C" />
          <stop offset="0.68" stopColor="#AB6213" />
          <stop offset="0.69" stopColor="#C57916" />
          <stop offset="0.7" stopColor="#823B0E" />
          <stop offset="0.71" stopColor="#77300D" />
          <stop offset="0.72" stopColor="#702A0C" />
          <stop offset="0.74" stopColor="#7D360E" />
          <stop offset="0.75" stopColor="#F8AA1C" />
          <stop offset="0.76" stopColor="#BF7415" />
          <stop offset="0.77" stopColor="#A15812" />
          <stop offset="0.78" stopColor="#7A340D" />
          <stop offset="0.79" stopColor="#712B0C" />
          <stop offset="0.8" stopColor="#7D360E" />
          <stop offset="0.81" stopColor="#CE8217" />
          <stop offset="0.82" stopColor="#A85106" />
          <stop offset="0.83" stopColor="#923A00" />
          <stop offset="0.84" stopColor="#9A5000" />
          <stop offset="0.86" stopColor="#FFB01D" />
          <stop offset="0.87" stopColor="#B1580E" />
          <stop offset="0.88" stopColor="#AE550D" />
          <stop offset="0.89" stopColor="#B65E0F" />
          <stop offset="0.9" stopColor="#FFB01D" />
          <stop offset="0.91" stopColor="#B0570D" />
          <stop offset="0.92" stopColor="#AE550D" />
          <stop offset="0.93" stopColor="#AE550D" />
          <stop offset="0.94" stopColor="#C77011" />
          <stop offset="0.95" stopColor="#B0570D" />
          <stop offset="1" stopColor="#AE550D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2564_22766"
          x1="3.3059"
          y1="0.0474165"
          x2="21.7732"
          y2="21.8597"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBC04" />
          <stop offset="0.06" stopColor="#FFC107" />
          <stop offset="0.13" stopColor="#FFD010" />
          <stop offset="0.2" stopColor="#FFE81E" />
          <stop offset="0.26" stopColor="#FFFC29" />
          <stop offset="0.31" stopColor="#FFE019" />
          <stop offset="0.35" stopColor="#FFCC0D" />
          <stop offset="0.4" stopColor="#FFC006" />
          <stop offset="0.44" stopColor="#FFBC04" />
          <stop offset="0.6" stopColor="#FFB404" />
          <stop offset="0.65" stopColor="#D88D05" />
          <stop offset="0.74" stopColor="#9B5007" />
          <stop offset="0.76" stopColor="#9F5407" />
          <stop offset="0.78" stopColor="#AA5F07" />
          <stop offset="0.8" stopColor="#BD7107" />
          <stop offset="0.82" stopColor="#E39606" />
          <stop offset="0.92" stopColor="#FFBC04" />
          <stop offset="1" stopColor="#E99602" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2564_22766"
          x1="1.21856"
          y1="3.64513"
          x2="18.5135"
          y2="11.8329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB234" />
          <stop offset="0.08" stopColor="#FFD53B" />
          <stop offset="0.18" stopColor="#FBAB35" />
          <stop offset="0.2" stopColor="#EA9033" />
          <stop offset="0.22" stopColor="#DE7D31" />
          <stop offset="0.24" stopColor="#D7722F" />
          <stop offset="0.26" stopColor="#D56E2F" />
          <stop offset="0.36" stopColor="#F0AB39" />
          <stop offset="0.4" stopColor="#FFCD3E" />
          <stop offset="0.56" stopColor="#FFD53B" />
          <stop offset="0.62" stopColor="#FFD93E" />
          <stop offset="0.67" stopColor="#FFE546" />
          <stop offset="0.73" stopColor="#FFF953" />
          <stop offset="0.74" stopColor="#FFFF57" />
          <stop offset="0.83" stopColor="#FFE948" />
          <stop offset="0.92" stopColor="#FFDA3E" />
          <stop offset="1" stopColor="#FFD53B" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2564_22766"
          x1="2.9148"
          y1="4.46543"
          x2="16.8025"
          y2="11.0401"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB6E10" />
          <stop offset="0.06" stopColor="#CF7311" />
          <stop offset="0.13" stopColor="#DB8214" />
          <stop offset="0.2" stopColor="#EE9A19" />
          <stop offset="0.26" stopColor="#FDAE1D" />
          <stop offset="0.31" stopColor="#E79217" />
          <stop offset="0.35" stopColor="#D87E13" />
          <stop offset="0.4" stopColor="#CE7211" />
          <stop offset="0.44" stopColor="#CB6E10" />
          <stop offset="0.6" stopColor="#D36812" />
          <stop offset="0.65" stopColor="#AB4F10" />
          <stop offset="0.74" stopColor="#6E280C" />
          <stop offset="0.76" stopColor="#722B0C" />
          <stop offset="0.78" stopColor="#7D340D" />
          <stop offset="0.8" stopColor="#90420E" />
          <stop offset="0.82" stopColor="#A9550F" />
          <stop offset="0.92" stopColor="#CB6E10" />
          <stop offset="1" stopColor="#AE550D" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2564_22766"
          x1="3187.33"
          y1="2852.86"
          x2="3927.31"
          y2="2852.86"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB6E10" />
          <stop offset="0.06" stopColor="#CF7311" />
          <stop offset="0.13" stopColor="#DB8214" />
          <stop offset="0.2" stopColor="#EE9A19" />
          <stop offset="0.26" stopColor="#FDAE1D" />
          <stop offset="0.31" stopColor="#E79217" />
          <stop offset="0.35" stopColor="#D87E13" />
          <stop offset="0.4" stopColor="#CE7211" />
          <stop offset="0.44" stopColor="#CB6E10" />
          <stop offset="0.6" stopColor="#D36812" />
          <stop offset="0.65" stopColor="#AB4F10" />
          <stop offset="0.74" stopColor="#6E280C" />
          <stop offset="0.76" stopColor="#722B0C" />
          <stop offset="0.78" stopColor="#7D340D" />
          <stop offset="0.8" stopColor="#90420E" />
          <stop offset="0.82" stopColor="#A9550F" />
          <stop offset="0.92" stopColor="#CB6E10" />
          <stop offset="1" stopColor="#AE550D" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2564_22766"
          x1="6.18395"
          y1="11.6909"
          x2="18.7895"
          y2="-2.70295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE802" />
          <stop offset="0.09" stopColor="#FFEC07" />
          <stop offset="0.2" stopColor="#FFF616" />
          <stop offset="0.26" stopColor="#FFFF22" />
          <stop offset="0.31" stopColor="#FFF312" />
          <stop offset="0.38" stopColor="#FFEB06" />
          <stop offset="0.44" stopColor="#FFE802" />
          <stop offset="0.6" stopColor="#FFDC02" />
          <stop offset="0.67" stopColor="#D58903" />
          <stop offset="0.74" stopColor="#B54B04" />
          <stop offset="0.75" stopColor="#B84F04" />
          <stop offset="0.77" stopColor="#C15A04" />
          <stop offset="0.79" stopColor="#CF6D03" />
          <stop offset="0.81" stopColor="#E48803" />
          <stop offset="0.82" stopColor="#FFAC02" />
          <stop offset="0.92" stopColor="#FFE802" />
          <stop offset="1" stopColor="#FFAC00" />
        </linearGradient>
        <clipPath id="clip0_2564_22766">
          <rect width="19" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
