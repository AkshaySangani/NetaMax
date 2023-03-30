import { ReactElement } from "react";

/**
 * The icon for the banner.
 * @param {Record<string, string>} props props
 * @returns {ReactElement} The icon.
 */
export default function StoreIcon(props: Record<string, string>): ReactElement {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.01962 0.0033074C10.8734 0.0033074 12.7267 -0.000563689 14.58 0.0033074C15.934 0.00717848 16.955 0.864347 17.2278 2.24245C17.365 2.93759 17.4618 3.64213 17.5745 4.3439C17.7006 5.12641 17.8085 5.91224 17.9526 6.69033C18.0994 7.4839 17.8968 8.17572 17.4575 8.81334C17.3555 8.9672 17.2318 9.10422 17.0906 9.21981C16.9949 9.29557 16.9704 9.38073 16.9704 9.50074C16.9739 11.4075 16.9739 13.3139 16.9704 15.22C16.9704 16.4842 16.2041 17.546 15.0592 17.8949C14.8232 17.9665 14.5786 18.0026 14.3327 18.0022C10.7786 18.0022 7.22466 18.0022 3.67089 18.0022C3.32488 18.0026 2.98219 17.932 2.66239 17.7947C2.34259 17.6573 2.05195 17.4557 1.80706 17.2015C1.56217 16.9473 1.36784 16.6455 1.23515 16.3132C1.10246 15.9808 1.03403 15.6246 1.03375 15.2648C1.0263 13.358 1.03056 11.449 1.03375 9.54498C1.03807 9.48162 1.02761 9.41811 1.00326 9.35986C0.978912 9.30161 0.94139 9.25034 0.893887 9.21041C0.308919 8.67675 -0.0223844 8.00484 -0.00164457 7.19357C0.00952301 6.75614 0.120134 6.32147 0.189798 5.88625C0.388156 4.64806 0.573215 3.40765 0.791249 2.17333C1.00396 0.9567 2.07339 0.0226636 3.25769 0.0127093C5.17745 -0.00222198 7.09721 0.00883786 9.01697 0.00883786L9.01962 0.0033074ZM9.02495 1.06675H4.93921C4.42124 1.06675 3.90275 1.06122 3.38479 1.06675C2.55785 1.07781 1.92609 1.60704 1.78197 2.44596C1.54479 3.82407 1.32995 5.20605 1.11085 6.58747C1.06937 6.85181 0.980567 7.11338 1.01247 7.38381C1.06349 7.76632 1.23917 8.11904 1.51018 8.38305C1.78119 8.64706 2.13111 8.80637 2.50148 8.83436C2.87545 8.86269 3.24729 8.75541 3.55377 8.53078C3.86024 8.30614 4.08241 7.97802 4.18247 7.60225C4.22714 7.43634 4.22661 7.26104 4.25107 7.09071C4.2653 6.95894 4.32787 6.83795 4.42575 6.75296C4.52362 6.66797 4.64926 6.62553 4.77648 6.63448C5.06099 6.64609 5.24233 6.85845 5.26147 7.20408C5.32103 8.29241 6.23943 9.02902 7.24664 8.79399C7.58834 8.71051 7.89448 8.51327 8.11852 8.23228C8.34256 7.95129 8.47223 7.60191 8.48783 7.23726C8.50485 6.88223 8.67237 6.66268 8.94624 6.63614C9.27808 6.60461 9.50302 6.8319 9.51951 7.22012C9.54078 7.73331 9.74073 8.15637 10.1284 8.46992C10.6384 8.88247 11.2069 8.96211 11.7945 8.68449C12.3821 8.40688 12.6985 7.89756 12.7453 7.22122C12.7703 6.85955 12.9453 6.64443 13.2351 6.63448C13.5436 6.62342 13.7366 6.82305 13.7669 7.19634C13.7747 7.35491 13.799 7.51214 13.8392 7.66529C13.9643 8.07452 14.2351 8.41852 14.5962 8.62682C14.9573 8.83513 15.3813 8.89197 15.7813 8.78569C16.7077 8.52854 17.0922 7.57792 16.9582 6.87172C16.6923 5.46486 16.4796 4.04583 16.2615 2.63012C16.102 1.62419 15.4974 1.0662 14.5231 1.06564L9.02495 1.06675ZM13.2548 8.79233C12.0801 10.2484 10.2768 10.2855 9.08451 8.88081C8.97336 8.7503 8.95315 8.85703 8.90316 8.9151C8.15015 9.7872 7.2259 10.0897 6.13786 9.78775C5.57044 9.63125 5.11895 9.27732 4.75521 8.79233C4.05254 9.68932 3.15825 10.0421 2.07233 9.8508C2.0674 9.87507 2.06384 9.89963 2.06169 9.92435C2.06169 11.7205 2.05478 13.5189 2.06648 15.3123C2.06745 15.729 2.2227 16.1292 2.49998 16.4299C2.77726 16.7306 3.15526 16.9087 3.55549 16.9271C4.43081 16.9636 5.3104 16.9388 6.18519 16.9504C6.33622 16.9504 6.37291 16.9089 6.37185 16.754C6.36547 15.559 6.36812 14.3645 6.36865 13.1694C6.36865 12.6971 6.54042 12.5158 6.99244 12.5158C8.33468 12.5158 9.67656 12.5158 11.0181 12.5158C11.4717 12.5158 11.6435 12.6966 11.644 13.1678C11.644 14.3623 11.644 15.5573 11.6408 16.7524C11.6408 16.9045 11.6722 16.952 11.8259 16.9504C12.6294 16.9421 13.4335 16.9504 14.237 16.9443C14.3896 16.9464 14.542 16.9307 14.6912 16.8973C15.4665 16.7081 15.9483 16.0539 15.9494 15.1896C15.9519 13.4693 15.9519 11.7493 15.9494 10.0294C15.9494 9.96859 15.9637 9.90499 15.9308 9.84969C14.8411 10.0416 13.9573 9.68102 13.2548 8.79067V8.79233ZM7.38012 15.2626C7.38012 15.7669 7.38012 16.2713 7.38012 16.7751C7.38012 16.8702 7.37214 16.947 7.50722 16.9465C8.50379 16.9421 9.50018 16.9421 10.4964 16.9465C10.6028 16.9465 10.6309 16.9083 10.6304 16.8022C10.6272 15.7728 10.6272 14.7437 10.6304 13.7147C10.6304 13.5941 10.5916 13.5659 10.4815 13.5665C9.49877 13.5705 8.51567 13.5705 7.53221 13.5665C7.40671 13.5665 7.37639 13.6057 7.37799 13.7324C7.38384 14.2389 7.38012 14.7505 7.38012 15.2615V15.2626Z"
        fill={props.fill}
      />
    </svg>
  );
}