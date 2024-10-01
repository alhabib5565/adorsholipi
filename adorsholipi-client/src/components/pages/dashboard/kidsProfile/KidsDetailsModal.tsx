import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Eye } from "lucide-react";
const KidsDetailsModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="size-6 text-primary">
            <Eye className="size-6" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[600px] max-h-[720px] h-full overflow-y-scroll w-full">
          <DialogHeader>
            <DialogTitle className="mb-6">Kids Account Details</DialogTitle>
            <div className="grid gap-14">
              <div>
                <img
                  className="w-[100px] h-[100px] rounded-full mx-auto border-2  border-[#FFB74D]"
                  src="https://simgbb.com/avatar/PvPCWLsjRQTm.jpg"
                />
              </div>
              <div className=" flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Child Name
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    Ali{" "}
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Age
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    3
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Current Score
                  </div>
                  <div className="text-center text-[#f7c869] text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    25000
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Age
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    3
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Parent Account
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    Parents
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Account Creation Date
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    20/06/2024{" "}
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Voice File
                  </div>
                  <div className="text-[#475467] text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    📁 Voice File
                  </div>
                </div>
              </div>
              <div className="py-2 bg-white rounded-lg shadow border border-gray-100 flex-col justify-start items-start gap-[5px]">
                <h3 className="px-6 py-1"> Kids Activity</h3>
                <div>
                  <Table className="border-b">
                    <TableHeader className="bg-secondary w-full">
                      <TableRow>
                        <TableHead className="w-[50px]">#</TableHead>

                        <TableHead className="text-primary font-medium">
                          Last Activity
                        </TableHead>
                        <TableHead className="text-primary font-medium">
                          Lesson
                        </TableHead>

                        <TableHead className="text-primary font-medium text-right">
                          Activity
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2024-09-28</TableCell>
                        <TableCell>
                          <span className="px-3 rounded-[12px] py-0.5 bg-secondary text-[#667085] text-sm font-medium flex items-center gap-2 w-fit">
                            <span className="size-0.5 p-0.5 rounded-full bg-[#667085]"></span>{" "}
                            Lesson 2
                          </span>
                        </TableCell>

                        <TableCell>
                          <div className="justify-end items-center flex text-white">
                            <button className="px-1.5 py-1 bg-[#00bd7e]  rounded-tl rounded-bl text-center  text-xs font-normal leading-[18px] tracking-tight">
                              Done
                            </button>
                            <button className="px-1.5 py-1 bg-[#2ec9c9] text-center  text-xs font-normal leading-[18px] tracking-tight">
                              Yes
                            </button>
                            <button className="px-1.5 py-1 bg-gray-600 rounded-tr rounded-br text-center  text-xs font-normal leading-[18px] tracking-tight">
                              Lock
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KidsDetailsModal;
