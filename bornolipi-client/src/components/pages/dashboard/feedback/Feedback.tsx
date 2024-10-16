import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import editIcon from "../../../../assets/icon-png/EditSquare.png";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MyPagination from "@/components/myUi/MyPagination";
import { formateDateWithHrAndMM } from "@/utils/common";
import { useState } from "react";
import { cn } from "@/lib/utils";
import FeedbackDetailModal from "./FeedbackDetailModal";
import { useGetAllUserFeedbackQuery } from "@/redux/api/user-feedback.api";
import { TUserFeedback } from "@/type/user.feedback.type";
import { activationPageTabItems } from "@/constant/user-feedback.constant";

const Feedback = () => {
  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading } = useGetAllUserFeedbackQuery({});
  if (isLoading) {
    <p>Loading...</p>;
  }

  const handleActiveTabChange = (tabItem: string) => {
    setActiveTab(tabItem);
  };
  return (
    <div className="space-y-6">
      <PageHeader pageTitle="Feedback" />
      <div className="p-6 border rounded-[16px] grid gap-4">
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <h3 className="flex-grow">User Feedback</h3>
          <div className="flex gap-4">
            <Input placeholder="Search..." />
            <Button>Today</Button>
          </div>
        </div>
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
        <div>
          <Table className="border-b">
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="text-primary">Parent Name</TableHead>
                <TableHead className="text-primary font-medium">
                  Mobile Number
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Email
                </TableHead>
                <TableHead className="text-primary font-medium">Date</TableHead>
                <TableHead className="text-primary font-medium">
                  Messaage
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Status
                </TableHead>

                <TableHead className="text-primary font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.map((parent: TUserFeedback, index: number) => (
                <TableRow key={parent._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{parent.parentName}</TableCell>
                  <TableCell>
                    {parent?.parentMobileNumber
                      ? parent.parentMobileNumber
                      : "not found"}
                  </TableCell>
                  <TableCell>{parent.email}</TableCell>
                  <TableCell>
                    {formateDateWithHrAndMM(parent.createdAt)}
                  </TableCell>
                  <TableCell className="truncate max-w-[200px]">
                    {parent.message}
                  </TableCell>
                  <TableCell>
                    <span className="px-3 rounded-[12px] py-0.5 bg-[#ebfff8] text-[#28a745] text-sm font-medium flex items-center gap-2 w-fit">
                      <span className="size-0.5 p-0.5 rounded-full bg-[#28a745]"></span>{" "}
                      {parent.feedbackStatus}
                    </span>
                  </TableCell>

                  <TableCell className="flex gap-4 justify-end">
                    <FeedbackDetailModal feedbackId={parent._id} />

                    <button className="size-6">
                      <img src={editIcon} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <h3 className="flex-grow">text</h3>
          <MyPagination />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
