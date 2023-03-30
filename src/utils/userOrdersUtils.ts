import { IOrder } from "dataflows/MisCompras/IOrder";

/**
 * get user favorite store function
 * @param {IOrder []} orders to add to cart
 * @returns {string|undefined} name of the customer's favorite store
 */
export const getUserFavoriteStore = (orders: IOrder[]): string | undefined => {
  const ocurrencesStores = [];
  for (let i = 0; i < orders.length; i++) {
    let numOccurrencesStore = 0;
    for (let j = 0; j < orders.length; j++) {
      if (orders[i]?.storeName == orders[j]?.storeName) {
        numOccurrencesStore++;
      }
    }
    ocurrencesStores.push(numOccurrencesStore);
  }
  const maxOccurence = Math.max(...ocurrencesStores);
  const indexStore = ocurrencesStores.indexOf(maxOccurence);
  return orders[indexStore]?.storeName;
};
