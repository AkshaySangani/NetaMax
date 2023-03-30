import { ReactElement } from "react";

/**
 * The background for the discount badge.
 * @param {{}} props the component props
 * @returns {ReactElement} The background.
 */
export default function DiscountBadgeBackground(props?: {
  width?: string;
  height?: string;
}): ReactElement {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M37.5288 21.7811C38.4026 22.9092 38.7479 24.3327 38.4834 25.7133C37.8356 27.002 36.6554 27.9746 35.2263 28.3973C34.5945 28.6214 34.0132 28.9584 33.5133 29.3903C33.2404 29.9849 33.0786 30.6209 33.036 31.2691C33.0564 32.6944 32.4503 34.0625 31.3654 35.0402C30.073 35.7088 28.5499 35.8397 27.1535 35.4024C26.4838 35.2433 25.7906 35.1936 25.1036 35.255C24.5687 35.5854 24.0942 35.9982 23.6996 36.476C22.8127 37.7221 21.4044 38.5396 19.8387 38.7172C18.3304 38.533 16.9713 37.7545 16.09 36.57C15.6744 36.0863 15.1758 35.6735 14.6158 35.3488C13.9289 35.2808 13.2347 35.3308 12.5663 35.4964C11.1698 35.9338 9.64641 35.8029 8.35436 35.134C7.23905 34.1509 6.61569 32.7594 6.64136 31.3093C6.59874 30.6614 6.43703 30.0254 6.16407 29.4305C5.64761 28.9929 5.04652 28.6556 4.39499 28.4375C2.966 28.0148 1.78578 27.0425 1.13763 25.7535C0.87313 24.3732 1.2188 22.9494 2.09249 21.8216C2.51807 21.2528 2.82331 20.6099 2.99095 19.9293C2.85243 19.2703 2.58574 18.6422 2.20466 18.0775C1.33123 16.9494 0.985616 15.526 1.25012 14.1453C1.8631 12.8635 3.00003 11.8786 4.39493 11.4212C5.02672 11.1972 5.60804 10.8602 6.10793 10.4282C6.38089 9.83332 6.54229 9.19735 6.58522 8.54943C6.57926 7.1158 7.20603 5.7465 8.31193 4.77835C9.60431 4.10974 11.1274 3.97852 12.5238 4.41589C13.1926 4.58184 13.8867 4.63186 14.5737 4.56357C15.1337 4.23885 15.632 3.82607 16.0479 3.34228C16.9276 2.12788 18.3055 1.32775 19.8386 1.14148C21.3469 1.3257 22.7061 2.10427 23.5873 3.28867C23.9819 3.76676 24.456 4.17922 24.9913 4.50996C25.6783 4.57796 26.3724 4.52794 27.0409 4.36228C28.4373 3.92494 29.9607 4.05584 31.2528 4.72475C32.3941 5.69558 33.0437 7.0888 33.036 8.54943C33.0786 9.19736 33.2403 9.8333 33.5132 10.4282C34.0297 10.8659 34.6308 11.2031 35.2823 11.4212C36.7113 11.8439 37.8915 12.8162 38.5397 14.1052C38.8042 15.4856 38.4585 16.9093 37.5848 18.0371C37.1593 18.606 36.854 19.2488 36.6864 19.9294C36.8421 20.592 37.128 21.2204 37.5288 21.7811Z"
        fill="#F04D4B"
      />
      <path
        d="M38.6281 22.1166L38.6279 22.1167L38.6338 22.1243C39.5135 23.2601 39.8642 24.6885 39.6085 26.0759C38.9478 27.3684 37.7554 28.3469 36.3095 28.7745L36.3094 28.7742L36.2968 28.7786C35.5954 29.0274 34.9494 29.4017 34.3934 29.8822L34.3523 29.9177L34.3297 29.967C34.0265 30.6274 33.8467 31.3342 33.7993 32.0549L33.7987 32.0649L33.7988 32.0749C33.8193 33.5076 33.2147 34.886 32.1269 35.8784C30.8162 36.5468 29.2752 36.6754 27.8615 36.2327L27.8531 36.23L27.8445 36.228C27.1053 36.0524 26.3404 35.9976 25.5824 36.0653L25.5235 36.0706L25.4733 36.1017C24.8808 36.4676 24.3549 36.925 23.9173 37.4549L23.9116 37.4618L23.9064 37.4692C23.0103 38.7281 21.588 39.56 20.0012 39.7482C18.4729 39.5537 17.1004 38.7616 16.21 37.565L16.2048 37.558L16.1991 37.5514C15.7381 37.0147 15.1855 36.5574 14.5656 36.1979L14.5187 36.1707L14.4648 36.1654C13.7052 36.0902 12.9376 36.1455 12.1983 36.3287L12.1909 36.3306L12.1837 36.3328C10.7695 36.7757 9.22764 36.6469 7.91708 35.9776C6.79768 34.9794 6.1754 33.5768 6.20122 32.1185L6.2014 32.1081L6.20072 32.0977C6.15333 31.3773 5.97354 30.6706 5.67041 30.0099L5.64722 29.9593L5.6048 29.9234C5.03039 29.4366 4.36249 29.0621 3.63933 28.82L3.63938 28.8198L3.63088 28.8173C2.185 28.3897 0.992646 27.4114 0.331556 26.1186C0.0758939 24.7316 0.426932 23.3029 1.30655 22.1674L1.30658 22.1675L1.30909 22.1641C1.78192 21.5321 2.1215 20.8172 2.30808 20.0598L2.32173 20.0044L2.30999 19.9485C2.15581 19.215 1.85907 18.5164 1.43554 17.8888L1.43099 17.8821L1.426 17.8756C0.546094 16.7392 0.195217 15.3097 0.451769 13.9216C1.07703 12.635 2.22597 11.6434 3.63779 11.1805L3.63781 11.1806L3.64346 11.1786C4.34486 10.9298 4.99087 10.5555 5.54687 10.0751L5.58798 10.0395L5.61064 9.99014C5.91381 9.32938 6.09323 8.62267 6.14095 7.90241L6.14153 7.89364L6.14149 7.88484C6.1355 6.44301 6.76142 5.06269 7.87151 4.07967C9.18256 3.41047 10.7243 3.28128 12.1385 3.72423L12.1457 3.72648L12.153 3.7283C12.8928 3.91186 13.6604 3.96717 14.4201 3.89164L14.474 3.88629L14.5208 3.85914C15.1408 3.49964 15.693 3.04231 16.1542 2.50575L16.161 2.49787L16.1671 2.48944C17.0556 1.26286 18.4468 0.448893 19.9998 0.251929C21.5277 0.446666 22.8998 1.23867 23.79 2.43496L23.7897 2.43515L23.7977 2.44485C24.2354 2.97518 24.761 3.43225 25.3537 3.79848L25.4029 3.82889L25.4605 3.83459C26.22 3.90978 26.9877 3.85448 27.727 3.67126L27.7343 3.66943L27.7416 3.66717C29.1565 3.22404 30.6992 3.35324 32.0102 4.02341C33.1572 5.00962 33.8066 6.41487 33.7987 7.88455L33.7987 7.89343L33.7993 7.90229C33.8467 8.62273 34.0265 9.32943 34.3296 9.99014L34.3528 10.0407L34.3952 10.0766C34.9696 10.5634 35.6375 10.9379 36.3607 11.18L36.3606 11.1802L36.3691 11.1827C37.815 11.6103 39.0074 12.5886 39.6684 13.8814C39.9241 15.2684 39.5731 16.6971 38.6934 17.8326L38.6934 17.8325L38.6909 17.8359C38.2181 18.4679 37.8785 19.1828 37.6919 19.9402L37.6775 19.9987L37.6913 20.0572C37.8646 20.7947 38.1827 21.4935 38.6281 22.1166Z"
        stroke="#F04D4B"
        strokeWidth="0.5"
      />
    </svg>
  );
}
