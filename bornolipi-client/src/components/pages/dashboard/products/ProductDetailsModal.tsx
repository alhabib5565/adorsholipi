/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Eye } from "lucide-react";

// import bookCover from "../../../../assets/logo/book-cover.png";

type TProductDetailsModalProps = {
  productId: string;
};
const ProductDetailsModal = ({ productId }: TProductDetailsModalProps) => {
  console.log(productId);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="size-6 text-primary">
            <Eye className="size-6" />
          </button>
        </DialogTrigger>
        <DialogContent className=" w-full">
          <DialogHeader>
            <DialogTitle className="mb-6 text-center">Bornolipi</DialogTitle>

            <div className="justify-start items-start gap-4 inline-flex">
              <img
                className="w-[153px] h-60 rounded"
                src={
                  "https://s3-alpha-sig.figma.com/img/fe21/8b78/7cd3beb68657aaf9079a90e70e21e5c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FpzX6zAOmWXX-yLy2Xc4RwNhR6IJm~4-amX9GcVU0YxgoJeo5CRiObP1tFBG9rYGGslsXvx7yyX3BtD8D0PgJjiA7chXr7ozr81lFYamDZrDhijX6h2zq4vSROVPycRyGH5kc1HIQpUGx7q1PgnsnvCs4OOSu9uI67vSuYtLIRJgcx8V6f9uGhyPZKK6uj7nn70urja0r1QisH3zBJBT2YpJRoP0Ka9gt4IB~bL0JZEi4z1qjxU9~fgRmg381ufHHNcRsodk1sBpEntPtj02P3eQPZ5nmCwfl70P1~OyhJLF9VY-g3heyNQ6gFJelsTPAKAUT2iBiT4mwXRMumyhAA__"
                }
              />

              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <p className="self-stretch justify-between items-center inline-flex">
                  <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Type
                  </span>
                  <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    Book
                  </span>
                </p>
                <p className="self-stretch justify-between items-center inline-flex">
                  <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Total Page
                  </span>
                  <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    30
                  </span>
                </p>
                <p className="self-stretch justify-between items-center inline-flex">
                  <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Parent Account
                  </span>

                  <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    habib@gmail.com
                  </span>
                </p>
                <p className="self-stretch justify-between items-center inline-flex">
                  <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Total Sales
                  </span>
                  <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                    342k
                  </span>
                </p>
                <div className="self-stretch justify-between items-center inline-flex">
                  <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                    Price
                  </span>
                  <p className="text-center">
                    <span className="text-[#28a745] text-2xl font-semibold font-['Nunito'] leading-[31.20px] tracking-wide">
                      ${" "}
                    </span>
                    <span className="text-gray-700 text-2xl font-semibold font-['Nunito'] leading-[31.20px] tracking-wide">
                      400/=
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-gray-800 text-lg font-medium leading-normal tracking-tight">
                About
              </h2>
              <p className="text-gray-600 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetailsModal;
