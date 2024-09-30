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
import ParentDetailModal from "./ParentDetailModal";

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
const ParentAccount = () => {
  return (
    <div>
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
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="text-primary">Parent Name</TableHead>
                <TableHead className="text-primary font-medium">
                  Email
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Account Creation Date
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Last Login
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Number Of Child
                </TableHead>
                <TableHead className="text-primary font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parents.map((parrent, index) => (
                <TableRow key={parrent.email}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{parrent.parentName}</TableCell>
                  <TableCell>{parrent.accountCreationDate}</TableCell>
                  <TableCell>{parrent.lastLogin}</TableCell>
                  <TableCell>{parrent.status}</TableCell>
                  <TableCell>{parrent.numberOfChild}</TableCell>
                  <TableCell className="flex gap-4 justify-end">
                    <ParentDetailModal />
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
          <h3 className="flex-grow">text</h3>
          <MyPagination />
        </div>
      </div>
    </div>
  );
};

export default ParentAccount;
