import { createSlice } from "@reduxjs/toolkit";

import { IModalInvoiceState } from "./IModalInvoiceState";
import { getModalInvoice } from "./ModalInvoiceThunks";

const initialState: IModalInvoiceState = {
  modalInvoice: {
    credit: {
      InvoiceType: 0,
      creditToPay: 0,
      dayOfWeek: 0,
      dropToPay: 0,
      totalToPayToday: 0,
    },

    invoice: {
      createdOnUtc: "",
      customerDebit: 0,
      deliveryStatus: "",
      id: "",
      invoiceDate: "",
      orderDisccount: 0,
      orders: "",
      pdfUrl: "",
      qtyCustomers: 0,
      qtyOrders: 0,
      status: "",
      storeCommisssion: 0,
      storeDebit: 0,
      storeId: "",
      storeName: "",
      storeOwner: "",
      storePhone: "",
      subTotal: 0,
    },

    metadata: {
      currentPage: 0,
      nextRefresh: 0,
      perPage: 0,
      totalPages: 0,
      updatedAt: "",
    },

    orderItems: [
      {
        PriceInclTax: 0,
        Quantity: 0,
        UnitPriceInclTax: 0,
        id: 0,
        idProduct: 0,
        name: "",
      },
    ],

    storeProfit: {
      historical: 0,
      month: 0,
      profitmonthdatefrom: "",
      profitweekdatefrom: "",
      today: 0,
      week: 0,
      profitweekdateto: "",
    },
  },
  isLoadingModalInvoice: false,
};

const modalInvoiceSlice = createSlice({
  name: "modalInvoice",
  initialState,
  reducers: {},
  extraReducers: {
    [getModalInvoice.pending.type]: (state) => {
      state.isLoadingModalInvoice = true;
    },
    [getModalInvoice.fulfilled.type]: (state, action) => {
      state.modalInvoice = action.payload;
      state.isLoadingModalInvoice = false;
    },
    [getModalInvoice.rejected.type]: (state) => {
      state.isLoadingModalInvoice = false;
    },
  },
});

/* Actions */

export const modalInvoiceReducer = modalInvoiceSlice.reducer;
