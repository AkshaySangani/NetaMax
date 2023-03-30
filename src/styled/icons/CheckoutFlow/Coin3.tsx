import { ReactElement } from "react";

/**
 * A coin icon
 * @param {any} props props
 * @returns {ReactElement} The image.
 */
export default function Coin3(props: {
  width?: string;
  height?: string;
  opacity?: string;
  transform?: string;
}): ReactElement {
  return (
    <svg
      width="38"
      height="25"
      viewBox="0 0 38 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2564_22791)">
        <path
          d="M31.7635 5.4848C28.0998 4.14523 22.6413 4.13377 16.9626 5.74168C11.2839 7.3496 6.70133 10.2014 4.33419 13.2457L1.87771 15.8445L2.9402 19.312C4.68954 23.6891 13.0823 25.1973 22.0587 22.6566C31.0352 20.1158 37.3132 14.432 36.3001 9.816L35.2113 6.13286L31.7635 5.4848Z"
          fill="url(#paint0_linear_2564_22791)"
        />
        <path
          d="M34.9415 6.47926C36.3048 11.0286 30.0605 16.7993 20.9886 19.3691C11.9167 21.9389 3.45357 20.3296 2.08961 15.7719C0.725651 11.2141 6.97068 5.45183 16.0429 2.88625C25.1152 0.320667 33.5731 1.92184 34.9415 6.47926Z"
          fill="url(#paint1_linear_2564_22791)"
        />
        <path
          d="M35.4762 7.32011C35.8535 11.9876 29.6988 17.3282 21.1611 19.7438C16.7294 20.999 12.2912 21.2937 8.66907 20.5786C4.96101 19.8448 2.53003 18.1408 1.81859 15.7724C1.71894 15.4404 1.65416 15.0994 1.6252 14.7545C1.24789 10.0871 7.4029 4.75064 15.9406 2.33504C25.1646 -0.276978 33.8415 1.50295 35.2828 6.3022C35.3822 6.63429 35.447 6.97527 35.4762 7.32011ZM2.33608 14.697C2.35972 14.9949 2.4148 15.2896 2.50048 15.5764C3.11524 17.6834 5.36812 19.2182 8.80033 19.8932C12.3141 20.5871 16.6239 20.2985 20.9425 19.0739C29.1542 16.7487 35.0809 11.7212 34.73 7.38044C34.7059 7.0826 34.6508 6.78802 34.5656 6.50112C33.2387 2.07273 24.9611 0.50395 16.1239 3.00783C7.9295 5.32734 1.98518 10.3563 2.33608 14.697Z"
          fill="url(#paint2_linear_2564_22791)"
        />
        <path
          d="M32.1568 8.04116C32.4576 11.7624 27.5055 16.0364 20.6366 17.9839C13.2154 20.0829 6.24433 18.6776 5.09494 14.8499C5.0164 14.5849 4.96611 14.3128 4.94485 14.0377C4.64369 10.3123 9.59576 6.03828 16.4651 4.09495C23.8862 1.99596 30.8573 3.40129 32.0067 7.22902C32.0852 7.49397 32.1355 7.76608 32.1568 8.04116ZM5.66898 13.9792C5.68631 14.2059 5.72827 14.4301 5.79417 14.6481C6.8339 18.1089 13.4013 19.3034 20.4309 17.3087C26.8699 15.4856 31.7026 11.439 31.4323 8.09545C31.4149 7.86733 31.3728 7.64173 31.3068 7.42227C30.2674 3.96576 23.7 2.77123 16.6701 4.76171C10.2314 6.58909 5.39869 10.6356 5.66898 13.9792Z"
          fill="url(#paint3_linear_2564_22791)"
        />
        <path
          d="M14.185 8.98572L14.9339 11.4877L14.2646 11.6742C13.7938 11.7896 13.3362 11.9511 12.8991 12.1561C12.8151 12.1919 12.7465 12.2545 12.7051 12.3333C12.6637 12.4121 12.652 12.5022 12.6721 12.588C12.6921 12.6738 12.7427 12.7501 12.8152 12.8036C12.8876 12.8571 12.9773 12.8846 13.0689 12.8813C13.3669 12.8933 13.6649 12.8519 13.9478 12.759C14.4143 12.6656 14.8468 12.4536 15.2004 12.1452C15.6151 11.5909 15.9736 10.9998 16.271 10.3802C16.5651 9.78887 16.9086 9.22119 17.2982 8.68281C17.6418 8.28962 18.0541 7.95705 18.5165 7.70026C19.1994 7.32063 19.9301 7.02755 20.6903 6.82837C21.8358 6.44276 23.0612 6.33637 24.2563 6.51876C24.7008 6.60063 25.1197 6.77817 25.4816 7.03807C25.8435 7.29798 26.1392 7.63355 26.3464 8.0197L27.8583 7.58998L28.2046 8.74074L26.6405 9.18323C26.6768 9.56163 26.6318 9.94368 26.5081 10.3056C26.3845 10.6675 26.1849 11.0016 25.9217 11.2871C25.3475 11.9912 24.1697 12.5946 22.3797 13.1024L21.5932 13.324L20.8443 10.822L21.8264 10.5461C22.5054 10.3764 23.1712 10.1599 23.8184 9.89823C24.0658 9.77003 24.1594 9.60872 24.0993 9.41428C24.074 9.33192 24.0233 9.25902 23.9539 9.20516C23.8845 9.15131 23.7996 9.11903 23.7104 9.11258C23.4246 9.09113 23.1369 9.12748 22.8658 9.2193C22.2115 9.38214 21.5746 9.60526 20.9641 9.88553C20.5119 10.1676 20.155 10.5707 19.9379 11.0447C19.5687 11.7462 19.1578 12.4268 18.7072 13.0832C18.3429 13.5354 17.8987 13.9226 17.3953 14.2271C16.7326 14.6404 16.0085 14.9539 15.2483 15.1566C14.2777 15.4874 13.2308 15.5454 12.2308 15.3236C11.8252 15.2064 11.4511 15.0065 11.1341 14.7373C10.8171 14.4682 10.5645 14.1361 10.3936 13.7638L9.08959 14.1255L8.74325 12.9747L10.0252 12.6148C9.9796 12.2385 10.0204 11.8566 10.1449 11.496C10.2693 11.1354 10.4743 10.805 10.7454 10.5279C11.4786 9.85892 12.3822 9.38795 13.3638 9.16315C13.5832 9.12833 13.8406 9.06908 14.185 8.98572Z"
          fill="url(#paint4_linear_2564_22791)"
        />
        <path
          d="M13.9003 8.04781L14.6536 10.5494L13.9846 10.7402C13.5132 10.8522 13.0554 11.0123 12.6188 11.2179C12.5365 11.2553 12.4698 11.3186 12.4298 11.3972C12.3897 11.4758 12.3787 11.5651 12.3986 11.6502C12.4184 11.7352 12.4679 11.8111 12.5389 11.8651C12.6099 11.9191 12.6981 11.9481 12.7889 11.9473C13.087 11.9574 13.3849 11.9145 13.6675 11.8207C14.1327 11.7261 14.5647 11.5159 14.9204 11.2112C15.3327 10.6554 15.6911 10.0646 15.991 9.44621C16.2824 8.8522 16.626 8.2829 17.0179 7.74454C17.3597 7.35064 17.7726 7.01918 18.2365 6.76623C18.9108 6.38552 19.6345 6.09289 20.3883 5.89613C21.5338 5.51159 22.7585 5.4038 23.9539 5.58227C24.3993 5.66481 24.819 5.84298 25.1817 6.10351C25.5443 6.36405 25.8407 6.70026 26.0488 7.0871L27.5607 6.65739L27.907 7.80813L26.3429 8.25063C26.3802 8.62846 26.3355 9.01011 26.2117 9.3715C26.088 9.73288 25.8877 10.0662 25.6237 10.3502C25.0525 11.0541 23.8733 11.6591 22.0861 12.1652L21.2996 12.3868L20.5463 9.88515L21.5325 9.60469C22.2115 9.43499 22.8773 9.21847 23.5245 8.9568C23.7724 8.83426 23.8656 8.66869 23.8054 8.47283C23.7794 8.39132 23.7284 8.31936 23.6591 8.26631C23.5898 8.21327 23.5054 8.18159 23.4169 8.17538C23.1312 8.14987 22.8428 8.18484 22.5719 8.27785C21.9187 8.44416 21.2822 8.66716 20.6702 8.94409C20.2169 9.22674 19.86 9.63157 19.6443 10.1075C19.2737 10.8069 18.8627 11.4861 18.4133 12.1418C18.0482 12.5949 17.6025 12.9824 17.0969 13.286C16.4353 13.702 15.7111 14.017 14.9503 14.2197C13.9812 14.5503 12.9357 14.6082 11.9372 14.3864C11.5319 14.2687 11.1581 14.0686 10.8411 13.7995C10.5242 13.5304 10.2715 13.1986 10.1001 12.8266L8.81845 13.1907L8.47211 12.04L9.75373 11.6758C9.70852 11.3001 9.74962 10.9189 9.8741 10.5591C9.99859 10.1993 10.2034 9.86958 10.4742 9.59321C11.2075 8.92418 12.1111 8.45321 13.0927 8.22842C13.3033 8.19431 13.5603 8.13081 13.9003 8.04781Z"
          fill="url(#paint5_linear_2564_22791)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2564_22791"
          x1="2.68519"
          y1="19.1349"
          x2="38.1673"
          y2="8.84172"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AA560A" />
          <stop offset="0.02" stopColor="#AA560A" />
          <stop offset="0.03" stopColor="#C2660D" />
          <stop offset="0.04" stopColor="#CC6E0D" />
          <stop offset="0.05" stopColor="#BA610B" />
          <stop offset="0.06" stopColor="#BA610B" />
          <stop offset="0.07" stopColor="#CF700E" />
          <stop offset="0.08" stopColor="#AC570A" />
          <stop offset="0.1" stopColor="#BE640C" />
          <stop offset="0.11" stopColor="#C0640C" />
          <stop offset="0.12" stopColor="#AE560A" />
          <stop offset="0.14" stopColor="#BE620C" />
          <stop offset="0.15" stopColor="#C5670D" />
          <stop offset="0.16" stopColor="#AC550A" />
          <stop offset="0.19" stopColor="#AC550A" />
          <stop offset="0.21" stopColor="#C1640C" />
          <stop offset="0.22" stopColor="#AC550A" />
          <stop offset="0.25" stopColor="#AC550A" />
          <stop offset="0.27" stopColor="#C6620D" />
          <stop offset="0.28" stopColor="#B4530B" />
          <stop offset="0.29" stopColor="#B2510B" />
          <stop offset="0.32" stopColor="#C25E0D" />
          <stop offset="0.33" stopColor="#C6620D" />
          <stop offset="0.34" stopColor="#B4530B" />
          <stop offset="0.35" stopColor="#B2510B" />
          <stop offset="0.37" stopColor="#B2510B" />
          <stop offset="0.38" stopColor="#C25E0D" />
          <stop offset="0.39" stopColor="#C6620D" />
          <stop offset="0.4" stopColor="#B4530B" />
          <stop offset="0.41" stopColor="#B2510B" />
          <stop offset="0.44" stopColor="#C25E0D" />
          <stop offset="0.45" stopColor="#ED8211" />
          <stop offset="0.46" stopColor="#B4530B" />
          <stop offset="0.47" stopColor="#B2510B" />
          <stop offset="0.5" stopColor="#C25E0D" />
          <stop offset="0.51" stopColor="#FF9113" />
          <stop offset="0.52" stopColor="#C6620D" />
          <stop offset="0.53" stopColor="#BB580C" />
          <stop offset="0.54" stopColor="#B4530B" />
          <stop offset="0.55" stopColor="#B2510B" />
          <stop offset="0.57" stopColor="#F98C12" />
          <stop offset="0.58" stopColor="#A84E06" />
          <stop offset="0.59" stopColor="#8C3801" />
          <stop offset="0.6" stopColor="#853200" />
          <stop offset="0.61" stopColor="#833100" />
          <stop offset="0.62" stopColor="#C2610A" />
          <stop offset="0.63" stopColor="#C6690F" />
          <stop offset="0.64" stopColor="#612308" />
          <stop offset="0.65" stopColor="#581D07" />
          <stop offset="0.67" stopColor="#5A1F07" />
          <stop offset="0.68" stopColor="#93470B" />
          <stop offset="0.69" stopColor="#CD6E0F" />
          <stop offset="0.7" stopColor="#7B360A" />
          <stop offset="0.71" stopColor="#5F2208" />
          <stop offset="0.72" stopColor="#581D07" />
          <stop offset="0.74" stopColor="#783409" />
          <stop offset="0.75" stopColor="#E07C11" />
          <stop offset="0.76" stopColor="#CB6D0F" />
          <stop offset="0.77" stopColor="#893F0B" />
          <stop offset="0.78" stopColor="#622508" />
          <stop offset="0.79" stopColor="#591E07" />
          <stop offset="0.8" stopColor="#652708" />
          <stop offset="0.81" stopColor="#B65F0E" />
          <stop offset="0.82" stopColor="#8F3B04" />
          <stop offset="0.83" stopColor="#742700" />
          <stop offset="0.84" stopColor="#7D3C00" />
          <stop offset="0.86" stopColor="#FF9113" />
          <stop offset="0.87" stopColor="#924208" />
          <stop offset="0.88" stopColor="#8F4008" />
          <stop offset="0.89" stopColor="#984609" />
          <stop offset="0.9" stopColor="#F28812" />
          <stop offset="0.91" stopColor="#914208" />
          <stop offset="0.92" stopColor="#8F4008" />
          <stop offset="0.93" stopColor="#8F4008" />
          <stop offset="0.94" stopColor="#AB540A" />
          <stop offset="0.95" stopColor="#914208" />
          <stop offset="1" stopColor="#8F4008" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2564_22791"
          x1="0.882524"
          y1="9.05667"
          x2="50.3297"
          y2="16.7401"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E89C02" />
          <stop offset="0.06" stopColor="#EAA104" />
          <stop offset="0.12" stopColor="#EFB00A" />
          <stop offset="0.2" stopColor="#F7C814" />
          <stop offset="0.26" stopColor="#FFE21E" />
          <stop offset="0.27" stopColor="#FDDC1B" />
          <stop offset="0.31" stopColor="#F4C010" />
          <stop offset="0.35" stopColor="#EDAC08" />
          <stop offset="0.4" stopColor="#E9A004" />
          <stop offset="0.44" stopColor="#E89C02" />
          <stop offset="0.6" stopColor="#F39502" />
          <stop offset="0.66" stopColor="#BB6B03" />
          <stop offset="0.74" stopColor="#7E3C04" />
          <stop offset="0.76" stopColor="#823F04" />
          <stop offset="0.78" stopColor="#8D4A04" />
          <stop offset="0.8" stopColor="#A05B03" />
          <stop offset="0.82" stopColor="#C17903" />
          <stop offset="0.92" stopColor="#E89C02" />
          <stop offset="1" stopColor="#C77901" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2564_22791"
          x1="1.76517"
          y1="16.1"
          x2="35.0947"
          y2="6.15691"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB9325" />
          <stop offset="0.08" stopColor="#FFB42B" />
          <stop offset="0.18" stopColor="#F18F27" />
          <stop offset="0.2" stopColor="#D67624" />
          <stop offset="0.22" stopColor="#C36422" />
          <stop offset="0.24" stopColor="#B85921" />
          <stop offset="0.26" stopColor="#B45621" />
          <stop offset="0.36" stopColor="#EA932A" />
          <stop offset="0.4" stopColor="#FFAC2D" />
          <stop offset="0.56" stopColor="#FFB42B" />
          <stop offset="0.6" stopColor="#FFB82C" />
          <stop offset="0.64" stopColor="#FFC430" />
          <stop offset="0.69" stopColor="#FFD836" />
          <stop offset="0.73" stopColor="#FFF43F" />
          <stop offset="0.74" stopColor="#FFFD42" />
          <stop offset="0.81" stopColor="#FFE039" />
          <stop offset="0.88" stopColor="#FFC831" />
          <stop offset="0.95" stopColor="#FFB92D" />
          <stop offset="1" stopColor="#FFB42B" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2564_22791"
          x1="5.03991"
          y1="15.1785"
          x2="31.8459"
          y2="7.18147"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AA560A" />
          <stop offset="0.05" stopColor="#AF5A0B" />
          <stop offset="0.11" stopColor="#BE640C" />
          <stop offset="0.18" stopColor="#D6750F" />
          <stop offset="0.25" stopColor="#F88C12" />
          <stop offset="0.26" stopColor="#FF9113" />
          <stop offset="0.28" stopColor="#EA8211" />
          <stop offset="0.32" stopColor="#CE6F0E" />
          <stop offset="0.36" stopColor="#BA610C" />
          <stop offset="0.4" stopColor="#AE590A" />
          <stop offset="0.44" stopColor="#AA560A" />
          <stop offset="0.6" stopColor="#B2510B" />
          <stop offset="0.64" stopColor="#933F0A" />
          <stop offset="0.74" stopColor="#561C07" />
          <stop offset="0.76" stopColor="#5A1F07" />
          <stop offset="0.78" stopColor="#652608" />
          <stop offset="0.81" stopColor="#783308" />
          <stop offset="0.82" stopColor="#8B4009" />
          <stop offset="0.92" stopColor="#AA560A" />
          <stop offset="1" stopColor="#8F4008" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2564_22791"
          x1="4832.79"
          y1="-3952.35"
          x2="4802.97"
          y2="-4321.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AA560A" />
          <stop offset="0.05" stopColor="#AF5A0B" />
          <stop offset="0.11" stopColor="#BE640C" />
          <stop offset="0.18" stopColor="#D6750F" />
          <stop offset="0.25" stopColor="#F88C12" />
          <stop offset="0.26" stopColor="#FF9113" />
          <stop offset="0.28" stopColor="#EA8211" />
          <stop offset="0.32" stopColor="#CE6F0E" />
          <stop offset="0.36" stopColor="#BA610C" />
          <stop offset="0.4" stopColor="#AE590A" />
          <stop offset="0.44" stopColor="#AA560A" />
          <stop offset="0.6" stopColor="#B2510B" />
          <stop offset="0.64" stopColor="#933F0A" />
          <stop offset="0.74" stopColor="#561C07" />
          <stop offset="0.76" stopColor="#5A1F07" />
          <stop offset="0.78" stopColor="#652608" />
          <stop offset="0.81" stopColor="#783308" />
          <stop offset="0.82" stopColor="#8B4009" />
          <stop offset="0.92" stopColor="#AA560A" />
          <stop offset="1" stopColor="#8F4008" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2564_22791"
          x1="18.5811"
          y1="18.083"
          x2="18.1448"
          y2="-7.78552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC601" />
          <stop offset="0.06" stopColor="#FFCB03" />
          <stop offset="0.14" stopColor="#FFDA09" />
          <stop offset="0.22" stopColor="#FFF212" />
          <stop offset="0.26" stopColor="#FFFF17" />
          <stop offset="0.3" stopColor="#FFEA0F" />
          <stop offset="0.34" stopColor="#FFD607" />
          <stop offset="0.39" stopColor="#FFCA03" />
          <stop offset="0.44" stopColor="#FFC601" />
          <stop offset="0.6" stopColor="#FFBA01" />
          <stop offset="0.67" stopColor="#C87602" />
          <stop offset="0.74" stopColor="#963802" />
          <stop offset="0.75" stopColor="#9A3B02" />
          <stop offset="0.77" stopColor="#A54402" />
          <stop offset="0.79" stopColor="#B85402" />
          <stop offset="0.8" stopColor="#D36A01" />
          <stop offset="0.82" stopColor="#FF8E01" />
          <stop offset="0.92" stopColor="#FFC601" />
          <stop offset="1" stopColor="#FF8E00" />
        </linearGradient>
        <clipPath id="clip0_2564_22791">
          <rect
            width="22"
            height="35"
            fill="white"
            transform="translate(2.44324 24.8744) rotate(-94.6217)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
