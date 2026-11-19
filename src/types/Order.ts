export type OrderStatus =
  | "Pending"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export type Order = {
  id: number;
  product: string;
  price: number;
  quantity: number;
  status?: OrderStatus;
  inStock?: boolean;
};