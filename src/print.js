import { useEffect } from 'react';

const SunmiPrinterPage = () => {
  const printReceipt = () => {
    if (window.sunmiInnerPrinter) {
      try {
        // Set font size (30 for large text)
        window.sunmiInnerPrinter.setFontSize(30);

        // Print header
        window.sunmiInnerPrinter.printText("=== RECEIPT ===\n");

        // Print body
        window.sunmiInnerPrinter.printText("Item: Coffee\n");
        window.sunmiInnerPrinter.printText("Price: $5.00\n");
        window.sunmiInnerPrinter.printText("--------------------\n");

        // Print footer
        window.sunmiInnerPrinter.printText("Thank you!\n");

        // Cut paper (if supported)
        window.sunmiInnerPrinter.cutPaper();
      } catch (error) {
        console.error("Error printing receipt:", error);
      }
    } else {
      alert("Sunmi printer not available");
    }
  };

  useEffect(() => {
    printReceipt();
  }, []);

  return (
    <div>
      <h1>Sunmi Printer Test</h1>
      <button onClick={printReceipt}>Print Receipt</button>
    </div>
  );
};

export default SunmiPrinterPage;