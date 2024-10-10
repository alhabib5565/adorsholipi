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
        <DialogContent className="max-w-[600px] w-full">
          <DialogHeader>
            <DialogTitle className="mb-6">Parent Account Details</DialogTitle>
            <div className="grid gap-14">
              <div>
                <img
                  className="w-[100px] h-[100px] rounded-full mx-auto border-2  border-[#FFB74D]"
                  src="https://simgbb.com/avatar/PvPCWLsjRQTm.jpg"
                />
              </div>
              <div className="h-[264px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Parent Name
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    Fatema Aktar
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Email
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    parent@gmail.com
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Device ID
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    A12BCD45EFG
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Status
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    Active
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Number of Child Profiles
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    3
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
                    Last Login
                  </div>
                  <div className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    20/06/2024{" "}
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ParentDetailModal;
