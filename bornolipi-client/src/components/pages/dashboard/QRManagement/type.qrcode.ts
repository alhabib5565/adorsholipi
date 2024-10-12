export type TQRCode = {
  createdAt: string;
  qrCodeURL: string;
  uniqueCode: string;
  serial: number;
  updatedAt: string;
  isPrinted: "Un Painted" | "Painted";
  _id: string;
};

export type THandlePrintProps = Pick<TQRCode, "uniqueCode" | "qrCodeURL">;
