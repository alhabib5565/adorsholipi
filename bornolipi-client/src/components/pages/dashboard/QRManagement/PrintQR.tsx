import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MyPagination from "@/components/myUi/MyPagination";
import PageHeader from "@/components/shared/PageHeader";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useGetAllQRCodsQuery } from "@/redux/api/qr-code.api";
import { THandlePrintProps, TQRCode } from "./type.qrcode";
import { formatToTargetDate, handlePrint } from "./qrCode.utils";
import { Eye, LucidePrinter, Printer, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const activationPageTabItems = [
  {
    lebel: "All",
    value: "all",
  },
  {
    lebel: "New QR Code",
    value: "new",
  },
  {
    lebel: "Un painted",
    value: "Un Painted",
  },
  {
    lebel: "Painted",
    value: "Painted",
  },
];

const PrintQR = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedQRCodes, setSelectedQRCodes] = useState<
    THandlePrintProps[] | []
  >([]);

  const { data, isLoading } = useGetAllQRCodsQuery({});
  if (isLoading) {
    return <p>Loading..</p>;
  }

  const handleActiveTabChange = (tabItem: string) => {
    setActiveTab(tabItem);
  };

  const handleSelectQrCodeRow = (qrCode: THandlePrintProps) => {
    const alreadySelected = selectedQRCodes.find(
      (item) => item.uniqueCode === qrCode.uniqueCode
    );
    if (alreadySelected) {
      setSelectedQRCodes((prev) => {
        return prev.filter((item) => item.uniqueCode !== qrCode.uniqueCode);
      });
    } else {
      setSelectedQRCodes((prev) => [...prev, qrCode]);
    }
  };

  const handleAllQRCodeSelect = () => {
    setSelectedQRCodes(
      data?.data.length === selectedQRCodes.length ? [] : data?.data
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="p-6 border rounded-[16px] grid gap-4">
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <div className="w-[489px] h-6 justify-start items-center gap-6 inline-flex">
            {activationPageTabItems.map((tabItem, index) => (
              <Button
                key={index}
                variant="link"
                onClick={() => handleActiveTabChange(tabItem.value)}
                className={cn(
                  "text-center text-gray-600 text-lg font-semibold p-0 h-fit hover:no-underline",
                  {
                    "text-[#007bff]": tabItem.value === activeTab,
                  }
                )}
              >
                {tabItem.lebel}
              </Button>
            ))}
            <Button
              onClick={() => handlePrint(selectedQRCodes)}
              disabled={selectedQRCodes.length < 1}
            >
              <LucidePrinter className="size-4 mr-2" /> Print{" "}
              {selectedQRCodes?.length}
            </Button>
          </div>

          <div className="flex gap-4">
            <Input placeholder="Search..." />
            <Button>Filter</Button>
          </div>
        </div>
        <div>
          <Table className="border-b">
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead className="w-[100px] flex items-center gap-4">
                  <Checkbox
                    checked={data?.data.length === selectedQRCodes.length}
                    onCheckedChange={handleAllQRCodeSelect}
                  />
                  #
                </TableHead>
                <TableHead className="text-primary">QR Code</TableHead>
                <TableHead className="text-primary font-medium">
                  Creation Date
                </TableHead>

                <TableHead className="text-primary font-medium">
                  Print Status
                </TableHead>

                <TableHead className="text-primary font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((qrCode: TQRCode) => (
                <TableRow key={qrCode._id}>
                  <TableCell className="flex items-center gap-4">
                    <Checkbox
                      checked={
                        !!selectedQRCodes.find(
                          (item) => item.uniqueCode === qrCode.uniqueCode
                        )
                      }
                      onCheckedChange={() =>
                        handleSelectQrCodeRow({
                          qrCodeURL: qrCode.qrCodeURL,
                          uniqueCode: qrCode.uniqueCode,
                        })
                      }
                    />
                    {qrCode.serial}
                  </TableCell>
                  <TableCell>
                    <div className="border-b border-[#f2f4f7] justify-start items-center gap-2 inline-flex">
                      <div className="w-8 h-8 relative rounded">
                        <img src={qrCode.qrCodeURL} />
                      </div>
                      <span className="text-[#475467] text-sm font-normal font-roboto leading-tight tracking-tight">
                        {qrCode.uniqueCode}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{formatToTargetDate(qrCode.createdAt)}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "px-3 rounded-[12px] py-0.5  text-[#ffc107] bg-[#fff8eb] text-sm font-medium flex items-center gap-2 w-fit",
                        {
                          "text-[#12b76a] bg-[#e7f8f0]":
                            qrCode.isPrinted === "Painted",
                        }
                      )}
                    >
                      <span
                        className={cn(
                          "size-0.5 p-0.5 rounded-full bg-[#ffc107]",
                          { "bg-[#12b76a]": qrCode.isPrinted === "Painted" }
                        )}
                      ></span>{" "}
                      {qrCode.isPrinted}
                    </span>
                  </TableCell>

                  <TableCell className="h-full">
                    <div className="justify-end items-center gap-6 flex ">
                      <Button
                        className="p-0 h-fit text-primary"
                        variant="ghost"
                      >
                        <Eye />
                      </Button>
                      <Button
                        onClick={() =>
                          handlePrint([
                            {
                              qrCodeURL: qrCode.qrCodeURL,
                              uniqueCode: qrCode.uniqueCode,
                            },
                          ])
                        }
                        className="p-0 h-fit text-[#374151] hover:text-[#374151]"
                        variant="ghost"
                      >
                        <Printer />
                      </Button>
                      <Button
                        className="p-0 h-fit text-red-600 hover:text-red-600"
                        variant="ghost"
                      >
                        <Trash />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <h3 className="text-[#475467] text-sm font-normal font-roboto leading-tight tracking-tight flex-grow">
            Showing 1 to 3 of 3 entries
          </h3>
          <MyPagination />
        </div>
      </div>
    </div>
  );
};

export default PrintQR;
