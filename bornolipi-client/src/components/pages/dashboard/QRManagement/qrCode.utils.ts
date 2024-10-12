import { THandlePrintProps } from "./type.qrcode";

export const formatToTargetDate = (dateStr: string) => {
  const targetDate = new Date(dateStr);

  // Format the date to "YYYY-MM-DD hh:mm AM/PM"
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return targetDate.toLocaleString("en-US", options).replace(",", "");
};

export const handlePrint = (qrCodes: THandlePrintProps[]) => {
  const imagesHtml = qrCodes
    .map(
      (code) =>
        `<img src="${code.qrCodeURL}" style="max-width: 150px; margin: 10px;" />`
    )
    .join("");

  const printWindow = window.open("", "_blank");
  console.log(printWindow, "printWind");
  if (printWindow && imagesHtml) {
    printWindow.document.write(`
        <html>
          <head>
            <title>Print QR Codes</title>
            <style>
              body {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: flex-start;
                height: auto;
                margin: 0;
                padding: 0;
                gap: 16px;
              }
              img {
                max-width: 100%;
                height: auto;
              }
            </style>
          </head>
          <body>
            ${imagesHtml}
          </body>
        </html>
      `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();

    printWindow.close();
  }
};
