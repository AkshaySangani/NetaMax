import React from "react";

import { useSelector } from "react-redux";

import { LayoutShopsContainer } from "containers/Shops/Layout/ShopsLayoutContainer";
import { ShopsLoginContainer } from "containers/Shops/ShopsLogin/ShopsLoginContainer";
import { selectIsAuth } from "dataflows/Shops/Login/LoginSelectors";
import { NextComponentType } from "next";

/**
 * WithAuth HOC
 * @param {NextComponentType} Component component to check
 * @returns {React.FC<T>} React FC
 */
function withAuth<T>(Component: NextComponentType<T>): React.FC<T> {
  /**
   * Check if shop user is authenticated
   * @param {T} props component props
   * @returns {NextComponentType} Component
   */
  const Auth = (props: T) => {
    const isAuth = useSelector(selectIsAuth);

    // If user is not logged in, return shops login component
    if (!isAuth) {
      return <ShopsLoginContainer />;
    }

    // If user is logged in, return original component
    return (
      <LayoutShopsContainer>
        <Component {...props} />
      </LayoutShopsContainer>
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
