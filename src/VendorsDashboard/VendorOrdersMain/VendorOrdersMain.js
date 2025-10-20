import React, { useEffect, useState } from "react";
import classes from "./VendorOrdersMain.module.css";
import { baseUrl } from "../../App"; // adjust path to your baseUrl file

const VendorOrdersMain = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("vendorToken");
        if (!token) throw new Error("No vendor token found");

        const res = await fetch(`${baseUrl}/vendor/orders`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch orders");

        const data = await res.json();
        setOrders(data.orders || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className={classes.loaderWrapper}>
        <div className={classes.loader}></div>
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return <p className={classes.error}>Error: {error}</p>;
  }

  if (!orders.length) {
    return <p className={classes.empty}>No orders found.</p>;
  }

  return (
    <div className={classes.tableContainer}>
      <h2>Recent Orders</h2>
      <table className={classes.ordersTable}>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Items</th>
            <th>Total (₦)</th>
            <th>Delivery Type</th>
            <th>Address</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.first_name} {order.last_name}</td>
              <td>{order.email}</td>
              <td>{order.item_count}</td>
              <td>{order.total_amount.toLocaleString()}</td>
              <td className={classes.capitalize}>{order.delivery_type}</td>
              <td>{order.delivery_address || "—"}</td>
              <td>
                <span
                  className={`${classes.status} ${
                    order.status === "completed"
                      ? classes.completed
                      : order.status === "pending"
                      ? classes.pending
                      : classes.processing
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td>{new Date(order.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorOrdersMain;

