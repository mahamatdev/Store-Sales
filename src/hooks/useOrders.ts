import { useEffect, useState } from "react";

export interface Order {
  id: number;
  product: string;
  price: number;
  quantity: number;
  status: string;
  inStock: boolean;
}

function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/orders")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setOrders(data);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setError("Could not connect to server.");
        setLoading(false);
      });
  }, []);

  const addOrder = async (newOrder: Order) => {
    const response = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    const savedOrder = await response.json();

    setOrders((prev) => [...prev, savedOrder]);
  };

  const updateOrderStatus = async (id: number, status: string) => {
    await fetch(`http://localhost:3001/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order)),
    );
  };

  const updateStockStatus = async (id: number, inStock: boolean) => {
    await fetch(`http://localhost:3001/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inStock }),
    });

    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, inStock } : order)),
    );
  };

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0,
  );

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending",
  ).length;

  const averageOrderValue =
    orders.length > 0 ? totalRevenue / orders.length : 0;

  return {
    orders,
    setOrders,
    loading,
    error,
    addOrder,
    totalRevenue,
    pendingOrders,
    averageOrderValue,
    updateOrderStatus,
    updateStockStatus,
  };
}

export default useOrders;
