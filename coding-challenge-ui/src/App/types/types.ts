export enum ACTION {
  SET_USER = "set_user",
}

export type ReducerAction = {
  type: ACTION;
  payload: any;
};

export type ReducerState = {
  loggedInUser: User | null;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
};

export type Order = {
  Id: string,
  destination: string,
  items: string,
  key: string,
  latest_ship_date: string,
  orderId: string,
  orderValue: string,
  shipment_status: string,
  store: {},
  storeId: string,
  taxes: string
}