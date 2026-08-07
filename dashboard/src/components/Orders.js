import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    setLoading(true);
    axios
      .get("https://zerodha-clone-backend-uc3s.onrender.com/allOrders")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h2 className="title">Orders ({orders.length})</h2>
        <button
          onClick={fetchOrders}
          style={{
            background: "none",
            border: "1px solid #4184f3",
            color: "#4184f3",
            padding: "6px 14px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "0.8rem",
          }}
        >
          ↻ Refresh
        </button>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Type</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                {/* Instrument */}
                <td className="align-left">
                  <strong>{order.name}</strong>
                </td>

                {/* Buy / Sell badge */}
                <td>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 10px",
                      borderRadius: "3px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      background: order.mode === "BUY" ? "#ddeeff" : "#ffe0d9",
                      color: order.mode === "BUY" ? "#4184f3" : "#e74c3c",
                    }}
                  >
                    {order.mode}
                  </span>
                </td>

                {/* Qty */}
                <td>{order.qty}</td>

                {/* Price */}
                <td>
                  {Number(order.price) === 0
                    ? "Market"
                    : `₹${Number(order.price).toFixed(2)}`}
                </td>

                {/* Status — all saved orders are executed */}
                <td>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 10px",
                      borderRadius: "3px",
                      fontSize: "0.75rem",
                      background: "#e6f9ed",
                      color: "#27ae60",
                      fontWeight: "500",
                    }}
                  >
                    COMPLETE
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;