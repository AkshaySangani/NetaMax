import { ReactElement } from "react";

/**
 * A coin icon
 * @param {any} props props
 * @returns {ReactElement} The image.
 */
export default function Coin1(props: {
  width?: string;
  height?: string;
  opacity?: string;
  transform?: string;
}): ReactElement {
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.1781 18.1122C21.7077 14.7205 20.6486 10.6504 18.0191 7.19273C15.3897 3.73508 11.8415 1.70003 8.54217 1.40892L4.7212 1.56546L2.67169 3.25172C-1.10427 6.65994 -0.863309 13.6878 3.29131 19.1805C7.44592 24.6732 13.9705 26.5819 18.0615 23.5747L20.1269 21.9104L21.1781 18.1122Z"
        fill="url(#paint0_linear_2564_22774)"
      />
      <path
        d="M19.7801 21.9076C15.8082 25.1318 9.20949 23.2533 5.01515 17.7139C0.820819 12.1746 0.635463 5.08074 4.59678 1.84279C8.5581 -1.39515 15.17 0.497084 19.3617 6.03647C23.5534 11.5758 23.7414 18.6834 19.7801 21.9076Z"
        fill="url(#paint1_linear_2564_22774)"
      />
      <path
        d="M15.0879 23.7174C11.4576 23.7174 7.52539 21.4984 4.82449 17.9281C2.77234 15.2175 1.61254 12.0399 1.55693 8.98051C1.50132 5.92108 2.57374 3.30381 4.57293 1.67523C5.97682 0.559565 7.70326 -0.0308461 9.47163 -4.32008e-05C13.102 -4.32008e-05 17.0341 2.21901 19.7377 5.78926C23.9744 11.4055 24.0962 18.6971 19.9866 22.0421C18.5827 23.1578 16.8563 23.7482 15.0879 23.7174ZM9.47163 0.450357C7.80129 0.420869 6.1703 0.977317 4.84302 2.02951C2.95239 3.57021 1.93029 6.03643 1.99119 8.97227C2.05209 11.9081 3.17217 15.0142 5.16872 17.6507C7.79018 21.1139 11.5926 23.267 15.0906 23.267C16.7609 23.2965 18.3919 22.74 19.7191 21.6879C23.6434 18.4939 23.4978 11.4879 19.3961 6.06664C16.772 2.60349 12.9696 0.450357 9.47163 0.450357Z"
        fill="url(#paint2_linear_2564_22774)"
      />
      <path
        d="M14.6113 21.3611C11.6985 21.3611 8.53956 19.5677 6.35501 16.6923C2.94181 12.1691 2.82266 6.34132 6.08492 3.67737C7.19057 2.79653 8.55165 2.33082 9.94561 2.35638C12.8583 2.35638 16.0173 4.14974 18.2019 7.02516C19.8489 9.20302 20.7863 11.7461 20.8498 14.1904C20.9134 16.6346 20.0554 18.7356 18.4667 20.0291C17.3636 20.9123 16.0046 21.3818 14.6113 21.3611ZM9.94826 2.80952C8.65003 2.78328 7.38154 3.21408 6.34971 4.03165C3.27016 6.53632 3.42374 12.0867 6.68865 16.3902C8.79376 19.1723 11.8257 20.897 14.6033 20.897C15.8989 20.9213 17.1643 20.4906 18.1939 19.6748C19.6768 18.4692 20.4606 16.5275 20.405 14.2014C20.3494 11.8752 19.4438 9.4035 17.8524 7.30529C15.7578 4.53423 12.7259 2.80952 9.94826 2.80952Z"
        fill="url(#paint3_linear_2564_22774)"
      />
      <path
        d="M13.3218 7.59905L11.1452 9.3622L10.8354 8.953C10.6358 8.65429 10.3939 8.38856 10.1178 8.1648C10.0427 8.11943 9.95529 8.10102 9.86911 8.11245C9.78293 8.12387 9.70279 8.16447 9.64113 8.22796C9.57903 8.27429 9.53055 8.33759 9.5011 8.41081C9.47164 8.48403 9.46237 8.56429 9.47431 8.64266C9.52035 8.86618 9.62165 9.07345 9.76824 9.24411C9.95676 9.55594 10.2472 9.78698 10.5864 9.895C11.2047 9.93388 11.8251 9.91458 12.44 9.83732C13.0326 9.77006 13.6294 9.75261 14.2247 9.78514C14.6356 9.84204 15.0295 9.99105 15.3792 10.2218C15.8614 10.5385 16.2825 10.9455 16.6211 11.422C17.2831 12.2971 17.6167 13.1357 17.622 13.9376C17.5983 14.8055 17.2452 15.6286 16.6396 16.2281L17.3387 17.1508L16.3378 17.9748L15.6175 17.0163C14.9926 17.4221 14.2522 17.5927 13.5204 17.4996C12.7551 17.4117 11.9581 16.824 11.1372 15.7282L10.7745 15.2504L12.9378 13.4817L13.3933 14.0832C13.6885 14.5076 14.0228 14.9013 14.3915 15.2586C14.4648 15.319 14.5567 15.3498 14.6502 15.3453C14.7437 15.3407 14.8324 15.3011 14.8999 15.2339C14.9675 15.1859 15.0217 15.1202 15.0571 15.0436C15.0924 14.9669 15.1076 14.8819 15.1012 14.7972C15.0684 14.5809 14.9765 14.3788 14.8364 14.215C14.5519 13.8056 14.2172 13.4363 13.8408 13.1165C13.5919 12.9334 13.1629 12.8647 12.5539 12.9105C11.8424 12.9734 11.1282 12.9963 10.4143 12.9791C9.94877 12.9332 9.4977 12.7863 9.09036 12.548C8.58591 12.2648 8.1454 11.8735 7.79817 11.4C7.24563 10.6676 6.99407 9.9426 7.0435 9.22489C7.09293 8.50717 7.45128 7.80045 8.11857 7.10471L7.52278 6.322L8.52635 5.49809L9.11949 6.2808C9.73265 5.85858 10.4772 5.69275 11.2034 5.81667C11.8495 5.95765 12.4462 6.38974 12.9934 7.11294C13.0676 7.22005 13.1788 7.37934 13.3218 7.59905Z"
        fill="url(#paint4_linear_2564_22774)"
      />
      <path
        d="M14.1347 6.93442L11.9581 8.70582L11.6456 8.29936C11.4444 8.00036 11.2017 7.73383 10.9254 7.50841C10.8506 7.46371 10.7637 7.44569 10.6781 7.4571C10.5925 7.46851 10.5128 7.50872 10.4514 7.57157C10.3891 7.61834 10.3405 7.68212 10.311 7.75581C10.2816 7.82951 10.2724 7.91024 10.2846 7.98902C10.3294 8.21243 10.4298 8.41979 10.5758 8.59047C10.7646 8.8997 11.0555 9.12714 11.394 9.23037C12.0122 9.27094 12.6327 9.25256 13.2476 9.17544C13.841 9.10768 14.4387 9.08931 15.035 9.12051C15.4451 9.17702 15.8382 9.32607 16.1868 9.55718C16.6699 9.87481 17.0919 10.2827 17.4313 10.7601C18.0933 11.6334 18.4261 12.472 18.4296 13.2757C18.4331 14.0795 18.1066 14.843 17.4499 15.5662L18.1489 16.4917L17.148 17.3156L16.4251 16.3599C15.8014 16.7687 15.0599 16.9395 14.328 16.8432C13.5601 16.759 12.7657 16.1695 11.9448 15.0746L11.5794 14.5803L13.7639 12.8144L14.2194 13.4158C14.5103 13.8372 14.8411 14.2273 15.2071 14.5803C15.2803 14.6407 15.3723 14.6715 15.4658 14.6669C15.5593 14.6624 15.648 14.6228 15.7155 14.5555C15.7825 14.5076 15.8363 14.4423 15.8715 14.3662C15.9068 14.2901 15.9224 14.2058 15.9167 14.1216C15.885 13.9049 15.7929 13.7026 15.6519 13.5394C15.3674 13.13 15.0327 12.7607 14.6563 12.4408C14.4074 12.2596 13.9784 12.1882 13.3694 12.2349C12.658 12.2987 11.9437 12.3207 11.2299 12.3008C10.7647 12.2546 10.3138 12.1087 9.9059 11.8724C9.40211 11.5918 8.96093 11.2044 8.61106 10.7354C8.05499 10.003 7.80344 9.27797 7.85639 8.56026C7.90935 7.84255 8.26682 7.13582 8.92881 6.44008L8.33567 5.65462L9.33659 4.83072L9.92973 5.61617C10.5442 5.19459 11.2889 5.02795 12.0163 5.1493C12.6624 5.29027 13.2591 5.72328 13.8063 6.44832C13.8831 6.55817 13.9917 6.71746 14.1347 6.93442Z"
        fill="url(#paint5_linear_2564_22774)"
      />
      <path
        style={{
          mixBlendMode: "screen",
        }}
        d="M17.5082 4.60278C18.1331 5.21521 14.8602 7.2887 10.184 9.23312C5.50771 11.1775 1.22599 12.2541 0.601077 11.6444C-0.023837 11.0347 3.24902 8.95574 7.92528 7.01132C12.6015 5.06691 16.8833 3.98759 17.5082 4.60278Z"
        fill="url(#paint6_radial_2564_22774)"
      />
      <path
        style={{
          mixBlendMode: "screen",
        }}
        d="M14.2194 9.66979C13.8619 10.079 11.2617 9.71923 8.40983 8.86511C5.558 8.011 3.53498 6.98661 3.8898 6.57741C4.24463 6.1682 6.84755 6.52797 9.69938 7.38209C12.5512 8.2362 14.5769 9.26059 14.2194 9.66979Z"
        fill="url(#paint7_radial_2564_22774)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2564_22774"
          x1="2.61344"
          y1="2.40518"
          x2="19.4694"
          y2="23.4259"
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
          id="paint1_linear_2564_22774"
          x1="9.08644"
          y1="-1.3557"
          x2="18.4388"
          y2="35.8005"
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
          id="paint2_linear_2564_22774"
          x1="4.56929"
          y1="1.6781"
          x2="20.6805"
          y2="21.475"
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
          id="paint3_linear_2564_22774"
          x1="6.08294"
          y1="3.67887"
          x2="19.0273"
          y2="19.5844"
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
          id="paint4_linear_2564_22774"
          x1="2617.52"
          y1="-1255.64"
          x2="3188.35"
          y2="-1255.64"
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
          id="paint5_linear_2564_22774"
          x1="5.80918"
          y1="14.3396"
          x2="28.9072"
          y2="4.98561"
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
        <radialGradient
          id="paint6_radial_2564_22774"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.55459 7.92237) rotate(-22.6483) scale(7.56349 1.21552)"
        >
          <stop stopColor="white" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id="paint7_radial_2564_22774"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-34.878 -410.848) rotate(16.4176) scale(173.828 9.05745)"
        >
          <stop stopColor="white" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </svg>
  );
}
