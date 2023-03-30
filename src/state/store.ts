/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { createFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import { authReducer } from "dataflows/Auth/AuthSlice";
import { basketReducer } from "dataflows/Basket/BasketSlice";
import { categoryReducer } from "dataflows/Category/CategorySlice";
import { checkoutReducer } from "dataflows/Checkout/CheckoutSlice";
import { eventTrackingReducer } from "dataflows/EventTracking/EventTrackingSlice";
import { ganaDineroReducer } from "dataflows/GanaDinero/GanaDineroSlice";
import { legalAgeReducer } from "dataflows/LegalAge/LegalAgeSlice";
import { misComprasReducer } from "dataflows/MisCompras/MisComprasSlice";
import { historialMonetasReducer } from "dataflows/Monetas/HistorialMonetasSlice";
import { nodeReducer } from "dataflows/Node/NodeSlice";
import { nopAuthReducer } from "dataflows/NopAuth/NopAuthSlice";
import { nopOrdersReducer } from "dataflows/OrderDetails/OrderSlice";
import { popupReducer } from "dataflows/Popup/PopupSlice";
import { categoryProductsReducer } from "dataflows/Product/CategoryProducts/CategoryProductsSlice";
import { megaPromosSectionReducer } from "dataflows/Product/MegaPromosSection/MegaPromosSectionSlice";
import { nodeProductsReducer } from "dataflows/Product/NodeProducts/NodeProductsSlice";
import { promotionProductsReducer } from "dataflows/Product/PromotionProducts/PromotionProductsSlice";
import { recommendedProductsReducer } from "dataflows/Product/RecommendedProducts/RecommendedProductsSlice";
import { searchReducer } from "dataflows/Product/Search/SearchSlice";
import { productReducer } from "dataflows/Product/SelectedProduct/SelectedProductSlice";
import { promotionReducer } from "dataflows/Promotion/PromotionSlice";
import { clientsReducer } from "dataflows/Shops/Clients/ClientsSlice";
import { deliverOrderReducer } from "dataflows/Shops/DeliverOrder/DeliverOrderSlice";
import { invoicesReducer } from "dataflows/Shops/Invoices/InvoicesSlice";
import { loginReducer } from "dataflows/Shops/Login/LoginSlice";
import { modalInvoiceReducer } from "dataflows/Shops/ModalInvoice/ModalInvoiceSlice";
import { ordersReducer } from "dataflows/Shops/Orders/OrdersSlice";
import { salesReducer } from "dataflows/Shops/Sales/SalesSlice";
import { shopInfoReducer } from "dataflows/Shops/ShopInfo/ShopsInfoSlice";
import { trackingReducer } from "dataflows/Shops/Tracking/TrackingSlice";
import { storeReducer } from "dataflows/Stores/IStoreSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const saveSubsetAuthFilter = createFilter("auth", [
  "accessToken",
  "customer",
  "refreshToken",
  "deviceId",
]) as any;
const saveSubsetPopupFilter = createFilter("popup", ["popupShown"]) as any;
const saveSubsetGanaDineroFilter = createFilter("ganaDinero", [
  "coinsBeforeLogin",
  "isGMVNotified",
]) as any;

const rootPersistConfig = {
  key: "root",
  version: 2.1,
  storage,
  whitelist: ["basket", "auth", "popup", "ganaDinero", "legalAge", "store"],
  transforms: [saveSubsetAuthFilter, saveSubsetPopupFilter, saveSubsetGanaDineroFilter],
};

const shopsPersistConfig = {
  key: "login",
  version: 2.1,
  storage,
  whitelist: ["isAuth", "token", "shopUser"],
  blacklist: ["otpCodeError", "countDown", "currentStep"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  basket: basketReducer,
  category: categoryReducer,
  products: combineReducers({
    categoryProducts: categoryProductsReducer,
    promotionProducts: promotionProductsReducer,
    megaPromosSection: megaPromosSectionReducer,
    nodeProducts: nodeProductsReducer,
    selectedProduct: productReducer,
    search: searchReducer,
    recommendedProducts: recommendedProductsReducer,
  }),
  monetas: historialMonetasReducer,
  checkout: checkoutReducer,
  store: storeReducer,
  promotion: promotionReducer,
  node: nodeReducer,
  popup: popupReducer,
  nopAuth: nopAuthReducer,
  nopOrders: nopOrdersReducer,
  tracking: trackingReducer,
  ganaDinero: ganaDineroReducer,
  misCompras: misComprasReducer,
  shops: combineReducers({
    shopInfo: shopInfoReducer,
    login: persistReducer(shopsPersistConfig, loginReducer),
    clients: clientsReducer,
    modalInvoice: modalInvoiceReducer,
    orders: ordersReducer,
    invoices: invoicesReducer,
    sales: salesReducer,
    deliverOrder: deliverOrderReducer,
  }),
  eventTracking: eventTrackingReducer,
  legalAge: legalAgeReducer,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type NetaStore = typeof store;
