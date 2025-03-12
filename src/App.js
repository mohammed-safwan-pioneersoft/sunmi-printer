import React from "react";

const App = () => {
  const printReceipt = () => {
    if (window.SunmiInnerPrinter) {
      try {
        window.SunmiInnerPrinter.printerInit(); // Initialize printer
        window.SunmiInnerPrinter.setAlignment(1); // Center align
        window.SunmiInnerPrinter.printOriginalText("Your Store\n");
        window.SunmiInnerPrinter.setAlignment(0); // Left align

        window.SunmiInnerPrinter.printOriginalText("Receipt #12345\n");
        window.SunmiInnerPrinter.printOriginalText("-------------------------\n");

        window.SunmiInnerPrinter.printOriginalText("Coffee    1 x $5.00\n");
        window.SunmiInnerPrinter.printOriginalText("Tea       2 x $3.00\n");

        window.SunmiInnerPrinter.printOriginalText("-------------------------\n");
        window.SunmiInnerPrinter.printOriginalText("Total:       $11.00\n");
        window.SunmiInnerPrinter.printOriginalText("-------------------------\n");

        window.SunmiInnerPrinter.setAlignment(1);
        window.SunmiInnerPrinter.printOriginalText("Thank You!\n");

        window.SunmiInnerPrinter.lineWrap(3); // Feed paper
      } catch (err) {
        console.error("Sunmi print error:", err);
      }
    } else {
      console.error("SunmiInnerPrinter not available");
    }
  };

  return (
    <div>
      <h1>Sunmi Thermal Print Test</h1>
      <button onClick={printReceipt}>Print Receipt</button>
    </div>
  );
};

export default App;
