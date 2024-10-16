import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import deleteIcon from "../../../../assets/icon-png/Delete.png";
import editIcon from "../../../../assets/icon-png/EditSquare.png";
import logo from "../../../../assets/logo/bornolipi-logo.png";
import bookCover from "../../../../assets/logo/book-cover.png";

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
import { formateDateWithHrAndMM } from "@/utils/common";
import ProductDetailsModal from "./ProductDetailsModal";
import ProductCard from "./ProductCard";

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
const ProductsList = () => {
  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="p-6 border rounded-[16px] grid gap-4">
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <h3 className="flex-grow">Product List</h3>
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
                  #
                </TableHead>
                <TableHead className="text-primary">Product Name</TableHead>
                <TableHead className="text-primary font-medium">
                  Cover Phone
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Product Type
                </TableHead>

                <TableHead className="text-primary font-medium">
                  Launch Date
                </TableHead>

                <TableHead className="text-primary font-medium">
                  Activate
                </TableHead>

                <TableHead className="text-primary font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parents.map((parent, index: number) => (
                <TableRow key={parent.email}>
                  <TableCell>{index}</TableCell>
                  <TableCell>
                    <div className="justify-start items-center gap-3 inline-flex">
                      <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex">
                        <img className="w-[17.99px] h-[16.35px]" src={logo} />
                      </div>
                      <span className="text-center text-[#475467] text-sm font-normal font-['Roboto'] leading-tight tracking-tight">
                        Bornolipi
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <img
                      className="w-[30px] rounded-sm border border-gray-200"
                      src={bookCover}
                    />
                  </TableCell>
                  <TableCell>Book</TableCell>
                  <TableCell>
                    {formateDateWithHrAndMM(parent.accountCreationDate)}
                  </TableCell>
                  <TableCell>2k</TableCell>
                  <TableCell className="flex gap-4 justify-end">
                    <ProductDetailsModal productId="" />
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

export default ProductsList;
