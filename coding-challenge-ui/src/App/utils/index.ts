import { Order } from "../types/types";

export const formatOrders = (orders: any) => {
  if (!orders?.length) return;

  return orders.map((order: any, index: number) => {
    return {
      key: `${order.Id}-${index}`,
      ...order
    };
  });
};

export const getFlagEmoji = (countryCode: string) => {
  if (!countryCode) return;

  const codePoints = countryCode
    .trim()
    .toUpperCase()
    .split("")
    .map((char: string) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};


export const overdueDays = (date: string) => {
  let currentDate: any = new Date();
  let latestDate: any = new Date(date);

  let overdueTime = Math.abs(currentDate - latestDate);
  return Math.ceil(overdueTime / (1000 * 3600 * 24));
}

export const ordersObjectCreator = (orders: Order[]) => {
  return orders.map((order: Order) => {
    return {
      ...order,
      overDueDays: overdueDays(order.latest_ship_date),
      orderTotal: (+order.items * +order.orderValue).toFixed(2)
    }
  });
};

