import { useState } from "react";
import type { Order, OrderStatus } from "../types/Order";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (newOrder: Order) => {
  setOrders((currentOrders) => [
    ...currentOrders,
    newOrder,
  ]);
  };

  const updateOrderStatus = (id: number, status: OrderStatus) => {
  setOrders((currentOrders) =>
    currentOrders.map((order) =>
      order.id === id ? { ...order, status } : order
    )
  );
};

const updateStock = (id: number, inStock: boolean) => {
  setOrders((currentOrders) =>
    currentOrders.map((order) =>
      order.id === id ? { ...order, inStock } : order
    )
  );
};

  const totalRevenue = orders.reduce((total, order) => {
  return total + order.price * order.quantity;
}, 0);

const pendingOrders = orders.filter((order) => {
  return order.status === "Pending";
}).length;

const averageOrderValue =
  orders.length > 0 ? totalRevenue / orders.length : 0;

return {
  orders,
  setOrders,
  addOrder,
  totalRevenue,
  pendingOrders,
  averageOrderValue,
  updateOrderStatus,
  updateStock,
};

}