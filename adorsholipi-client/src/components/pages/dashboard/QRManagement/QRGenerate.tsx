import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MyRadioGroup from "@/components/from/MyRadioGroup";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  generateNewQR: z.enum(["Generate New QR", "Generate New QR Bulk"], {
    required_error: "Please select one option.",
    message:
      "You must select either 'Generate New QR' or 'Generate New QR Bulk'.",
  }),
  code: z
    .string({
      required_error: "Unique code is required.",
    })
    .min(1, "Unique code can not be empty")
    .max(50, "Unique code must be less than 50 characters."),
});

const defaultValues = {
  generateNewQR: "",
  code: "",
};

const QRGenerate = () => {
  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };
  return (
    <div className="space-y-6">
      <PageHeader />
      <div className=" p-10 bg-white rounded-lg border border-gray-100 space-y-6 w-fit mx-auto">
        <h2 className="text-[#343a40] text-2xl font-semibold font-roboto leading-9">
          Generate New QR Code
        </h2>
        <MyForm
          onSubmit={onSubmit}
          resolver={zodResolver(formSchema)}
          defaultValues={defaultValues}
        >
          <div className="grid gap-12 grid-cols-1 ">
            {/* <div className="flex gap-10"> */}
            <MyRadioGroup
              items={["Generate New QR", "Generate New QR Bulk"]}
              name="generateNewQR"
            />
            {/* </div> */}
            <div className="inline-flex justify-center">
              <MyInput
                name="code"
                label="Unique Code "
                type="text"
                placeholder="Enter Unique Code"
                isGrid={true}
              />
            </div>
            <div className="inline-flex justify-center">
              <Button>Generate </Button>
            </div>
          </div>
        </MyForm>
      </div>
    </div>
  );
};

export default QRGenerate;
