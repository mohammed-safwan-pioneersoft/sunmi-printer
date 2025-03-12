import React from "react";

const App = () => {
  const printReceipt = () => {
    const content = `
      <html>
      <head>
        <title>Receipt</title>
        <style>
          @page {
            size: 58mm 160mm;
            margin: 0;
          }
          body {
            font-family: 'Courier', monospace;
            font-size: 14px;
            width: 58mm;
            margin: 0;
            padding: 5px;
          }
          .center { text-align: center; }
          .line { border-top: 1px dashed black; margin: 5px 0; }
          .item { display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="center"><h2>Your Store</h2></div>
        <div class="center">Receipt #12345</div>
        <div class="line"></div>

        <div class="item">
          <span>Coffee</span> <span>1 x $5.00</span>
        </div>
        <div class="item">
          <span>Tea</span> <span>2 x $3.00</span>
        </div>

        <div class="line"></div>
        <div class="item">
          <strong>Total</strong> <strong>$11.00</strong>
        </div>

        <div class="line"></div>
        <div class="center">Thank You!</div>
      </body>
      </html>
    `;

    const printWindow = window.open("", "", "width=580,height=1600");
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div>
      <h1>Thermal Printer Test 2 (58x160mm)</h1>
      <button onClick={printReceipt}>Print Receipt</button>
    </div>
  );
};

export default App;