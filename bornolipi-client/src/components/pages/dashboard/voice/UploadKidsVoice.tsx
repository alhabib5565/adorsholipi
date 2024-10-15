import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUploadKidsVoiceMutation } from "@/redux/api/kids-account.api";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const UploadKidsVoice = () => {
  const { kidsId } = useParams();
  const [voice, setVoice] = useState<File | null>(null);

  const navigate = useNavigate();

  const [uploadVoice] = useUploadKidsVoiceMutation();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setVoice(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (voice) {
      const formData = new FormData();
      formData.append("file", voice);

      const res = await uploadVoice({ data: formData, id: kidsId });
      if (res.data) {
        toast.success(res.data?.message);
        navigate("/voice");
      } else {
        toast.error("Something went wrong");
      }
    } else {
      console.log("No file selected");
    }
    setVoice(null);
  };

  return (
    <div className="space-y-6">
      <PageHeader pageTitle="Upload Kids Voice" />
      <div className="p-6 w-full bg-white justify-between items-center inline-flex">
        <div className="max-w-[300px] w-full flex-col justify-start items-start gap-3 inline-flex text-gray-500 text-lg font-medium leading-normal tracking-tight">
          <p className="self-stretch justify-between items-center inline-flex">
            <span className="">Kid Name</span>
            <span className="text-gray-600">Ridoy</span>
          </p>
          <p className="self-stretch justify-between items-center inline-flex">
            <span className="">Gender</span>
            <span className="text-gray-600">Boy</span>
          </p>
          <p className="self-stretch justify-between items-center inline-flex">
            <span className="">Age</span>
            <span className="text-gray-600">3</span>
          </p>
        </div>
        <div className="max-w-[300px] w-full flex-col justify-start items-start gap-3 inline-flex text-gray-500 text-lg font-medium leading-normal tracking-tight">
          <p className="self-stretch justify-between items-center inline-flex">
            <span className="">Uploaded by</span>
            <span className="text-gray-600">Habib</span>
          </p>
          <p className="self-stretch justify-between items-center inline-flex">
            <span className="">Roles</span>
            <span className="text-gray-600">Admin</span>
          </p>
          <p className="self-stretch justify-between items-center inline-flex">
            <span className="">Date</span>
            <span className="text-gray-600">11 Oct 2024</span>
          </p>
        </div>
      </div>

      {/* upload form here */}
      <div className="mx-auto bg-white rounded-lg max-w-[400px] w-full space-y-8">
        <h4 className="px-6 py-5 bg-white border-b border-[#e3e3e3] text-black text-xl font-semibold">
          File Upload
        </h4>

        <div className="px-6 py-5 space-y-6 border-b border-[#e3e3e3]">
          <Input onChange={handleFileChange} type="file" />
          <Button disabled={!voice} onClick={handleUpload}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadKidsVoice;
