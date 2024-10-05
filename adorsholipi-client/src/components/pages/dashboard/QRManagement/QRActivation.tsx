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
import { QrCode } from "lucide-react";

const kids = [
  {
    childName: "John Doe",
    email: "johndoe@example.com",
    accountCreationDate: "2023-01-15",
    lastLogin: "2024-09-29",
    status: "active",
    numberOfChild: 2,
  },
  {
    childName: "Jane Smith",
    email: "janesmith@example.com",
    accountCreationDate: "2022-07-20",
    lastLogin: "2024-09-28",
    status: "inactive",
    numberOfChild: 1,
  },
  {
    childName: "Michael Johnson",
    email: "michaelj@example.com",
    accountCreationDate: "2021-11-05",
    lastLogin: "2024-09-26",
    status: "active",
    numberOfChild: 3,
  },
];

const QRActivation = () => {
  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="p-6 border rounded-[16px] grid gap-4">
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <div className="w-[489px] h-6 justify-start items-center gap-6 inline-flex">
            <div className="text-center text-[#007bff] text-lg font-semibold ">
              All
            </div>
            <div className="text-center text-gray-600 text-lg font-medium ">
              Active QR Code
            </div>
            <div className="text-center text-gray-600 text-lg font-medium ">
              Inactive QR Code
            </div>
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
              {kids.map((parrent, index) => (
                <TableRow key={parrent.email}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="h-14 px-1 py-2 bg-white border-b border-[#f2f4f7] justify-start items-center gap-2 inline-flex">
                      {/* <div className="w-8 h-8 relative rounded" /> */}
                      {/* <img src=""/> */}
                      <QrCode className="w-8 h-8 relative rounded" />
                      <span className="text-[#475467] text-sm font-normal font-roboto leading-tight tracking-tight">
                        67324873
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>2024-09-28 10:00 AM</TableCell>
                  <TableCell>2024-09-28 10:00 AM</TableCell>
                  <TableCell>A12BCD45EFG</TableCell>

                  <TableCell className="flex gap-4 justify-end">
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
