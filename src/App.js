import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const App = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <h1>Thermal Printer Test (58x160mm)</h1>
      <button onClick={handlePrint}>Print Receipt</button>

      {/* This is the content that will be printed */}
      <div style={{ display: "none" }}>
        <div ref={componentRef} style={{ width: "58mm", margin: "0 auto", fontFamily: "'Courier', monospace", fontSize: "14px" }}>
          <div style={{ textAlign: "center" }}>
            <h2>Your Store</h2>
          </div>
          <div style={{ textAlign: "center" }}>Receipt #12345</div>
          <div style={{ borderTop: "1px dashed black", margin: "5px 0" }}></div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Coffee</span> <span>1 x $5.00</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Tea</span> <span>2 x $3.00</span>
          </div>

          <div style={{ borderTop: "1px dashed black", margin: "5px 0" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Total</strong> <strong>$11.00</strong>
          </div>

          <div style={{ borderTop: "1px dashed black", margin: "5px 0" }}></div>
          <div style={{ textAlign: "center" }}>Thank You!</div>
        </div>
      </div>
    </div>
  );
};

export default App;