import { ReactElement } from "react";

/**
 * A coin icon
 * @param {any} props props
 * @returns {ReactElement} The image.
 */
export default function Coin4(props: {
  width?: string;
  height?: string;
  opacity?: string;
  transform?: string;
}): ReactElement {
  return (
    <svg
      width="25"
      height="34"
      viewBox="0 0 25 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2564_22784)">
        <path
          d="M15.0806 2.58408C11.6675 4.49646 8.17123 8.62941 5.81406 14.0188C3.45689 19.4083 2.78655 24.7977 3.69349 28.6382L4.17105 32.2496L7.54031 33.7234C12.1364 35.3711 18.7434 29.9737 22.4851 21.4155C26.2268 12.8572 25.7185 4.31471 21.4073 2.01907L17.7927 0.40303L15.0806 2.58408Z"
          fill="url(#paint0_linear_2564_22784)"
        />
        <path
          d="M17.9241 0.794194C22.4106 2.76979 22.9846 11.3873 19.2079 20.0128C15.4312 28.6382 8.73644 34.0277 4.24993 32.0402C-0.236571 30.0528 -0.806139 21.451 2.97059 12.8256C6.74731 4.20012 13.442 -1.1893 17.9241 0.794194Z"
          fill="url(#paint1_linear_2564_22784)"
        />
        <path
          d="M6.28769 32.6641C5.51657 32.6677 4.75491 32.5109 4.06197 32.2057C-0.647981 30.1195 -1.36652 21.3083 2.4584 12.5604C5.69622 5.16376 11.1773 -0.000440959 15.7908 -0.000440959C16.562 -0.00410008 17.3236 0.152749 18.0166 0.457899C22.7309 2.54413 23.4495 11.3553 19.6245 20.1032C16.3867 27.4959 10.9013 32.6641 6.28769 32.6641ZM15.7908 0.659407C11.5366 0.659407 6.20883 5.77225 3.12874 12.8093C-0.564737 21.2491 -0.00392155 29.6928 4.37743 31.6328C4.972 31.8953 5.62571 32.0305 6.28769 32.0279C10.5464 32.0279 15.8697 26.9151 18.9542 19.8741C22.6433 11.4383 22.0825 2.99456 17.7011 1.05453C17.1078 0.787537 16.4539 0.648233 15.7908 0.647554V0.659407Z"
          fill="url(#paint2_linear_2564_22784)"
        />
        <path
          d="M7.19856 29.4522C6.584 29.4553 5.97687 29.3309 5.42411 29.0887C1.66929 27.4252 1.11724 20.3565 4.19295 13.3313C6.82176 7.37292 11.2031 3.20836 14.8835 3.20836C15.4912 3.20741 16.091 3.33318 16.636 3.57583C20.3908 5.23533 20.9472 12.308 17.8672 19.3332C15.2778 25.2916 10.8833 29.4522 7.19856 29.4522ZM14.8835 3.86426C11.5405 3.86426 7.32561 7.94585 4.86329 13.5723C1.92341 20.2894 2.31773 27.0064 5.73956 28.5118C6.19274 28.7101 6.6905 28.8115 7.19418 28.8081C10.5371 28.8081 14.752 24.7266 17.2143 19.1001C20.1542 12.383 19.7599 5.66601 16.3381 4.1606C15.8849 3.96233 15.3871 3.86092 14.8835 3.86426Z"
          fill="url(#paint3_linear_2564_22784)"
        />
        <path
          d="M6.61145 18.298L9.07815 19.3885L8.79774 20.0246C8.58451 20.4636 8.41871 20.9201 8.30265 21.3878C8.27149 21.4788 8.27783 21.5769 8.3205 21.664C8.36316 21.7511 8.43929 21.8214 8.53486 21.8619C8.61265 21.8879 8.69776 21.8899 8.77698 21.8678C8.85619 21.8456 8.92509 21.8005 8.97299 21.7395C9.17817 21.5145 9.33561 21.2573 9.43741 20.9808C9.66511 20.5566 9.77489 20.0887 9.75726 19.6177C9.58214 18.942 9.34321 18.281 9.0431 17.6421C8.76511 17.0168 8.53957 16.3736 8.36836 15.7178C8.27795 15.1942 8.27795 14.661 8.36836 14.1374C8.50364 13.3696 8.73895 12.619 9.06938 11.901C9.65356 10.5365 10.3327 9.56056 11.1067 8.97315C11.4415 8.69309 11.848 8.49207 12.2898 8.38797C12.7317 8.28387 13.1952 8.27994 13.6391 8.37653L14.27 6.93829L15.4048 7.4401L14.752 8.92574C15.4232 9.40489 15.8577 10.1034 15.9613 10.8697C16.154 11.7706 15.878 13.0732 15.1332 14.7775L14.8046 15.5242L12.3423 14.4337L12.7497 13.4973C13.0512 12.8638 13.3059 12.2131 13.5121 11.5493C13.5734 11.2767 13.5121 11.0949 13.3105 11.008C13.2289 10.9729 13.1366 10.9636 13.0484 10.9815C12.9602 10.9994 12.8812 11.0435 12.8242 11.1068C12.6194 11.3151 12.463 11.5582 12.3642 11.822C12.0768 12.4348 11.8453 13.0678 11.6719 13.7146C11.6071 14.2457 11.6993 14.7828 11.9392 15.2714C12.2579 16.0218 12.5328 16.7867 12.7629 17.563C12.8909 18.1447 12.9131 18.7412 12.8286 19.3292C12.7373 20.1018 12.5249 20.8587 12.1977 21.5775C11.855 22.5162 11.2319 23.3516 10.3969 23.9916C10.0572 24.2192 9.66279 24.3715 9.24565 24.436C8.82851 24.5005 8.40039 24.4755 7.99596 24.3631L7.46581 25.5958L6.33104 25.094L6.86556 23.8731C6.52953 23.6406 6.25055 23.3478 6.0462 23.0132C5.84185 22.6786 5.71655 22.3095 5.67822 21.9291C5.61659 20.932 5.82091 19.9362 6.27408 19.025C6.34418 18.8511 6.4581 18.6141 6.61145 18.298Z"
          fill="url(#paint4_linear_2564_22784)"
        />
        <path
          d="M5.69139 17.891L8.15371 18.9815L7.87768 19.6137C7.66362 20.0524 7.4978 20.509 7.38258 20.9769C7.35111 21.0674 7.35681 21.1651 7.39864 21.2522C7.44047 21.3393 7.51565 21.4098 7.61042 21.451C7.68757 21.4787 7.77284 21.4821 7.85238 21.4606C7.93192 21.4391 8.00107 21.3939 8.04856 21.3325C8.25353 21.1067 8.41227 20.8498 8.51737 20.5739C8.7426 20.1489 8.85223 19.6816 8.8372 19.2107C8.65978 18.5351 8.41942 17.8742 8.11866 17.2351C7.84222 16.6137 7.61813 15.9745 7.44831 15.3227C7.35552 14.7992 7.35552 14.2658 7.44831 13.7422C7.57918 12.9741 7.81311 12.2231 8.14495 11.5059C8.74665 10.1414 9.42723 9.16545 10.1867 8.57804C10.5209 8.29707 10.9273 8.09545 11.3693 7.9913C11.8114 7.88715 12.2752 7.88375 12.7191 7.98141L13.3456 6.53923L14.4804 7.04498L13.8319 8.53063C14.5021 9.00884 14.9365 9.70579 15.0412 10.4707C15.2296 11.3755 14.9536 12.6754 14.2087 14.3823L13.8845 15.1291L11.4178 14.0386L11.8297 13.1022C12.1315 12.4675 12.3862 11.8154 12.592 11.1503C12.649 10.8776 12.592 10.6998 12.3861 10.6129C12.3048 10.5763 12.212 10.5662 12.1234 10.5842C12.0348 10.6022 11.9558 10.6472 11.8998 10.7117C11.6955 10.9203 11.5392 11.1634 11.4397 11.4269C11.1527 12.0394 10.9226 12.6725 10.7518 13.3195C10.6877 13.8502 10.7783 14.3868 11.0147 14.8762C11.337 15.6259 11.6134 16.391 11.8428 17.1679C11.9666 17.75 11.9888 18.3459 11.9085 18.9341C11.8131 19.706 11.6008 20.4624 11.2776 21.1823C10.7781 22.3242 10.1779 23.1303 9.47687 23.5926C9.13809 23.8219 8.74363 23.9752 8.32612 24.0398C7.90861 24.1044 7.48006 24.0784 7.0759 23.964L6.54137 25.1849L5.4066 24.6831L5.94113 23.4622C5.60344 23.232 5.32322 22.9403 5.11866 22.606C4.91411 22.2718 4.78979 21.9025 4.75377 21.5221C4.6904 20.5237 4.89479 19.5262 5.34964 18.6141C5.41974 18.4402 5.53366 18.2031 5.69139 17.891Z"
          fill="url(#paint5_linear_2564_22784)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2564_22784"
          x1="6.81038"
          y1="33.4228"
          x2="20.4628"
          y2="-0.711494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68180B" />
          <stop offset="0.02" stopColor="#68180B" />
          <stop offset="0.03" stopColor="#80260E" />
          <stop offset="0.04" stopColor="#952E10" />
          <stop offset="0.05" stopColor="#83220E" />
          <stop offset="0.06" stopColor="#83220E" />
          <stop offset="0.07" stopColor="#A33B12" />
          <stop offset="0.08" stopColor="#6A190B" />
          <stop offset="0.1" stopColor="#7C240D" />
          <stop offset="0.11" stopColor="#902E10" />
          <stop offset="0.12" stopColor="#6D180C" />
          <stop offset="0.14" stopColor="#943011" />
          <stop offset="0.15" stopColor="#A33912" />
          <stop offset="0.16" stopColor="#6B170C" />
          <stop offset="0.19" stopColor="#6B170C" />
          <stop offset="0.21" stopColor="#9A3411" />
          <stop offset="0.22" stopColor="#6B170C" />
          <stop offset="0.25" stopColor="#6B170C" />
          <stop offset="0.27" stopColor="#992F11" />
          <stop offset="0.28" stopColor="#76170D" />
          <stop offset="0.29" stopColor="#74160D" />
          <stop offset="0.32" stopColor="#A93A13" />
          <stop offset="0.33" stopColor="#88240F" />
          <stop offset="0.34" stopColor="#76170D" />
          <stop offset="0.35" stopColor="#74160D" />
          <stop offset="0.37" stopColor="#74160D" />
          <stop offset="0.38" stopColor="#A93A13" />
          <stop offset="0.39" stopColor="#992F11" />
          <stop offset="0.4" stopColor="#76170D" />
          <stop offset="0.41" stopColor="#74160D" />
          <stop offset="0.44" stopColor="#A93A13" />
          <stop offset="0.45" stopColor="#CA5017" />
          <stop offset="0.46" stopColor="#76170D" />
          <stop offset="0.47" stopColor="#74160D" />
          <stop offset="0.5" stopColor="#74160D" />
          <stop offset="0.51" stopColor="#E6631A" />
          <stop offset="0.52" stopColor="#992F11" />
          <stop offset="0.53" stopColor="#7D1C0E" />
          <stop offset="0.54" stopColor="#76170D" />
          <stop offset="0.55" stopColor="#74160D" />
          <stop offset="0.57" stopColor="#E6631A" />
          <stop offset="0.58" stopColor="#6C240D" />
          <stop offset="0.59" stopColor="#3A0907" />
          <stop offset="0.6" stopColor="#330606" />
          <stop offset="0.61" stopColor="#310506" />
          <stop offset="0.62" stopColor="#A84313" />
          <stop offset="0.63" stopColor="#79310E" />
          <stop offset="0.64" stopColor="#140303" />
          <stop offset="0.65" stopColor="#0F0102" />
          <stop offset="0.67" stopColor="#1C0804" />
          <stop offset="0.68" stopColor="#6D2C0D" />
          <stop offset="0.69" stopColor="#AA4813" />
          <stop offset="0.7" stopColor="#321206" />
          <stop offset="0.71" stopColor="#160503" />
          <stop offset="0.72" stopColor="#0F0202" />
          <stop offset="0.74" stopColor="#2F1106" />
          <stop offset="0.75" stopColor="#C95617" />
          <stop offset="0.76" stopColor="#82360F" />
          <stop offset="0.77" stopColor="#401808" />
          <stop offset="0.78" stopColor="#190703" />
          <stop offset="0.79" stopColor="#100202" />
          <stop offset="0.8" stopColor="#1C0804" />
          <stop offset="0.81" stopColor="#984011" />
          <stop offset="0.82" stopColor="#521B0B" />
          <stop offset="0.83" stopColor="#220406" />
          <stop offset="0.84" stopColor="#290705" />
          <stop offset="0.86" stopColor="#E6631A" />
          <stop offset="0.87" stopColor="#4D1108" />
          <stop offset="0.88" stopColor="#400A07" />
          <stop offset="0.89" stopColor="#490F08" />
          <stop offset="0.9" stopColor="#E6631A" />
          <stop offset="0.91" stopColor="#420B07" />
          <stop offset="0.92" stopColor="#400A07" />
          <stop offset="0.93" stopColor="#400A07" />
          <stop offset="0.94" stopColor="#71230C" />
          <stop offset="0.95" stopColor="#440B07" />
          <stop offset="0.96" stopColor="#420B07" />
          <stop offset="1" stopColor="#400A07" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2564_22784"
          x1="-2.98774"
          y1="27.7549"
          x2="33.0472"
          y2="-7.92323"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6721A" />
          <stop offset="0.05" stopColor="#E6771A" />
          <stop offset="0.1" stopColor="#E6861A" />
          <stop offset="0.16" stopColor="#E69E1A" />
          <stop offset="0.23" stopColor="#E6C01A" />
          <stop offset="0.26" stopColor="#E6D51A" />
          <stop offset="0.29" stopColor="#E6B21A" />
          <stop offset="0.33" stopColor="#E6961A" />
          <stop offset="0.37" stopColor="#E6821A" />
          <stop offset="0.4" stopColor="#E6761A" />
          <stop offset="0.44" stopColor="#E6721A" />
          <stop offset="0.6" stopColor="#E6691A" />
          <stop offset="0.69" stopColor="#69280C" />
          <stop offset="0.74" stopColor="#2B0705" />
          <stop offset="0.75" stopColor="#2F0905" />
          <stop offset="0.77" stopColor="#3A0F07" />
          <stop offset="0.79" stopColor="#4D1809" />
          <stop offset="0.8" stopColor="#68260C" />
          <stop offset="0.82" stopColor="#913A10" />
          <stop offset="0.89" stopColor="#CA6017" />
          <stop offset="0.92" stopColor="#E6721A" />
          <stop offset="1" stopColor="#9F3C12" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2564_22784"
          x1="3.42402"
          y1="31.9489"
          x2="16.2144"
          y2="-0.26885"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6611A" />
          <stop offset="0.08" stopColor="#E69A1A" />
          <stop offset="0.18" stopColor="#D95818" />
          <stop offset="0.2" stopColor="#B64114" />
          <stop offset="0.21" stopColor="#9B2F11" />
          <stop offset="0.23" stopColor="#88220F" />
          <stop offset="0.25" stopColor="#7D1B0D" />
          <stop offset="0.26" stopColor="#79180D" />
          <stop offset="0.34" stopColor="#B45514" />
          <stop offset="0.4" stopColor="#E6891A" />
          <stop offset="0.56" stopColor="#E69A1A" />
          <stop offset="0.61" stopColor="#E69E1A" />
          <stop offset="0.65" stopColor="#E6AA1B" />
          <stop offset="0.7" stopColor="#E6BE1C" />
          <stop offset="0.74" stopColor="#E6D51E" />
          <stop offset="0.78" stopColor="#E6C61D" />
          <stop offset="0.86" stopColor="#E6AE1B" />
          <stop offset="0.94" stopColor="#E69F1A" />
          <stop offset="1" stopColor="#E69A1A" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2564_22784"
          x1="4.91874"
          y1="28.8863"
          x2="15.2011"
          y2="2.98607"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68180B" />
          <stop offset="0.04" stopColor="#6D1B0C" />
          <stop offset="0.09" stopColor="#7C240D" />
          <stop offset="0.14" stopColor="#953210" />
          <stop offset="0.2" stopColor="#B74714" />
          <stop offset="0.25" stopColor="#E2611A" />
          <stop offset="0.26" stopColor="#E6631A" />
          <stop offset="0.28" stopColor="#CB5317" />
          <stop offset="0.31" stopColor="#A83E13" />
          <stop offset="0.34" stopColor="#8C2D0F" />
          <stop offset="0.38" stopColor="#78210D" />
          <stop offset="0.41" stopColor="#6C1A0B" />
          <stop offset="0.44" stopColor="#68180B" />
          <stop offset="0.6" stopColor="#74160D" />
          <stop offset="0.65" stopColor="#4A0E09" />
          <stop offset="0.74" stopColor="#0D0102" />
          <stop offset="0.76" stopColor="#110202" />
          <stop offset="0.79" stopColor="#1C0404" />
          <stop offset="0.81" stopColor="#2F0706" />
          <stop offset="0.82" stopColor="#3B0907" />
          <stop offset="0.92" stopColor="#68180B" />
          <stop offset="1" stopColor="#400A07" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2564_22784"
          x1="1638.27"
          y1="6235.19"
          x2="2150.24"
          y2="6235.19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68180B" />
          <stop offset="0.04" stopColor="#6D1B0C" />
          <stop offset="0.09" stopColor="#7C240D" />
          <stop offset="0.14" stopColor="#953210" />
          <stop offset="0.2" stopColor="#B74714" />
          <stop offset="0.25" stopColor="#E2611A" />
          <stop offset="0.26" stopColor="#E6631A" />
          <stop offset="0.28" stopColor="#CB5317" />
          <stop offset="0.31" stopColor="#A83E13" />
          <stop offset="0.34" stopColor="#8C2D0F" />
          <stop offset="0.38" stopColor="#78210D" />
          <stop offset="0.41" stopColor="#6C1A0B" />
          <stop offset="0.44" stopColor="#68180B" />
          <stop offset="0.6" stopColor="#74160D" />
          <stop offset="0.65" stopColor="#4A0E09" />
          <stop offset="0.74" stopColor="#0D0102" />
          <stop offset="0.76" stopColor="#110202" />
          <stop offset="0.79" stopColor="#1C0404" />
          <stop offset="0.81" stopColor="#2F0706" />
          <stop offset="0.82" stopColor="#3B0907" />
          <stop offset="0.92" stopColor="#68180B" />
          <stop offset="1" stopColor="#400A07" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2564_22784"
          x1="17.4419"
          y1="21.3573"
          x2="-3.60667"
          y2="2.39042"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6C81A" />
          <stop offset="0.15" stopColor="#E6CD1A" />
          <stop offset="0.26" stopColor="#E6D51A" />
          <stop offset="0.34" stopColor="#E6CC1A" />
          <stop offset="0.44" stopColor="#E6C81A" />
          <stop offset="0.6" stopColor="#E6AD1A" />
          <stop offset="0.68" stopColor="#84460F" />
          <stop offset="0.74" stopColor="#490808" />
          <stop offset="0.75" stopColor="#4D0A08" />
          <stop offset="0.76" stopColor="#58110A" />
          <stop offset="0.78" stopColor="#6B1B0C" />
          <stop offset="0.79" stopColor="#862A0F" />
          <stop offset="0.8" stopColor="#A93E13" />
          <stop offset="0.82" stopColor="#E6601A" />
          <stop offset="0.88" stopColor="#E6991A" />
          <stop offset="0.92" stopColor="#E6C81A" />
          <stop offset="1" stopColor="#E6611A" />
        </linearGradient>
        <clipPath id="clip0_2564_22784">
          <rect width="25" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
