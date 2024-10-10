import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import deleteIcon from "../../../../assets/icon-png/Delete.png";
import editIcon from "../../../../assets/icon-png/EditSquare.png";
// import showIcon from "../../../../assets/icon-png/Show.png";

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

const parents = [
  {
    parentName: "John Doe",
    email: "johndoe@example.com",
    accountCreationDate: "2023-01-15",
    lastLogin: "2024-09-29",
    status: "active",
    numberOfChild: 2,
  },
  {
    parentName: "Jane Smith",
    email: "janesmith@example.com",
    accountCreationDate: "2022-07-20",
    lastLogin: "2024-09-28",
    status: "inactive",
    numberOfChild: 1,
  },
  {
    parentName: "Michael Johnson",
    email: "michaelj@example.com",
    accountCreationDate: "2021-11-05",
    lastLogin: "2024-09-26",
    status: "active",
    numberOfChild: 3,
  },
];
const GuestUser = () => {
  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="p-6 border rounded-[16px] grid gap-4">
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <h3 className="flex-grow">Parent account</h3>
          <div className="flex gap-4">
            <Input placeholder="Search..." />
            <Button>Filter</Button>
          </div>
        </div>
        <div>
          <Table className="border-b">
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead className="w-[100px] text-primary font-medium">
                  Device ID
                </TableHead>
                <TableHead className="text-primary">
                  Session Start Time
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Session Duration
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Pages Viewed
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Features Used
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Last Activity
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
              {parents.map((parrent) => (
                <TableRow key={parrent.email}>
                  <TableCell>A12BCD45EFG</TableCell>
                  <TableCell>2024-09-28 10:00 AM</TableCell>
                  <TableCell>5m</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>Library, Alphabet রং, ছড়া</TableCell>
                  <TableCell>Kids</TableCell>
                  <TableCell>
                    <span className="px-3 rounded-[12px] py-0.5 bg-secondary text-[#667085] text-sm font-medium flex items-center gap-2 w-fit">
                      <span className="size-0.5 p-0.5 rounded-full bg-[#667085]"></span>{" "}
                      Activity
                    </span>
                  </TableCell>
                  <TableCell className="flex gap-4 justify-end">
                    <button className="size-6">
                      <img src={editIcon} />
                    </button>
                    <button className="size-6">
                      <img src={deleteIcon} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <h3 className="flex-grow text-sm">Showing 1 to 3 of 3 entries</h3>
          <MyPagination />
        </div>
      </div>
    </div>
  );
};

export default GuestUser;
