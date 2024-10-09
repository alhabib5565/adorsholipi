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

export type TQRCode = {
  createdAt: string;
  qrCodeURL: string;
  uniqueCode: string;
  updatedAt: string;
  _id: string;
};

const activationPageTabItems = [
  {
    lebel: "All",
    value: "all",
  },
  {
    lebel: "Active QR Code",
    value: "active",
  },
  {
    lebel: "Inactive QR Code",
    value: "inactive",
  },
];

const QRActivation = () => {
  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading } = useGetAllQRCodsQuery({});
  if (isLoading) {
    return <p>Loading..</p>;
  }

  const formatToTargetDate = (dateStr: string) => {
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

  const handleActiveTabChange = (tabItem: string) => {
    setActiveTab(tabItem);
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
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="text-primary">QR Code</TableHead>
                <TableHead className="text-primary font-medium">
                  Creation Date
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Activated Date
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Device ID
                </TableHead>

                <TableHead className="text-primary font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((qrCode: TQRCode, index: number) => (
                <TableRow key={qrCode._id}>
                  <TableCell>{index + 1}</TableCell>
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
                  <TableCell>2024-09-28 10:00 AM</TableCell>
                  <TableCell>A12BCD45EFG</TableCell>

                  <TableCell className="h-full">
                    <div className="justify-end items-center flex text-white">
                      <button className="px-1.5 py-1 bg-[#2ec9c9]  rounded-tl rounded-bl text-center  text-xs font-normal leading-[18px] tracking-tight">
                        Show
                      </button>
                      <button className="px-1.5 py-1 bg-[#4383ce] text-center  text-xs font-normal leading-[18px] tracking-tight">
                        Edit
                      </button>
                      <button className="px-1.5 py-1 bg-[#f42b1d] rounded-tr rounded-br text-center  text-xs font-normal leading-[18px] tracking-tight">
                        Delete
                      </button>
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

export default QRActivation;
