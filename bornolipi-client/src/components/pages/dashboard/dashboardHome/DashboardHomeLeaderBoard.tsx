import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown } from "lucide-react";

const DashboardHomeLeaderBoard = () => {
  return (
    <div className="col-span-1 md:col-span-3 bg-white px-4 py-6 space-y-6 rounded-xl">
      <div className="w-full justify-between items-center inline-flex">
        <h2 className="text-gray-700 text-xl font-bold font-roboto">
          Leaderboard
        </h2>
        <button className="text-[#343a40] px-3 py-1.5 bg-[#f8f9fa] rounded justify-center items-center gap-2 flex text-base font-semibold leading-tight tracking-tight">
          Lesson
          <ChevronDown className="w-4 h-4 text-primary" />
        </button>
      </div>

      <Table className="border-b">
        <TableHeader className="bg-secondary w-full">
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>

            <TableHead className="text-primary font-medium">Kids</TableHead>
            <TableHead className="text-primary font-medium">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              <div className="bg-white justify-start items-center gap-1 inline-flex">
                <img
                  className="w-6 h-6 rounded-[20px]"
                  src="https://via.placeholder.com/24x24"
                />
                <span className="text-[#475467] text-sm font-normal font-roboto leading-tight tracking-tight">
                  Ali
                </span>
              </div>
            </TableCell>
            <TableCell>5000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              <div className="bg-white justify-start items-center gap-1 inline-flex">
                <img
                  className="w-6 h-6 rounded-[20px]"
                  src="https://via.placeholder.com/24x24"
                />
                <span className="text-[#475467] text-sm font-normal font-roboto leading-tight tracking-tight">
                  Ali
                </span>
              </div>
            </TableCell>
            <TableCell>5000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              <div className="bg-white justify-start items-center gap-1 inline-flex">
                <img
                  className="w-6 h-6 rounded-[20px]"
                  src="https://via.placeholder.com/24x24"
                />
                <span className="text-[#475467] text-sm font-normal font-roboto leading-tight tracking-tight">
                  Ali
                </span>
              </div>
            </TableCell>
            <TableCell>5000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        className="w-full border-2 border-primary text-primary font-semibold"
        variant="outline"
      >
        See More
      </Button>
    </div>
  );
};

export default DashboardHomeLeaderBoard;
