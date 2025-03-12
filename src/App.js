import React, { useRef } from "react";
import html2canvas from "html2canvas";

const Receipt = () => {
  const receiptRef = useRef();

  const handlePrint = () => {
    html2canvas(receiptRef.current, {
      scale: 2, // Adjust the scale for better print quality
      backgroundColor: "#fff", // White background
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const windowContent = window.open("", "Print", "width=600,height=600");
      windowContent.document.write(
        `<img src="${imgData}" style="width: 100%; height: auto;">`
      );
      windowContent.document.close();
      windowContent.print();
    });
  };

  return (
    <div>
      <div ref={receiptRef} style={styles.receipt}>
        <h2 style={styles.title}>Store Name</h2>
        <p style={styles.subtitle}>Receipt</p>
        <div style={styles.details}>
          <p>Date: 2025-03-12</p>
          <p>Time: 15:00</p>
          <p>Transaction ID: #12345</p>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Item</th>
              <th style={styles.tableHeader}>Qty</th>
              <th style={styles.tableHeader}>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>1</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>2</td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td>$20.00</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.footer}>Thank you for your purchase!</p>
      </div>
      <button onClick={handlePrint} style={styles.printButton}>
        Print Receipt
      </button>
    </div>
  );
};

const styles = {
  receipt: {
    width: "58mm", // Matching your thermal printer paper size
    padding: "10px",
    fontFamily: "monospace",
    fontSize: "12px",
    lineHeight: "1.5",
    border: "1px dashed #ccc",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "10px",
  },
  details: {
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
  },
  tableHeader: {
    textAlign: "left",
    padding: "4px 0",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc",
  },
  printButton: {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
  footer: {
    textAlign: "center",
    fontSize: "12px",
    marginTop: "10px",
    color: "#555",
  },
};

export default Receipt;
