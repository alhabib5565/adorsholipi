/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { CloudUpload, Edit, Eye } from "lucide-react";
import { formatToTargetDate } from "@/globalUtils/common";
import { Link } from "react-router-dom";

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

//TODO: fetch kids account data. currently have user data

const KidsVoices = () => {
  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading } = useGetAllQRCodsQuery({});
  if (isLoading) {
    return <p>Loading..</p>;
  }

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
                <TableHead className="w-[80px] flex items-center gap-4">
                  #
                </TableHead>
                <TableHead className="text-primary">Child Name</TableHead>
                <TableHead className="text-primary font-medium">Age</TableHead>
                <TableHead className="text-primary font-medium">
                  Gender
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Parent Account
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Creation date
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Voice File
                </TableHead>
                <TableHead className="text-primary font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((qrCode: any, index: number) => (
                <TableRow key={qrCode._id}>
                  <TableCell className="flex items-center gap-4">
                    {index + 1}
                  </TableCell>
                  <TableCell>Child Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Parent Account</TableCell>
                  <TableCell>{formatToTargetDate(qrCode.createdAt)}</TableCell>
                  <TableCell>Voice File</TableCell>

                  <TableCell className="h-full">
                    <div className="justify-end items-center gap-6 flex ">
                      <Button
                        className="p-0 h-fit text-primary"
                        variant="ghost"
                      >
                        <Eye />
                      </Button>
                      <Button
                        className="p-0 h-fit text-red-600 hover:text-red-600"
                        variant="ghost"
                      >
                        <Edit />
                      </Button>
                      <Button
                        className="p-0 h-fit text-[#374151] hover:text-[#374151]"
                        variant="ghost"
                        asChild
                      >
                        <Link to={`/voice/upload-kids-voice/${qrCode._id}`}>
                          <CloudUpload />
                        </Link>
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

export default KidsVoices;
