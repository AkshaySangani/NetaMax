import { useEffect, useRef, useState } from "react";

import { BsChevronCompactLeft } from "react-icons/bs";

import { SUPPORT_CHAT_CLICKED, TrackerApp } from "constants/amplitudeConstants";
import { HELP_LINK } from "constants/navBarConstants";
import throttle from "lodash.throttle";
import Link from "next/link";
import NetaLogo from "styled/icons/NetaLogo";
import { screenSizes } from "styled/screen";
import { trackEvent } from "utils/tracker";

import { useMediaQuery, Box, Flex, Img, Spacer, Text } from "@chakra-ui/react";

import { BasketButton } from "./BasketButton/BasketButton";
import { INavBarProps } from "./INavBarProps";
import { GreenCircle, HelpButton, NavBarContainer, WhiteCircle } from "./NavBar.styled";
import { SearchBar } from "./SearchBar";
import { StoreSelector } from "./StoreSelector";
import { TabMenu } from "./TabMenu/TabMenu";
import { TabMenuDesktop } from "./TabMenu/TabMenu.styled";

/**
 * The NavBar component.
 * @param {INavBarProps} props The component props
 * @returns {React.ReactElement} The NavBar component
 */
export const NavBar = (props: INavBarProps): React.ReactElement => {
  const {
    isHome,
    store,
    onAddToBasketClick,
    onSearchInputChange,
    getQtyInBasket,
    onRemoveFromBasketClick,
    productSearch,
    searchInputValue,
    isLoadingSearchProduct,
    goBack,
    clearSearch,
    handleSearchProducts,
    emptySearchMessage,
    hasMoreProducts,
    onOpen,
    totalBasketItems,
    coins,
  } = props;

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const [isLargerThanSm] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const btnRef = useRef<HTMLButtonElement>(null);

  const isSearchBarFullWidth =
    isSearchBarFocused || (productSearch && productSearch.length > 0) || emptySearchMessage !== "";
  const isNavBarCollapsed = isSearchBarFullWidth || hasScrolled || !isHome;

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = document.getElementById("header")?.offsetHeight || 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 250);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);
  /**
   * Renders the NavBar mobile component.
   * @returns {React.ReactElement} The NavBar mobile component
   */
  const renderMobileNavBar = (): React.ReactElement => {
    return (
      <NavBarContainer
        maxW="container.xl"
        backgroundColor="#F54A49"
        sx={{ position: "sticky", top: "-1px" }}
        zIndex={3}
        $isNavBarCollapsed={isNavBarCollapsed}
        $isSearchBarFullWidth={isSearchBarFullWidth}
      >
        <Flex
          id="header"
          flexDir="column"
          p={isNavBarCollapsed ? "10px 0 0" : "10px 0 0"}
          justifyContent="space-between"
        >
          <Flex justifyContent="space-between">
            {!isNavBarCollapsed && (
              <>
                <Link href="/" passHref>
                  <a href="inherit" rel="noopener noreferrer">
                    <NetaLogo />
                  </a>
                </Link>
                <Spacer />
                <Help isHidden={false} isCollapsedHelp={false} />
                <Flex pl={5}>
                  <WhiteCircle>
                    <GreenCircle>
                      <BasketButton
                        onClick={onOpen}
                        totalItems={totalBasketItems}
                        btnRef={btnRef}
                      />
                    </GreenCircle>
                  </WhiteCircle>
                </Flex>
              </>
            )}
          </Flex>
          <Flex direction="column" pb={store?.name || isNavBarCollapsed ? "0" : "25px"}>
            {!isNavBarCollapsed && (
              <>{store?.name && <StoreSelector hasPadding storeName={store.name} />}</>
            )}
          </Flex>
          <Flex justifyContent="space-between">
            <Flex hidden={isHome} pt={1.5} ml={-2} cursor="pointer">
              <BsChevronCompactLeft onClick={goBack} color="white" fontSize="1.8rem" />
            </Flex>
            <Flex pb={2} width={(!hasScrolled && isHome) || isSearchBarFullWidth ? "100%" : "80%"}>
              <SearchBar
                value={searchInputValue}
                onChange={(e) => {
                  onSearchInputChange(e);
                }}
                clearSearchProducts={() => {
                  clearSearch();
                  setIsSearchBarFocused(false);
                }}
                onAddToBasketClick={onAddToBasketClick}
                onRemoveFromBasketClick={onRemoveFromBasketClick}
                getQtyInBasket={getQtyInBasket}
                products={productSearch}
                onFocusIn={(): void => setIsSearchBarFocused(true)}
                onFocusOut={(): void => {
                  setIsSearchBarFocused(false);
                  clearSearch();
                }}
                isLoadingSearchProduct={isLoadingSearchProduct}
                handleSearchProducts={handleSearchProducts}
                emptySearchMessage={emptySearchMessage}
                hasMoreProducts={hasMoreProducts}
              />
            </Flex>
            <Spacer />
            <Flex pl={4} pb={2} alignSelf="center">
              <Help
                isCollapsedHelp={true}
                isHidden={isSearchBarFullWidth || (!hasScrolled && isHome)}
              />
              {!isSearchBarFullWidth && !(!hasScrolled && isHome) ? (
                <Flex pl={2}>
                  <WhiteCircle>
                    <GreenCircle>
                      <BasketButton
                        onClick={onOpen}
                        totalItems={totalBasketItems}
                        btnRef={btnRef}
                      />
                    </GreenCircle>
                  </WhiteCircle>
                </Flex>
              ) : null}
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <TabMenu
              isNavBarCollapsed={isNavBarCollapsed}
              netaWalletBalance={coins?.customerCurrentNetaWallet}
            />
          </Flex>
        </Flex>
      </NavBarContainer>
    );
  };

  /**
   * Renders the NavBar desktop component.
   * @returns {React.ReactElement} The NavBar desktop component
   */
  const renderDesktopNavBar = (): React.ReactElement => {
    return (
      <Box
        maxW="100%"
        h="120px"
        background="#F54A49"
        sx={{ position: "sticky", top: "-1px" }}
        zIndex={3}
      >
        <NavBarContainer maxW="100%">
          <Flex
            id="header"
            flexDir="column"
            p={"10px 0"}
            justifyContent="space-between"
            maxHeight="65px"
          >
            <Flex justifyContent="space-between">
              <Flex>
                <Link href="/" passHref>
                  <a href="inherit" rel="noopener noreferrer">
                    <Box pr={4}>
                      <NetaLogo />
                    </Box>
                  </a>
                </Link>
                <Flex minW={{ base: "270px", sm: "480px" }}>
                  <SearchBar
                    value={searchInputValue}
                    onChange={(e) => {
                      onSearchInputChange(e);
                    }}
                    clearSearchProducts={clearSearch}
                    onAddToBasketClick={onAddToBasketClick}
                    onRemoveFromBasketClick={onRemoveFromBasketClick}
                    getQtyInBasket={getQtyInBasket}
                    products={productSearch}
                    onFocusIn={(): void => setIsSearchBarFocused(true)}
                    onFocusOut={(): void => {
                      setIsSearchBarFocused(false);
                      clearSearch();
                    }}
                    isLoadingSearchProduct={isLoadingSearchProduct}
                    handleSearchProducts={handleSearchProducts}
                    emptySearchMessage={emptySearchMessage}
                    hasMoreProducts={hasMoreProducts}
                  />
                </Flex>
              </Flex>
              <Spacer />
              <Flex>
                {store?.name && <StoreSelector storeName={store.name} pr={5} />}
                <Help isHidden={false} isCollapsedHelp={false} />
                <Flex pl={5}>
                  <WhiteCircle>
                    <BasketButton onClick={onOpen} totalItems={totalBasketItems} btnRef={btnRef} />
                  </WhiteCircle>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <TabMenuDesktop>
            <TabMenu netaWalletBalance={coins?.customerCurrentNetaWallet} />
          </TabMenuDesktop>
        </NavBarContainer>
      </Box>
    );
  };

  return isLargerThanSm ? renderDesktopNavBar() : renderMobileNavBar();
};

/**
 * The help component.
 * @param {{isHidden: boolean, isCollapsedHelp : boolean}} props the help props
 * @returns {React.ReactElement} the help component
 */
const Help = (props: { isHidden: boolean; isCollapsedHelp: boolean }): React.ReactElement => {
  return props.isCollapsedHelp ? (
    <Link href={HELP_LINK} passHref>
      <a href="inherit" target="_blank" rel="noopener noreferrer">
        <HelpButton
          bg="white"
          height="40px"
          minWidth={"40px"}
          rounded="full"
          alignItems="center"
          justifyContent="space-around"
          hidden={props.isHidden}
          onClick={() =>
            trackEvent(SUPPORT_CHAT_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment])
          }
        >
          <Img height="31px" src="/assets/images/customer-service.png" />
        </HelpButton>
      </a>
    </Link>
  ) : (
    <Link href={HELP_LINK} passHref>
      <a href="inherit" target="_blank" rel="noopener noreferrer">
        <HelpButton
          bg="white"
          height="40px"
          minWidth="109px"
          rounded="full"
          alignItems="center"
          justifyContent="flex-start"
          onClick={() =>
            trackEvent(SUPPORT_CHAT_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment])
          }
        >
          <Img pl="4px" height="31px" src="/assets/images/customer-service.png" />
          <Text pl="6px" fontWeight="700">
            Ayuda
          </Text>
        </HelpButton>
      </a>
    </Link>
  );
};
