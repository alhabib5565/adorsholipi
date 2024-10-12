import { Download, Printer, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TQRCode } from "./type.qrcode";

type TPrintOrDownloadPageProps = {
  qrCodes: Pick<TQRCode, "uniqueCode" | "qrCodeURL">[];
};

const PrintOrDownloadQRCode = ({ qrCodes }: TPrintOrDownloadPageProps) => {
  const qrCodeURLs = qrCodes.map((code) => code.qrCodeURL);
  const imagesHtml = qrCodes
    .map(
      (code) =>
        `<img src="${code.qrCodeURL}" style="max-width: 150px; margin: 10px;" />`
    )
    .join("");

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
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

  const handleDownloadAll = () => {
    qrCodeURLs.forEach((url, index) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = `qr-code-${index + 1}.png`; // Unique names for each downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="border p-4 space-y-6">
      <div className="grid grid-cols-2 gap-4 size-[260px] mx-auto">
        <QrCode className="w-full h-full" />
        <QrCode className="w-full h-full" />
        <QrCode className="w-full h-full" />
        <QrCode className="w-full h-full" />
      </div>

      <p className="text-center w-fit mx-auto text-gray-700 text-lg font-medium leading-normal tracking-tight p-2.5 bg-[#ebfff8] rounded">
        {qrCodes.length} QR codes generated
      </p>

      <div className="flex gap-4 justify-center">
        <Button className="w-full" onClick={handleDownloadAll}>
          <Download className="size-5 mr-2" /> Download All
        </Button>
        <Button className="w-full" onClick={handlePrint}>
          <Printer className="size-5 mr-2" /> Print
        </Button>
      </div>
    </div>
  );
};

export default PrintOrDownloadQRCode;
