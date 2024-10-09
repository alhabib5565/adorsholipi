import { Button } from "@/components/ui/button";
import { Download, Printer, QrCode } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

const PrintOrDownLoadQRCode = ({ qrCodeURLs }: { qrCodeURLs: string[] }) => {
  const printRef = useRef<HTMLDivElement | null>(null); // Reference for the print area

  const handlePrint = () => {
    if (printRef.current) {
      const printContent = printRef.current.innerHTML; // Get the HTML content of the print area
      const originalContent = document.body.innerHTML; // Save the original content

      document.body.innerHTML = printContent; // Replace body content with print content
      window.print(); // Trigger the print dialog
      toast.success("Print Successfull");
      document.body.innerHTML = originalContent; // Restore the original content
      window.location.reload(); // Reload the page to reset state
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
      <div ref={printRef} style={{ display: "none", gap: 10 }}>
        {qrCodeURLs.map((url, index) => (
          <img
            key={index}
            src={url}
            style={{ maxWidth: "150px", display: "inline" }}
          />
        ))}
      </div>

      <p className="text-center w-fit mx-auto text-gray-700 text-lg font-medium leading-normal tracking-tightp-2.5 bg-[#ebfff8] rounded ">
        {qrCodeURLs.length} QR codes generated
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

export default PrintOrDownLoadQRCode;
