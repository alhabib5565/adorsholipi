import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
const ParentDetailModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="size-6 text-primary">
            <Eye className="size-6" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Parent Account Details</DialogTitle>
            <img
              className="size-[100px] rounded-full mx-auto border-2 border-[#FFB74D]"
              src="https://simgbb.com/avatar/PvPCWLsjRQTm.jpg"
            />
            <div className="space-y-4">
              <p className="flex justify-between text-[16px] font-[400] text-light-subtext">
                <span>Parent Name</span>{" "}
                <span className="font-medium">MD Al-Habib</span>
              </p>
              <p className="flex justify-between text-[16px] font-[400] text-light-subtext">
                <span>Email</span>{" "}
                <span className="font-medium">alhabib5565@gmail.com</span>
              </p>
              <p className="flex justify-between text-[16px] font-[400] text-light-subtext">
                <span>Device ID</span>{" "}
                <span className="font-medium">A12BCD45EFG</span>
              </p>
              <p className="flex justify-between text-[16px] font-[400] text-light-subtext">
                <span>Status</span> <span className="font-medium">Active</span>
              </p>
              <p className="flex justify-between text-[16px] font-[400] text-light-subtext">
                <span>Number of Child Profiles</span>{" "}
                <span className="font-medium">3</span>
              </p>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ParentDetailModal;
