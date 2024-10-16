/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useEditUserFeedbackMutation,
  useGetOneUserFeedbackQuery,
} from "@/redux/api/user-feedback.api";
import { TUserFeedback } from "@/type/user.feedback.type";
import { formateDateWithHrAndMM } from "@/utils/common";

import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type TFeedbackModalProps = {
  feedbackId: string;
};

const FeedbackDetailModal = ({ feedbackId }: TFeedbackModalProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetOneUserFeedbackQuery(feedbackId);
  const [editUserFeedback, { isLoading: editLoading }] =
    useEditUserFeedbackMutation();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const feedbackInfo = data?.data as TUserFeedback;

  const handelFeedbackEdit = async (data: Partial<TUserFeedback>) => {
    const res = (await editUserFeedback({ data, id: feedbackId })) as any;
    console.log(res, "res");
    if (res.data) {
      toast.success(res.data?.message || "Change status successfull");
      navigate("/feedback");
    } else if (res?.error) {
      toast.error(res.error?.message || "Something went wrong");
    }
  };
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
            <DialogTitle className="mb-6 text-center">Feedback</DialogTitle>

            <div className=" px-10 flex-col justify-start items-start gap-4 inline-flex">
              <p className="self-stretch justify-between items-center inline-flex">
                <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                  Parents
                </span>
                <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                  {feedbackInfo.parentName}
                </span>
              </p>
              <p className="self-stretch justify-between items-center inline-flex">
                <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                  Mobile Number
                </span>
                <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                  {feedbackInfo?.parentMobileNumber
                    ? feedbackInfo.parentMobileNumber
                    : "not found"}
                </span>
              </p>
              <p className="self-stretch justify-between items-center inline-flex">
                <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                  Parent Account
                </span>
                <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                  {feedbackInfo.email}
                </span>
              </p>
              <p className="self-stretch justify-between items-center inline-flex">
                <span className="text-center text-gray-500 text-base font-normal font-['Nunito'] leading-snug tracking-tight">
                  Date
                </span>
                <span className="text-center text-gray-700 text-lg font-medium font-['Nunito'] leading-normal tracking-tight">
                  {formateDateWithHrAndMM(feedbackInfo.createdAt)}
                </span>
              </p>
              <h2 className="text-gray-800 text-lg font-medium leading-normal tracking-tight">
                Feedback
              </h2>
              <p className="p-6 bg-gray-50 rounded-lg border border-gray-200 basis-0 text-gray-600 text-base font-normal leading-snug tracking-tight">
                {feedbackInfo.message}
              </p>
              <div className="flex justify-end gap-4 w-full">
                <Button
                  variant="outline"
                  className="text-primary border-primary"
                  onClick={() =>
                    handelFeedbackEdit({ feedbackStatus: "Checked" })
                  }
                  disabled={
                    editLoading || feedbackInfo.feedbackStatus === "Checked"
                  }
                >
                  Checked
                </Button>
                <Button
                  onClick={() =>
                    handelFeedbackEdit({ feedbackStatus: "Issue" })
                  }
                  variant={"destructive"}
                  disabled={
                    editLoading || feedbackInfo.feedbackStatus === "Issue"
                  }
                >
                  Issue
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeedbackDetailModal;
