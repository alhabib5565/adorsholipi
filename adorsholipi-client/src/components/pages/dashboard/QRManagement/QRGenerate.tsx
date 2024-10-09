import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import MyForm from "@/components/from/MyForm";
import MyRadioGroup from "@/components/from/MyRadioGroup";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { useGenerateQRCodeMutation } from "@/redux/api/qr-code.api";
import PrintOrDownLoadQRCode from "./PrintOrDownLoadQRCode";
import { TQRCode } from "./QRActivation";
// import { TQRCode } from "./QRActivation";

// Utility function to generate bulk QR codes
const generateBulkCodes = (quantity: number) =>
  Array.from({ length: quantity }, () => uuidv4());

const formSchema = z.object({
  qrType: z.enum(["Generate New QR", "Generate New QR Bulk"], {
    required_error: "Please select one option.",
    message:
      "You must select either 'Generate New QR' or 'Generate New QR Bulk'.",
  }),
});

const defaultValues = {
  qrType: "",
};

const QRGenerate = () => {
  const [qrQuantityType, setQrQuantityType] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(2);
  const [code, setCode] = useState<string | string[]>("");

  const [generateQrCode, { isLoading, data }] = useGenerateQRCodeMutation();

  // avoid unnecessary re-renders
  const generatedCodes = useMemo(() => {
    if (qrQuantityType === "Generate New QR") {
      return uuidv4();
    }
    if (qrQuantityType === "Generate New QR Bulk" && quantity > 0) {
      return generateBulkCodes(quantity);
    }
    return "";
  }, [qrQuantityType, quantity]);

  useEffect(() => {
    setCode(generatedCodes);
  }, [generatedCodes]);

  let qrCodeURL: string[] = [];
  if (data?.data) {
    qrCodeURL = Array.isArray(data.data)
      ? data?.data.map((qrCodeItem: TQRCode) => qrCodeItem.qrCodeURL)
      : [data.data.qrCodeURL];
  }

  const onSubmit = async () => {
    await generateQrCode({ uniqueCode: code });
    setCode("");
  };

  const handleCodeQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= 100) {
      setQuantity(value);
    }
  };
  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="p-6 md:col-span-3 bg-white rounded-lg border border-gray-100 space-y-6">
          <h2 className="text-[#343a40] text-2xl font-semibold font-roboto leading-9">
            Generate New QR Code
          </h2>
          <MyForm
            onSubmit={onSubmit}
            resolver={zodResolver(formSchema)}
            defaultValues={defaultValues}
          >
            <div className="grid gap-12 grid-cols-1 ">
              <MyRadioGroup
                onValueChange={setQrQuantityType}
                items={["Generate New QR", "Generate New QR Bulk"]}
                name="qrType"
              />
              {code && (
                <div>
                  <Label>Unique code</Label>
                  {Array.isArray(code) ? (
                    <div className="flex flex-wrap gap-4">
                      {code.map((qr, index) => (
                        <p
                          key={index}
                          className="px-4 py-2 rounded-md border border-primary text-sm text-primary"
                        >
                          {qr}
                        </p>
                      ))}
                    </div>
                  ) : (
                    code && (
                      <p className="px-4 py-2 rounded-md border border-primary text-sm text-primary">
                        {code}
                      </p>
                    )
                  )}
                </div>
              )}

              {qrQuantityType === "Generate New QR Bulk" && (
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="quantity">Code Quantity (Max 100)</Label>
                  <Input
                    id="quantity"
                    value={quantity}
                    onChange={handleCodeQuantityChange}
                    type="number"
                  />
                </div>
              )}

              <div className="inline-flex justify-center">
                <Button disabled={isLoading} type="submit">
                  {isLoading ? "Generating..." : "Generate"}
                </Button>
              </div>
            </div>
          </MyForm>
        </div>

        <div className="md:col-span-2">
          {data?.data && <PrintOrDownLoadQRCode qrCodeURLs={qrCodeURL} />}
        </div>
      </div>
    </div>
  );
};

export default QRGenerate;
