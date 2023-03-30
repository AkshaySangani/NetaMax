import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IOrderDetails } from "./IOrderDetails";
import { IOrderItem } from "./IOrderItem";

const NOP_API_URL = process.env.NEXT_PUBLIC_NOP_API_URL;
export const getOrderItems = createAsyncThunk<IOrderDetails | undefined, string, { state: any }>(
  "nopOrder/getOrderItems",
  async (orderId: string, { getState }) => {
    // Set token to axios requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${getState().nopAuth.token}`;

    // Obtain order_total, order_subtotal_excl_tax & order_discount from Order By Id
    const orderById_response = await axios.get(`${NOP_API_URL}/Order/GetById/${orderId}`);
    const orderById = (await orderById_response.data) as any;
    const { order_total, order_subtotal_excl_tax, order_discount } = orderById;

    // Obtain quantity, product_id, price_incl_tax and productsId from Order's response
    const itemsByOrderId_response = await axios.get(
      `${NOP_API_URL}/orderItem/GetOrderItems/${orderId}`
    );
    const itemsByOrderId = (await itemsByOrderId_response.data) as any;

    const orderItems = itemsByOrderId.map((item: IOrderItem) => ({
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.unit_price_incl_tax,
    }));

    const productIds = itemsByOrderId.map((item: IOrderItem) => item.product_id);

    // Obtain products's names.
    const ids = productIds.join(";");
    const product_response = await axios.get(`${NOP_API_URL}/Product/GetProductsByIds/${ids}`);
    const products = (await product_response.data) as any;
    const names = products.map((product: any) => product.name);

    // Create array of quantity, price and names for return
    const array: IOrderItem[] = [];

    for (let i = 0; i < names.length; i++) {
      const name: string = names[i];
      const quantity: number = orderItems[i].quantity;
      const unit_price_incl_tax: number = orderItems[i].price;
      const product_id: number = orderItems[i].product_id;
      array.push({ product_id, name, quantity, unit_price_incl_tax });
    }

    const orderDetails = { items: array, order_total, order_subtotal_excl_tax, order_discount };

    if (orderById !== undefined) return orderDetails as IOrderDetails;
    else return undefined;
  }
);
